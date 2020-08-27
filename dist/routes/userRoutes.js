"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const userController_1 = require("../controllers/userController");
class UserRoutes {
    constructor() {
        this.userController = new userController_1.UserController();
    }
    routes(app) {
        app.route('/user')
            .get(this.userController.getAllUsers)
            .post(this.userController.addNewUser);
        app.route('/user/:userId')
            .get(this.userController.getUserWithId)
            .put(this.userController.updateUser)
            .delete(this.userController.deleteUser);
    }
}
exports.UserRoutes = UserRoutes;
