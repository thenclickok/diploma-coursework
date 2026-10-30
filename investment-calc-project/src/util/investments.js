export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let investmentValue = initialInvestment;
  let totalInterest = 0;
  let investedCap = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    totalInterest += interestEarnedInYear;
    investedCap += annualInvestment;
    investmentValue += interestEarnedInYear + annualInvestment;
    annualData.push({
      year: i + 1,
      interest: interestEarnedInYear,
      investmentValue: investmentValue,
      totalInterest: totalInterest,
      investedCapital: investedCap,
    });
  }
  return annualData;
}

const currencyCodeMap = {
  "£": { locale: "en-GB", currency: "GBP" },
  $: { locale: "en-US", currency: "USD" },
  "€": { locale: "de-DE", currency: "EUR" },
};

export function formatCurrency(value, currencySymbol = "£") {
  const config = currencyCodeMap[currencySymbol] || currencyCodeMap["£"];

  return new Intl.NumberFormat(config.locale, {
    style: "currency",
    currency: config.currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}
