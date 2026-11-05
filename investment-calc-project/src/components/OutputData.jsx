import { formatCurrency } from "../util/investments";

const OutputData = ({ data, currency, timeframe = "yearly" }) => {

  if (!data || data.length === 0) {
    return null;
  }

  const currentYear = new Date().getFullYear();
  const finalSummary = data.at(-1); // Get the last year's data for summary
  const isMonthly = timeframe === "monthly";

  return (
    <table id="result">{/*table to display result with monthly or yearly view*/}
        <thead>
            <tr>
                <th>{isMonthly ? "Month" : "Year"}</th>
                <th>Invested Capital</th>
                <th>{isMonthly ? "Interest (Month)" : "Interest (Year)"}</th>
                <th>Total Interest</th>
                <th>Investment Value</th>
            </tr>
        </thead>
        <tbody>{/*for each year, map a new row with all of that year's properties*/}
            {data.map((periodData, index) => {
                const date = new Date(currentYear, index);
                const year = date.getFullYear();
                /*padStart ensures month is always two digits, 
                e.g., "01" for January by adding a zero before any one digit number*/
                const month = String(date.getMonth() + 1).padStart(2, "0");
                const periodLabel = isMonthly ? `${year}-${month}` : currentYear + index;
                
                return (
                <tr key={periodData.period}>
                    <td>{periodLabel}</td>
                    <td>{formatCurrency(periodData.investedCapital, currency)}</td>
                    <td>{formatCurrency(periodData.interest, currency)}</td>
                    <td>{formatCurrency(periodData.totalInterest, currency)}</td>
                    <td>{formatCurrency(periodData.investmentValue, currency)}</td>
                </tr>
                );
            })}
        </tbody>
        <tfoot>
            <tr id="summary-row">
                <td>Total</td>
                <td>{formatCurrency(finalSummary.investedCapital, currency)}</td>
                <td>-</td>
                <td>{formatCurrency(finalSummary.totalInterest, currency)}</td>
                <td>{formatCurrency(finalSummary.investmentValue, currency)}</td>
            </tr>
        </tfoot>
    </table>
  )
}

export default OutputData;