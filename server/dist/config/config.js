"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
// ---------------------------------------
// to always connect to online database //
// change to 
// dotenv.config({ path: path.join(__dirname, '..', '..', '.', process.env.NODE_ENV === 'production' ? '.env.production' : ".env.development") });
// to check env files
dotenv_1.default.config({ path: path_1.default.join(__dirname, '..', '..', '.', '.env.production') });
// ---------------------------------------
exports.default = {
    env: process.env.NODE_ENV || 'production',
    port: process.env.PORT || 8000,
    // set to production by default to connect to online database.
    databaseUrl: process.env.DATABASE_URL,
};
//# sourceMappingURL=config.js.map