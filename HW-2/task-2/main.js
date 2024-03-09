let convertedAmount = 0;

let amountInKgs = prompt( "Ведите сумму");
let converterCurrency = prompt("Ведите валюту");

switch (converterCurrency) {
  case "USD":
    convertedAmount = amountInKgs / 89.5;
    break;
  case "EUR":
    convertedAmount = amountInKgs / 96;
    break;
  case "RUB":
    convertedAmount = amountInKgs / 1.2;
    break;
  default:
    console.error("Not supported currency");
}

console.log("converted to: "+ converterCurrency + ' ' + convertedAmount);
