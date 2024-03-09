let converter = {
  amount: 45,
  fuel: "АИ-95",
  liter: 0,
}

let amount = prompt( "Ведите сумму");
let fuel = prompt("Ведите вид топливо");

converter.amount = amount;
converter.fuel = fuel;


switch (converter.fuel) {
  case "АИ-92":
    liter = converter.amount / 60;
    break;
  case "АИ-95":
    liter = converter.amount / 65;
    break;
  case "АИ-98":
    liter = converter.amount / 70;
    break;
  case "ДТ":
    liter = converter.amount / 75;
    break;
  case "Газ":
    liter = converter.amount / 30;
    break;
}

console.log(converter.fuel + ' ' + liter);







