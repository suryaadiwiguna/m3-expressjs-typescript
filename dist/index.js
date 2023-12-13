"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const expenseRouter_1 = __importDefault(require("./router/expenseRouter"));
const PORT = 3002;
const app = (0, express_1.default)();
app.use('/expenses', expenseRouter_1.default);
app.get('/', (req, res) => {
    res.send("Hi, there!");
});
app.listen(PORT, () => {
    console.log('server started on port ' + PORT);
});
