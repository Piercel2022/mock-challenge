
const convertCurrency = (conversionRate) => (fromCurrency) => (toCurrency) => (amount) =>
{
    const convertedAmount = (
        amount * conversionRate[fromCurrency][toCurrency]
    ).toFixed(3)
  return `${amount} ${fromCurrency} is equal to ${convertedAmount} ${toCurrency}`;

}

const usdToEur = convertCurrency({USD : {EUR : 0.85}});

console.log(usdToEur("USD")("EUR")(300));


