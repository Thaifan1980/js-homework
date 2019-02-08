const eightBalls = [8, 8, 9, 8, 8, 8, 8, 8];

function findIndex(balls) {
  let group1 = balls[0] + balls[1] + balls[2];
  let group2 = balls[3] + balls[4] + balls[5];

  if (group1 > group2) {
    if (balls[0] === balls[1]) {
      return 3;
    } else if (balls[0] > balls[1]) {
      return 1;
    } else {
      return 2;
    }
  } else if (group1 < group2) {
    if (balls[3] === balls[4]) {
      return 6;
    } else if (balls[3] > balls[4]) {
      return 4;
    } else {
      return 5;
    }
  } else {
    if (balls[6] > balls[7]) {
      return 7;
    } else {
      return 8;
    }
  }
}

console.log("Heaviest balls is on " + findIndex(eightBalls) + " position");
