"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userRoutes_1 = require("./routes/userRoutes");
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
class App {
    constructor() {
        this.userRoutes = new userRoutes_1.UserRoutes();
        this.app = express_1.default();
        this.initialize();
        this.userRoutes.routes(this.app);
        this.mongoSetup();
    }
    initialize() {
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        require('dotenv').config();
    }
    mongoSetup() {
        let mongoURL = process.env.DB_URL || 'localhost:27017/sampledb';
        mongoose_1.default.Promise = global.Promise;
        mongoose_1.default.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
    }
}
exports.default = new App().app;
