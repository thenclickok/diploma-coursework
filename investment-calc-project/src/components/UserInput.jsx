import { useState } from 'react';

const UserInput = () => {
  const [ userInput, setUserInput ] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  /*I used propertyKey instead of inputIdentifier because the first argument in handleChange is the property key from userInput eg 'initialInvestment'*/
  const handleChange = (propertyKey, newValue) => {
    setUserInput((prevUserInput) => { 
      return {
      ...prevUserInput, 
      [propertyKey]: +newValue,
      };
    });
  };

  return(
    <section id="user-input">
      <form>
        <div className="input-group">
          <label htmlFor='initialInvestment'>Initial Investment ($)</label> 
          <input value={userInput.initialInvestment} id='initialInvestment' type='number' onChange={(e) => handleChange('initialInvestment', e.target.value)} required/>
        </div>
        <div className="input-group">
          <label htmlFor='annualInvestment'>Annual Investment ($)</label> 
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
      </form>
    </section>
  ) 
}

export default UserInput;