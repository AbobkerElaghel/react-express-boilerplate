import { Request, Response } from "express";
import getHighestGamesBy from "../utils/getHighestGamesBy";
import OptionsType from "../interfaces/game.gameOptions.interface";
import gameModel from "../models/game.model";
import catchAsync from '../utils/catchAsync';

const selectTopByPlayers = catchAsync(async (req: Request, res: Response) => {
    const dataset = await gameModel.find({});
    const options: OptionsType = {
        genre: req.query.genre as string,
        platform: req.query.platform as string,
    };
    const result = getHighestGamesBy('totalPlayers' , dataset, options);
    return res.json(result);
});

const selectTopByPlaytime = catchAsync(async (req: Request, res: Response) => {
    const dataset = await gameModel.find({});
    const options: OptionsType = {
        genre: req.query.genre as string,
        platform: req.query.platform as string,
    };
    const result = getHighestGamesBy('totalPlayTime', dataset, options);
    return res.json(result);
});

export { selectTopByPlayers, selectTopByPlaytime };