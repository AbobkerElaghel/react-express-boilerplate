"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const http_status_1 = __importDefault(require("http-status"));
const handleError_1 = __importDefault(require("../middlewares/handleError"));
const AppError_1 = __importDefault(require("../utils/AppError"));
const game_route_1 = __importDefault(require("../routes/v1/game.route"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.options('*', (0, cors_1.default)());
app.use('/v1', game_route_1.default);
app.use(express_1.default.static(path_1.default.join(__dirname, '..', '..', '..', 'build')));
// response for requests to non existsing end points (404).
app.use((req, res, next) => {
    next(new AppError_1.default(http_status_1.default.NOT_FOUND, 'Not found'));
});
// handles error if exists
app.use(handleError_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map