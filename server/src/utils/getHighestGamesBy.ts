import OptionsType from "../interfaces/game.gameOptions.interface";
import Game from "../interfaces/game.interface";
import Games from "../interfaces/games.interface";
import isGameEligible from "./isGameEligible";

/**
 * @description accepts the Games and filter them according to the by param based on playing time or number of player
 * @param By filter to get games by total Players or total time
 * @param dataset dataset of the games to filter
 * @param options options for advanced filtering
 * @returns filterd games according to the options provided  via the params
 */
const getHighestGamesBy = (By: 'totalPlayTime' | 'totalPlayers', dataset: Game[], options: OptionsType) => {
    const games: Games[] = _getGames(dataset, options);
    let result: Games[] = [];
    let max = -Infinity;
    for (let i = 0; i < games.length; i++) {
      if (games[i][By] > max) {
        result = [games[i]];
        max = games[i][By];
      } else if (games[i][By] === max) {
        result.push(games[i]);
      };
    };
    return result;
  }

  /**
   * @description used to filter according to options object and count the total unique
   * player for each game and the total played time for each game
   *
   * @param {Game[]} dataset dataset of the games to filter
   * @param {OptionsType} options options for advanced filtering
   * @returns array of games that follow the new interface {@code Games}
   */
  const _getGames = (dataset: Game[], options: OptionsType): Games[] => {
    if (!dataset.length) {
      // dataset is empty
      return [];
    };

    const occurrences: any = {};

    for (let i = 0; i < dataset.length; i++) {
      if (!isGameEligible(dataset[i], options)) {
        continue;
      }
      if (occurrences[dataset[i].game]) {
        occurrences[dataset[i].game].totalPlayTime = occurrences[dataset[i].game].totalPlayTime + dataset[i].playTime;
        occurrences[dataset[i].game].totalPlayers++;
      } else {
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

  export default getHighestGamesBy;