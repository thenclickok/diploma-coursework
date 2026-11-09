import { useState, useMemo } from "react";
import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import OutputData from './components/OutputData.jsx';
import InvestmentChart from './components/InvestmentChart.jsx';
import { calculateInvestmentResults } from "./util/investments.js";
import { generatepdf } from "./util/generatereport.js";
import './App.css';

//initial input values separated out so I can use these for the reset button in UserInput component
const INITIAL_USER_INPUT = {
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  };

function App() {
  const title = 'Investment Calculator';
  const subtitle = 'Every penny counts.';
  const [currency, setCurrency] = useState('£');
  const [userInput, setUserInput] = useState(INITIAL_USER_INPUT);
  const [timeframe, setTimeframe] = useState("yearly");

  /*I used propertyKey instead of inputIdentifier because the first argument in handleChange is the property key from userInput eg 'initialInvestment'*/
  const handleChange = (propertyKey, newValue) => {
    setUserInput((prevUserInput) => { 
      return {
      ...prevUserInput, 
      [propertyKey]: newValue === '' ? '' : +newValue,
      /*the plus on newValue turns it from string to number*/
      /*the ternary expression above allows user to hit backspace 
      to clear number before entering a new number*/
      };
    });
  };

   const handleReset = () => {
    setUserInput(INITIAL_USER_INPUT);
    setCurrency('£'); //resets currency back to default value
  };

  /*before any data is entered into the maths function below, this check 
    ensures all values are actual numbers greater than zero, and if not, no maths carried out*/

  const isInputValid = Object.values(userInput).every((value) => value !== "" && !Number.isNaN(+value) && +value > 0);

  /*useMemo calculates investment results only when the numbers or validity changes 
   (and not for example, a change to currency), to stop it recalculating on every render*/
  
  const resultData = useMemo(() => {
    if (!isInputValid) return [];

    return calculateInvestmentResults({
    initialInvestment: +userInput.initialInvestment,
    annualInvestment: +userInput.annualInvestment,
    expectedReturn: +userInput.expectedReturn,
    duration: +userInput.duration,
    timeframe: timeframe,
  });
}, [userInput, isInputValid, timeframe]);

  return (
    <>
      <Header title={title} subtitle={subtitle} />
      <UserInput userInput={userInput} onChangeInput={handleChange} onReset={handleReset} isValid={isInputValid} currency={currency} onCurrencyChange={setCurrency}/>
      {/*Segmented toggle control for monthly vs yearly option*/}
      <div className="view-toggle-container">
        <div className="view-toggle">
          <button type="button" className={timeframe === "yearly" ? "active" : ""} onClick={() => setTimeframe("yearly")}>Yearly View</button> 
          <button type="button" className={timeframe === "monthly" ? "active" : ""} onClick={() => setTimeframe("monthly")}>Monthly View</button>
        </div>
      </div>
      <OutputData data={resultData} currency={currency} timeframe={timeframe}/>
      {resultData.length > 0 && (<button type="button" className="button center" onClick={() => generatepdf({ ...userInput, results: resultData, currency })}>Download PDF</button>) }
      <InvestmentChart data={resultData} timeframe={timeframe}/>
    </>
  )
}

export default App;
