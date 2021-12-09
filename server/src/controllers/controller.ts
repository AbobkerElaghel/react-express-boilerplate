import { Request, Response } from "express";
import catchAsync from '../utils/catchAsync';

const helloWorld = catchAsync(async (req: Request, res: Response) => {
    res.send('Hello World from the server')
});

export { helloWorld };