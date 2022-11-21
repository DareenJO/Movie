"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sturuter_1 = __importDefault(require("./routs/sturuter"));
const movieroute_1 = __importDefault(require("./routs/movieroute"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/movie', movieroute_1.default);
app.use('/student', sturuter_1.default);
app.listen(5001);
