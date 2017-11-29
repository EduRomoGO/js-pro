const {
    getPlayers,
    throwDice,
    savePlayerScore,
    getScoreBoard
} = require('./index.js');

getPlayers((err, players) => {
    if (err) console.log(err);
    else {
        const playerScore = {
            name: players[0],
            score: []
        };
        ensureThrowDice((score) => {
            playerScore.score = score;
            savePlayerScore(playerScore, (err) => {
                if(err) console.log(err);
                else {
                    getScoreBoard((err, board) => {
                        if (err) console.log(err);
                        else console.log(board);
                    });
                }
            });
        });
    }
});

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
