const figures = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "j",
  "d",
  "k",
  "a"
];
const colors = ["kier", "karo", "pik", "trefl"];

const testPattern = [
  { figure: "3", color: "kier", value: 1 },
  { figure: "4", color: "kier", value: 2 },
  { figure: "5", color: "kier", value: 3 },
  { figure: "6", color: "kier", value: 4 },
  { figure: "7", color: "kier", value: 5 }
];

function intializeCards(figures, colors) {
  let temp = [];
  for (let i = 0; i < figures.length; i++) {
    for (let j = 0; j < colors.length; j++) {
      temp.push({
        figure: figures[i],
        color: colors[j],
        value: i
      });
    }
  }

  return temp;
}

function drawCards(cards) {
  let temp = [];

  for (i = 0; i < 5; i++) {
    temp.push(cards.splice(Math.floor(Math.random() * cards.length), 1)[0]);
  }

  return temp;
}

function sortCards(cards) {
  cards.sort((a, b) => {
    if (a.value < b.value) return -1;
    else if (a.value > b.value) return 1;
    else return 0;
  });
  return cards;
}

function checkCards(cards) {
  result = {
    color: 0,
    pairs: 0,
    three: 0,
    four: 0,
    strit: 0,
    highestCard: 0
  };
  result.highestCard = cards[4].value;

  for (let i = 0, tempPairs = 0; i < cards.length; i++) {
    if (cards[i + 1] && cards[i].value === cards[i + 1].value) {
      tempPairs += 1;
    } else {
      if (tempPairs === 1) {
        result.pairs += 1;
        tempPairs = 0;
      } else if (tempPairs === 2) {
        result.three += 1;
        tempPairs = 0;
      } else if (tempPairs === 3) {
        result.four += 1;
        tempPairs = 0;
      }
    }

    if (cards[i + 1] && cards[i].value === cards[i + 1].value - 1) {
      result.strit += 1;
    }

    if (cards[i + 1] && cards[i].color === cards[i + 1].color) {
      result.color += 1;
    }
  }

  return result;
}

function analizeResult(result) {
  //console.log(result);
  if (result.strit === 4 && result.color === 4) {
    if (result.highestCard === 12) {
      return "Royal flush";
    } else {
      return "Straigth flush";
    }
  } else if (result.four === 1) {
    return "Four of a kind ";
  } else if (result.three === 1 && result.pairs === 1) {
    return "Full house ";
  } else if (result.color === 4) {
    return "Color ";
  } else if (result.strit === 4) {
    return "Straight";
  } else if (result.three === 1) {
    return "Set-trips";
  } else if (result.pairs > 0) {
    if (result.pairs === 2) {
      return "Two pair ";
    } else {
      return "Pair ";
    }
  } else {
    return "High card " + figures[result.highestCard];
  }
}

let fiveCards = sortCards(drawCards(intializeCards(figures, colors)));

console.log("------------------------------");
fiveCards.forEach(elem => {
  console.log(elem.figure + " - " + elem.color);
});
console.log("------------------------------");
console.log("Result :", analizeResult(checkCards(fiveCards)));
console.log("------------------------------");

// testPattern.forEach(elem => {
//   console.log(elem.figure + " " + elem.color);
// });

// console.log(analizeResult(checkCards(sortCards(testPattern))));
