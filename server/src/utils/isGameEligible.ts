import Game from "../interfaces/game.interface";
import OptionsType from "../interfaces/game.gameOptions.interface";

/**
 * @description {@function customIncludes} to lowercase the platform before comparing
 * @param array 
 * @param searchElement 
 * @returns 
 */
const customIncludes = (array: string[], searchElement: string): boolean => {
    for (let i = 0; i < array.length; i++) {
        if(array[i].toLocaleLowerCase() === searchElement.toLocaleLowerCase()){
            return true;
        }
    }
    return false;
}

/**
 * @description Check if the game is included in the provided genre and platform
 * @param {Game} game
 * @param {OptionsType} options
 */
 const isGameEligible = (game: Game, options: OptionsType) => {
    // make it for...in with branching for if array or not
    if (options && (options.genre || options.platform)) {
        if (options.genre && options.genre.toLocaleLowerCase() !== game.genre.toLocaleLowerCase()) {
            return false;
        };

        if (options.platform && !customIncludes(game.platforms, options.platform)) {
            return false;
        };
    }
    return true;
}
export default isGameEligible;