"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description {@function customIncludes} to lowercase the platform before comparing
 * @param array
 * @param searchElement
 * @returns
 */
const customIncludes = (array, searchElement) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].toLocaleLowerCase() === searchElement.toLocaleLowerCase()) {
            return true;
        }
    }
    return false;
};
/**
 * @description Check if the game is included in the provided genre and platform
 * @param {Game} game
 * @param {OptionsType} options
 */
const isGameEligible = (game, options) => {
    // make it for...in with branching for if array or not
    if (options && (options.genre || options.platform)) {
        if (options.genre && options.genre.toLocaleLowerCase() !== game.genre.toLocaleLowerCase()) {
            return false;
        }
        ;
        if (options.platform && !customIncludes(game.platforms, options.platform)) {
            return false;
        }
        ;
    }
    return true;
};
exports.default = isGameEligible;
//# sourceMappingURL=isGameEligible.js.map