"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const pg_promise_1 = __importDefault(require("pg-promise"));
const dotenv = require("dotenv").config();
const loginRouter = require('./routes/login');
const app = (0, express_1.default)();
const pgp = (0, pg_promise_1.default)({});
const port = 3001;
app.listen(process.env.PORT || port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
const corsOptions = {
    origin: ['http://localhost:3000']
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use('/login', loginRouter);
module.exports = app;
