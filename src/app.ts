
import { UserRoutes } from './routes/userRoutes';
import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";

class App {
    public app: express.Application;
    public userRoutes: UserRoutes = new UserRoutes();

    constructor() {
        this.app = express();
        this.initialize();
        this.userRoutes.routes(this.app);
        this.mongoSetup();
    }

    initialize() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        require('dotenv').config();
    }

    private mongoSetup(): void {
        let mongoURL: string = process.env.DB_URL || 'localhost:27017/sampledb';
        mongoose.Promise = global.Promise;
        mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
    }

}

export default new App().app;
