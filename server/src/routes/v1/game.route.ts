import express from "express";
import { selectTopByPlayers, selectTopByPlaytime} from "../../controllers/game.controller";

const router = express.Router();
router.get('/select_top_by_playtime', selectTopByPlaytime);
router.get('/select_top_by_players', selectTopByPlayers);
export default router;