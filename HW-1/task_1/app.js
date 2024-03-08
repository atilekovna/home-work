let clientStateNumber = {
    number: "01",
    stateNumber: "01KG123AAA",
    region: "Bishkek",
};

let regionStateNumber = prompt("Regions state number");

// console.log(clientStateNumber.region + " " + clientStateNumber.stateNumber);
clientStateNumber.number = regionStateNumber.slice(0,2);
clientStateNumber.stateNumber = regionStateNumber;


if (clientStateNumber.number === '01'){
    console.log("Бишкек" + " " + clientStateNumber.stateNumber);
} else if (clientStateNumber.number === '02') {
    console.log("Ош" + " " + clientStateNumber.stateNumber);
} else if (clientStateNumber.number === '03'){
    console.log("Баткенская обл." + " " + clientStateNumber.stateNumber)
} else if (clientStateNumber.number === '04'){
    console.log("Жалалабадская обл." + " " + clientStateNumber.stateNumber)
} else if (clientStateNumber.number === '05'){
    console.log("Нарынская обл." + " " + clientStateNumber.stateNumber)
} else if (clientStateNumber.number === '06'){
    console.log("Ошская обл." + " " + clientStateNumber.stateNumber)
} else if (clientStateNumber.number === '07'){
    console.log("Талас" + " " + clientStateNumber.stateNumber)
} else if (clientStateNumber.number === '08'){
    console.log("Чуйская обл." + " " + clientStateNumber.stateNumber)
} else if (clientStateNumber.number === '09'){
    console.log("Иссык-Кульская обл." + " " + clientStateNumber.stateNumber)
}





