import { useState } from 'react';


const UserInput = ({ userInput, onChangeInput, onReset, isValid }) => {
  const [ currency, setCurrency ] = useState("£");

/*isValid is a prop whose function lives in App.jsx & ensures every value of 
userInput is more than zero, otherwise the user gets an error message*/
 
/*onReset is a propr whose function lives in App.jsx to return the userInput to its default values
 but this page's reset button also needs the setCurrency default value
 so the two are combined into handleInputReset which is passed into the RESET 
 button's onClick attribute */
  const handleInputReset = () => {
    onReset();
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
          <input value={userInput.initialInvestment} id='initialInvestment' type='number' min="1" onChange={(e) => onChangeInput('initialInvestment', e.target.value)} required/>
        </div>
        <div className="input-group">
          <label htmlFor='annualInvestment'>Annual Investment ({currency})</label> 
          <input value={userInput.annualInvestment} id='annualInvestment' type='number' min="1" onChange={(e) => onChangeInput('annualInvestment', e.target.value)} required/>
        </div>
        <div className="input-group">
          <label htmlFor='expectedReturn'>Expected Return (%)</label> 
          <input value={userInput.expectedReturn} id='expectedReturn' type='number' min="1" onChange={(e) => onChangeInput('expectedReturn', e.target.value)} required/>
        </div>
        <div className="input-group">
          <label htmlFor='duration'>Duration (years)</label> 
          <input value={userInput.duration} id='duration' type='number' min="1" onChange={(e) => onChangeInput('duration', e.target.value)} required/>
        </div>

        {!isValid && (
          <p className="error-message">
            All fields must contain positive numbers.
          </p>
        )}
        <div>
          <p>To reset all fields back to their original values, select RESET</p>
          <button type='button' onClick={handleInputReset}>RESET</button>
        </div>
      </form>
    </section>
  ) 
}

export default UserInput;