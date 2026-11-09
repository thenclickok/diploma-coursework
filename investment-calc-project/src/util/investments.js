export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
  timeframe = "yearly",
}) {
  /*Adding the monthly vs yearly option required some variable renaming 
  and new variables to be created. I also added a ternary expression to 
  the for loop to determine whether to use the monthly or yearly values 
  for interest, investment, and duration.*/
  const isMonthly = timeframe === "monthly";
  const totalPeriods = isMonthly ? duration * 12 : duration;
  const periodicRate = isMonthly
    ? expectedReturn / 12 / 100
    : expectedReturn / 100;
  const periodicInvestment = isMonthly
    ? annualInvestment / 12
    : annualInvestment;

  const results = [];
  let investmentValue = initialInvestment;
  let totalInterest = 0;
  let investedCapital = initialInvestment;

  for (let i = 0; i < totalPeriods; i++) {
    const interestEarnedInPeriod = investmentValue * periodicRate;
    totalInterest += interestEarnedInPeriod;
    investedCapital += periodicInvestment;
    investmentValue += interestEarnedInPeriod + periodicInvestment;
    results.push({
      period: i + 1,
      interest: interestEarnedInPeriod,
      investmentValue: investmentValue,
      totalInterest: totalInterest,
      investedCapital: investedCapital,
    });
  }
  return results;
}

const currencyCodeMap = {
  "£": { locale: "en-GB", currency: "GBP" },
  $: {
    locale: "en-US",
    currency: "USD",
  } /*VS Code is showing $ without quotes as it is a 
  valid identifier character even though Gemini suggests 
  including quotes for visual symmetry*/,
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
