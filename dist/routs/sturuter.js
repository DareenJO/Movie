"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validstu_1 = __importDefault(require("../middleware/validstu"));
const zodstu_1 = require("../zodschema/zodstu");
const routstu = express_1.default.Router();
let stu = [];
routstu.get("/", (req, res) => {
    return res.json(stu);
});
routstu.post("/", (0, validstu_1.default)(zodstu_1.stuschema), (req, res, next) => {
    const stunew = req.body;
    stu.push(stunew);
    return res.status(201).json({ message: "student was added !" });
});
routstu.put("/:id", (0, validstu_1.default)(zodstu_1.stuschema), (req, res) => {
    const update = req.body;
    const { id } = req.params;
    for (let i = 0; i < stu.length; i++) {
        if (stu[i].id === id) {
            stu[i] = update;
            return res.status(200).json({
                message: "student updated succsessfully ",
            });
        }
        else {
            return res.status(400).json({
                message: "student  is not found",
            });
        }
    }
});
routstu.delete("/:id", (req, res) => {
    const { id } = req.params;
    for (let i = 0; i < stu.length; i++) {
        if (stu[i].id === id) {
            stu.splice(i, 1);
            return res.status(200).json({
                message: "student has been  deleted succsessfully ",
            });
        }
        else {
            return res.status(404).json({
                message: "student is not found :)",
            });
        }
    }
});
routstu.get("/:major", (req, res) => {
    const { major } = req.params;
    let z = major.toLowerCase() || major.toLowerCase();
    stu.map((search) => {
        return search.major.toLowerCase() === z || search.major.toUpperCase() === z
            ? res.json(search)
            : "Not Found";
    });
});
routstu.put("/level", (0, validstu_1.default)(zodstu_1.stuschema), (req, res) => {
    const update2 = req.body;
    let level = req.body;
    for (let i = 0; i < stu.length; i++) {
        if (stu[i].level === level) {
            stu[i] = update2;
            return res.status(200).json({
                message: "level updated succsessfully ",
            });
        }
        else {
            return res.status(400).json({
                message: "level  is not found",
            });
        }
    }
});
exports.default = routstu;
