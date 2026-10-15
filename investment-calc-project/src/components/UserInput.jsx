import { useState } from 'react';

//initial input values separated out so I can use these for the reset button
const INITIAL_USER_INPUT = {
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  };

const UserInput = () => {
  const [ userInput, setUserInput ] = useState(INITIAL_USER_INPUT);
  const [ currency, setCurrency ] = useState("£");

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
  //below ensures every value of userInput is more than zero
  const isInputValid =
   Object.values(userInput).every((value) => value !== '' && value > 0);

  const handleReset = () => {
    setUserInput(INITIAL_USER_INPUT);
    setCurrency("£");
  };

  return(
    <section id="user-input">
      <form>
        <div className="currency-selection">
          <p>Select Currency:</p>
          <div className="segmented-control">{/*this div will have CSS to look like a pill which hides the standard tiny radio buttons*/}
            <label className="segment-item">{/*hidden inputs (inside labels) all have same name (but different values) so only one radio button by that name can be checked at a time*/}
              <input type="radio" name="currency" value="$" checked={currency === "$"} onChange={(e) => setCurrency(e.target.value)}/>
              <span className="segment-button">USD ($)</span>{/*what the user sees as a selection*/}
            </label>

            <label className="segment-item">
              <input type="radio" name="currency" value="£" checked={currency === "£"} onChange={(e) => setCurrency(e.target.value)}/>
              <span className="segment-button">GBP (£)</span>
            </label>

            <label className="segment-item">
              <input type="radio" name="currency" value="€" checked={currency === "€"} onChange={(e) => setCurrency(e.target.value)}/>
              <span className="segment-button">EUR (€)</span>
            </label>
          </div>
        </div>

        <div className="input-group">
          <label htmlFor='initialInvestment'>Initial Investment ({currency})</label> 
          <input value={userInput.initialInvestment} id='initialInvestment' type='number' onChange={(e) => handleChange('initialInvestment', e.target.value)} required/>
        </div>
        <div className="input-group">
          <label htmlFor='annualInvestment'>Annual Investment ({currency})</label> 
          <input value={userInput.annualInvestment} id='annualInvestment' type='number' onChange={(e) => handleChange('annualInvestment', e.target.value)} required/>
        </div>
        <div className="input-group">
          <label htmlFor='expectedReturn'>Expected Return (%)</label> 
          <input value={userInput.expectedReturn} id='expectedReturn' type='number' onChange={(e) => handleChange('expectedReturn', e.target.value)} required/>
        </div>
        <div className="input-group">
          <label htmlFor='duration'>Duration (years)</label> 
          <input value={userInput.duration} id='duration' type='number' onChange={(e) => handleChange('duration', e.target.value)} required/>
        </div>

        {!isInputValid && (
          <p className="error-message">
            All fields must contain positive numbers.
          </p>
        )}
        <div>
          <p>To reset all fields back to their original values, select RESET</p>
          <button type='button' onClick={handleReset}>RESET</button>
        </div>
      </form>
    </section>
  ) 
}

export default UserInput;