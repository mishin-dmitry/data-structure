const { Player, searchRightmostPlayerWithRating, insertPlayerInQueueWithShift } = require('./Doka4.js');
const assert = require('assert');
const ratings = [
    new Player(1100, 'Crowbar Freeman'),
    new Player(1200, 'London Mollarik'),
    new Player(1600, 'Raziel of Kain'),
    new Player(1600, 'Gwinter of Rivia'),
    new Player(1600, 'Slayer of Fate'),
    new Player(3000, 'Jon Know'),
    new Player(4000, 'Caius Cosades'),
];

function testSearchRightmostPlayerWithRating() {
    assert.deepStrictEqual(searchRightmostPlayerWithRating(ratings, 1600), 4);
    assert.deepStrictEqual(searchRightmostPlayerWithRating(ratings, 1100), 0);
    assert.deepStrictEqual(searchRightmostPlayerWithRating(ratings, 900), -1);
    assert.deepStrictEqual(searchRightmostPlayerWithRating(ratings, 3000), 5);
    assert.deepStrictEqual(searchRightmostPlayerWithRating(ratings, 50000), -1);
}

function testInsertPlayer() {
    let leaderboard = ratings.slice();
    insertPlayerInQueueWithShift(leaderboard, 4, new Player(1600, "Shmike"));

    const expected = [
        new Player(1100, 'Crowbar Freeman'),
        new Player(1200, 'London Mollarik'),
        new Player(1600, 'Raziel of Kain'),
        new Player(1600, 'Gwinter of Rivia'),
        new Player(1600, 'Slayer of Fate'),
        new Player(1600, "Shmike"),
        new Player(3000, 'Jon Know'),
        new Player(4000, 'Caius Cosades'),
    ];

    assert.deepStrictEqual(leaderboard, expected);

}

function main() {
    testSearchRightmostPlayerWithRating();
    testInsertPlayer();
    console.log('All tests for const passed successfully! Congrats');
}

main();