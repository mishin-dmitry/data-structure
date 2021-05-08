
class Player {
  constructor(rating, nickName) {
    this.rating = rating;
    this.nickName = nickName;
  }
}


const ratings = [
  /*0*/ new Player(1100, 'Crowbar Freeman'),
  /*1*/ new Player(1200, 'London Mollarik'),
  // new Player(1600, 'Shmike')
  /*2*/ new Player(1600, 'Raziel of Kain'),
  /*3*/ new Player(1600, 'Gwinter of Rivia'),
  /*4*/ new Player(1600, 'Slayer of Fate'),
  /*5*/ new Player(3000, 'Jon Know'),
  /*6*/ new Player(4000, 'Caius Cosades'),
];


function findSpot(array, newPlayer) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
      let middle = Math.floor((left + right) / 2);
      if (array[middle].rating < newPlayer.rating) {
          left = middle + 1;
      } else {
          right = middle;
      }
  }
  return left;
}

function main() {
  const spot = findSpot(ratings, new Player(1600, 'Shmike'));
  console.log(spot);
}

main();