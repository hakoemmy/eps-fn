const moneyFormatter = (amount, currency = "ZAR", locales="en-us") => {
  if (isNaN(amount)) {
    return amount;
  }
  const formatter = new Intl.NumberFormat(locales, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
    currencyDisplay: 'narrowSymbol'
  });
  return formatter.format(amount);
};

export default moneyFormatter;
