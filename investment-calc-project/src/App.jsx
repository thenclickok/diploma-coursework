import { useState } from "react";
import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import OutputData from './components/OutputData.jsx';
import InvestmentChart from './components/InvestmentChart.jsx';
import { calculateInvestmentResults } from "./util/investments.js";
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

  const resultData = isInputValid ? calculateInvestmentResults({
    initialInvestment: +userInput.initialInvestment,
    annualInvestment: +userInput.annualInvestment,
    expectedReturn: +userInput.expectedReturn,
    duration: +userInput.duration,
  }) : [];

  return (
    <>
      <Header title={title} subtitle={subtitle} />
      <UserInput userInput={userInput} onChangeInput={handleChange} onReset={handleReset} isValid={isInputValid} currency={currency} onCurrencyChange={setCurrency}/>
      <InvestmentChart data={resultData} />
      <OutputData data={resultData} currency={currency}/>
    </>
  )
}

export default App;
