"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config/config"));
const app_1 = __importDefault(require("./loaders/app"));
const database_1 = __importDefault(require("./loaders/database"));
(0, database_1.default)()
    .then(() => {
    console.log('Database Connected!');
    app_1.default.listen(config_1.default.port, () => {
        console.log(`server listening on port ${config_1.default.port}`);
    });
})
    .catch(() => {
    console.error('error connecting to the database!');
    console.error('server closed connection');
});
//# sourceMappingURL=index.js.map