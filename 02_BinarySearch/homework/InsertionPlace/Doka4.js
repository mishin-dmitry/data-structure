class Player {
  constructor(rating, nickName) {
    this.rating = rating;
    this.nickName = nickName;
  }
}

function searchRightmostPlayerWithRating(queue, ratingBand) {
  let left = 0;
  let right = queue.length - 1;

  while (left < right) {
    const middle = Math.ceil((left + right) / 2)

    if (queue[middle].rating > ratingBand) {
      right = middle - 1
    } else {
      left = middle
    }
  }

  return queue[left].rating !== ratingBand ? -1 : left
}

function insertPlayerInQueueWithShift(queue, index, newPlayer) {
  const lastOfExists = searchRightmostPlayerWithRating(queue, newPlayer.rating)

  index = lastOfExists === index ? index + 1 : index

  for (let i = queue.length; i !== index; i--) {
    queue[i] = queue[i - 1]
  }

  queue[index] = newPlayer
}

module.exports = { Player, searchRightmostPlayerWithRating, insertPlayerInQueueWithShift }