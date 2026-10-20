const OutputData = ({ data }) => {

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