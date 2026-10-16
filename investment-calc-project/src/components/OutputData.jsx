import { calculateInvestmentResults } from "../util/investments.js";

const OutputData = ({ inputValue, isValid }) => {
    /*isValid is a prop whose function lives in App.jsx & ensures every 
    value of userInput is more than zero*/

    /*before any data is entered into the maths function below, this check 
    ensures all values are actual numbers, and if not, no maths carried out*/

    if (!isValid) {
        return null;
    };

    /*put all the customer inputs into the external function to get the output*/
    const resultData = calculateInvestmentResults(
        {
            initialInvestment: +inputValue.initialInvestment,
            annualInvestment: +inputValue.annualInvestment,
            expectedReturn: +inputValue.expectedReturn,
            duration: +inputValue.duration
        }
    );

    const currentYear = new Date().getFullYear();

  return (
    <table>{/*table to display results*/}
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>{/*for each year, map a new row with all that year's properties*/}
            {resultData.map((yearData, index) => (
                <tr key={index}>
                    <td>{currentYear + index}</td>
                    <td>{yearData.investmentValue.toFixed(2)}</td>
                    <td>{yearData.interest.toFixed(2)}</td>
                    <td>{yearData.totalInterest.toFixed(2)}</td>
                    <td>{yearData.investedCapital.toFixed(2)}</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default OutputData;