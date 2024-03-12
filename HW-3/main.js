let cards = ["46782346", "45781218", "79874568", "12157845", "36151845", "41250895", "41201961"];
let count = 0;
for(let i = 0; i < cards.length; i++){
let cardFirstNumber = cards[i].slice(0, 1);
  if(cardFirstNumber === "4"){
    count++;
  }
}

console.log('Карт VISA ' + count + ' из' + cards.length)





