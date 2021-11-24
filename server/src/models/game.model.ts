import { Schema, model, connect } from 'mongoose';
import Game from '../interfaces/game.interface';

const gameSchema = new Schema<Game>({
    userId: { type: Number, required: true },
    game: { type: String, required: true },
    playTime: { type: Number, required: true },
    genre: { type: String, required: true },
    platforms: { type: [String], required: true }
  });

export default model<Game>('Game', gameSchema);
