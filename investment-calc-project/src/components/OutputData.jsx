import { formatCurrency } from "../util/investments";

const OutputData = ({ data, currency }) => {

  if (!data || data.length === 0) {
    return null;
  }

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
        <tbody>{/*for each year, map a new row with all of that year's properties*/}
            {data.map((yearData, index) => (
                <tr key={currentYear + index}>
                    <td>{currentYear + index}</td>
                    <td>{formatCurrency(yearData.investmentValue, currency)}</td>
                    <td>{formatCurrency(yearData.interest, currency)}</td>
                    <td>{formatCurrency(yearData.totalInterest, currency)}</td>
                    <td>{formatCurrency(yearData.investedCapital, currency)}</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default OutputData;