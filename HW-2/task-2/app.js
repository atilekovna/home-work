// let priorityPlanets = {
//   name: "Земля",
//   number: "1",
// };
//
// let planetNumber = prompt("Enter the planet number");
//
// priorityPlanets.number = planetNumber;
//
// if (priorityPlanets.number === "1"){
//   console.log("Меркурий");
// } else if (priorityPlanets.number === "2"){
//   console.log("Венера");
// }  else if (priorityPlanets.number === "3") {
//   console.log("Земля");
// }   else if (priorityPlanets.number === "4") {
//   console.log("Марс");
// }  else if (priorityPlanets.number === "5") {
//   console.log("Юпитер");
// }  else if (priorityPlanets.number === "6") {
//   console.log("Сатурн");
// }  else if (priorityPlanets.number === "7") {
//   console.log("Уран");
// }  else if (priorityPlanets.number === "8") {
//   console.log("Нептун");
// };


///////////////////////////////////////////////


let priorityPlanets = {
  name: "Земля",
  number: "1",
};

let planetNumber = prompt("Enter the planet number");

priorityPlanets.number = planetNumber;

switch (priorityPlanets.number) {
  case "1":
    console.log("Меркурий");
    break;
  case "2":
    console.log("Венера");
    break;
  case "3":
    console.log("Земля");
    break;
  case "4":
    console.log("Марс");
    break;
  case "5":
    console.log("Юпитер");
    break;
  case "6":
    console.log("Сатурн");
    break;
  case "7":
    console.log("Уран");
    break;
  case "8":
    console.log("Юпитер");
    break;
  case "9":
    console.log("Плутон");
    break;
}



