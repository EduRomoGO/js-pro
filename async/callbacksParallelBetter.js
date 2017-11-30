const {
    getPlayers,
    throwDice,
    savePlayerScore,
    getScoreBoard
} = require('./index.js');

const players = ['Fry', 'Bender', 'Leela', 'Amy', 'Zoidberg'];

let playersSaved = 0;
players.forEach(player => {
    const playerScore = {
        name: player,
        score: []
    };

    ensureThrowDice((score) => {
        playerScore.score = score;
        savePlayerScore(playerScore, (err) => {
            if(err) console.log(err);
            else {
                if (++playersSaved === players.length) {
                    retryFn(getScoreBoard, result => console.log(result));
                }
            }
        });
    });
});

const retryFn = (fn, callback) => {
    const fnHandler = (err, result) => {
        if(!err) callback(result);
        else fn(fnHandler);
    };

    fn(fnHandler);
};

const ensureThrowDice = callback => {
    const score = [];
    const manageDiceThrow = (err, diceScore) => {
        if (!err) {
            score.push(diceScore);
            if (score.length === 2) callback(score);
            else throwDice(manageDiceThrow);
        } else throwDice(manageDiceThrow);
    };

    throwDice(manageDiceThrow);
};
