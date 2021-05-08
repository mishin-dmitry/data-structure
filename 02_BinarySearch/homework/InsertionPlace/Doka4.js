class Player {
  constructor(rating, nickName) {
    this.rating = rating;
    this.nickName = nickName;
  }
}

function searchRightmostPlayerWithRating(queue, ratingBand) {
  return -1; // please implement
}

function insertPlayerInQueueWithShift(queue, index, newPlayer) {
  // please implement
}

module.exports = { Player, searchRightmostPlayerWithRating, insertPlayerInQueueWithShift }