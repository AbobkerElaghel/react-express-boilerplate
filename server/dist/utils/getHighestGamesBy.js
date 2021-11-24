"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isGameEligible_1 = __importDefault(require("./isGameEligible"));
/**
 * @description accepts the Games and filter them according to the by param based on playing time or number of player
 * @param By filter to get games by total Players or total time
 * @param dataset dataset of the games to filter
 * @param options options for advanced filtering
 * @returns filterd games according to the options provided  via the params
 */
const getHighestGamesBy = (By, dataset, options) => {
    const games = _getGames(dataset, options);
    let result = [];
    let max = -Infinity;
    for (let i = 0; i < games.length; i++) {
        if (games[i][By] > max) {
            result = [games[i]];
            max = games[i][By];
        }
        else if (games[i][By] === max) {
            result.push(games[i]);
        }
        ;
    }
    ;
    return result;
};
/**
 * @description used to filter according to options object and count the total unique
 * player for each game and the total played time for each game
 *
 * @param {Game[]} dataset dataset of the games to filter
 * @param {OptionsType} options options for advanced filtering
 * @returns array of games that follow the new interface {@code Games}
 */
const _getGames = (dataset, options) => {
    if (!dataset.length) {
        // dataset is empty
        return [];
    }
    ;
    const occurrences = {};
    for (let i = 0; i < dataset.length; i++) {
        if (!(0, isGameEligible_1.default)(dataset[i], options)) {
            continue;
        }
        if (occurrences[dataset[i].game]) {
            occurrences[dataset[i].game].totalPlayTime = occurrences[dataset[i].game].totalPlayTime + dataset[i].playTime;
            occurrences[dataset[i].game].totalPlayers++;
        }
        else {
            occurrences[dataset[i].game] = {
                id: dataset[i]._id,
                game: dataset[i].game,
                genre: dataset[i].genre,
                platforms: dataset[i].platforms,
                totalPlayTime: dataset[i].playTime,
                totalPlayers: 1
            };
        }
    }
    return Object.values(occurrences);
};
exports.default = getHighestGamesBy;
//# sourceMappingURL=getHighestGamesBy.js.map