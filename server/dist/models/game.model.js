"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const gameSchema = new mongoose_1.Schema({
    userId: { type: Number, required: true },
    game: { type: String, required: true },
    playTime: { type: Number, required: true },
    genre: { type: String, required: true },
    platforms: { type: [String], required: true }
});
exports.default = (0, mongoose_1.model)('Game', gameSchema);
//# sourceMappingURL=game.model.js.map