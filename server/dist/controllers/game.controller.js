"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectTopByPlaytime = exports.selectTopByPlayers = void 0;
const getHighestGamesBy_1 = __importDefault(require("../utils/getHighestGamesBy"));
const game_model_1 = __importDefault(require("../models/game.model"));
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const selectTopByPlayers = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dataset = yield game_model_1.default.find({});
    const options = {
        genre: req.query.genre,
        platform: req.query.platform,
    };
    const result = (0, getHighestGamesBy_1.default)('totalPlayers', dataset, options);
    return res.json(result);
}));
exports.selectTopByPlayers = selectTopByPlayers;
const selectTopByPlaytime = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dataset = yield game_model_1.default.find({});
    const options = {
        genre: req.query.genre,
        platform: req.query.platform,
    };
    const result = (0, getHighestGamesBy_1.default)('totalPlayTime', dataset, options);
    return res.json(result);
}));
exports.selectTopByPlaytime = selectTopByPlaytime;
//# sourceMappingURL=game.controller.js.map