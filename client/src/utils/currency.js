export const conversionRates = {
  INR: 1,
  USD: 0.012,
};

export const currencySymbols = {
  INR: "₹",
  USD: "$",
};

export const formatCurrency = (amount, currency = "INR") => {
  const convertedAmount = amount * conversionRates[currency];

  return `${currencySymbols[currency]}${convertedAmount.toFixed(2)}`;
};