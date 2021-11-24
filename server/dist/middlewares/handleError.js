"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const errorHandler = (err, req, res) => {
    let { statusCode, message } = err;
    if (!err.isOperational) {
        statusCode = http_status_1.default.INTERNAL_SERVER_ERROR;
        message = http_status_1.default[http_status_1.default.INTERNAL_SERVER_ERROR];
    }
    const response = {
        code: statusCode,
        message
    };
    res.status(statusCode).send(response);
};
exports.default = errorHandler;
//# sourceMappingURL=handleError.js.map