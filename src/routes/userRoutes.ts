import { Request, Response } from "express";
import { UserController } from "../controllers/userController";

export class UserRoutes {
     public userController: UserController = new UserController();

    constructor() {

    }

    public routes(app: any): void {

        app.route('/user')
            .get(this.userController.getAllUsers)
            .post(this.userController.addNewUser);

        app.route('/user/:userId')
            .get(this.userController.getUserWithId)
            .put(this.userController.updateUser)
            .delete(this.userController.deleteUser);
    }

}