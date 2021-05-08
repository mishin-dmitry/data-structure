class Player {
  constructor(ratingBand, nickName) {
    this.ratingBand = ratingBand;
    this.nickName = nickName;
  }

  getRatingBand() {
    return this.ratingBand;
  }

  getNickName() {
    return this.nickName;
  }
}

function searchLeftmostPlayerWithRating(queue, search) {
  let left = 0;
  let right = queue.length;
  while (left < right) {
      let middle = Math.floor((left + right) / 2);
      if (queue[middle].getRatingBand() < search) {
          left = middle + 1;
      } else {
          right = middle;
      }
  }
  return left;
}

function main() {
  const queue = [
    new Player(1000, 'Crowbar Freeman'),
    new Player(1000, 'London Mollarik'),
    new Player(1010, 'London Mollarik 10'),
    new Player(1012, 'London Mollarik 12'),
    new Player(1014, 'London Mollarik 14'),
    new Player(1016, 'London Mollarik 16'),
    new Player(1016, 'London Mollarik 18'),
    new Player(1500, 'Raziel of Kain'),
    new Player(1500, 'Gwinter of Rivia'),
    new Player(1500, 'Slayer of Fate'),
    new Player(3000, 'Jon Know'),
    new Player(4000, 'Caius Cosades')
  ];

  console.log('1011:' + queue[searchLeftmostPlayerWithRating(queue, 1011)].getNickName());
  console.log('1013:' + queue[searchLeftmostPlayerWithRating(queue, 1013)].getNickName());
  console.log('1015:' + queue[searchLeftmostPlayerWithRating(queue, 1015)].getNickName());
  console.log('1017:' + queue[searchLeftmostPlayerWithRating(queue, 1017)].getNickName());
}

main();