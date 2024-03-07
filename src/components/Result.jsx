import { calculateInvestmentResults, formatter } from '../util/investment.js';

export default function Result({ userInput }) {
  const calculatedResult = calculateInvestmentResults(userInput);
  console.log(calculatedResult);

  const initialInvestment =
    calculatedResult[0].valueEndOfYear -
    calculatedResult[0].interest -
    calculatedResult[0].annualInvestment;

  return (
    <table id='result'>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {calculatedResult.map((data) => {
          const totalInterest =
            data.valueEndOfYear -
            data.annualInvestment * data.year -
            initialInvestment;
          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(initialInvestment)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
