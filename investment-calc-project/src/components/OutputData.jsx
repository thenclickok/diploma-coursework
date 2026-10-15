import { calculateInvestmentResults } from "../util/investment.js";

const OutputData = ({ inputValue }) => {
    /*put all the customer inputs into the external function to get the output*/
  const resultData = calculateInvestmentResults(
        {
            initialInvestment: +inputValue.initialInvestment,
            annualInvestment: +inputValue.annualInvestment,
            expectedReturn: +inputValue.expectedReturn,
            duration: +inputValue.duration
        }
    );

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
                    <td>{yearData.year}</td>
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