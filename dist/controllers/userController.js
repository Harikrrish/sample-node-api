"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const userService = require('../services/userServices');
const _userService = new userService();
class UserController {
    constructor() {
    }
    addNewUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let users = yield _userService.addUser(req.body);
                res.json(users);
            }
            catch (err) {
                res.send(err);
            }
        });
    }
    getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let users = yield _userService.getUsers();
                res.json(users);
            }
            catch (err) {
                res.send(err);
            }
        });
    }
    getUserWithId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let users = yield _userService.getUsers(req.params.userId);
                res.json(users);
            }
            catch (err) {
                res.send(err);
            }
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let users = yield _userService.updateUser(req.params.userId, req.body);
                res.json(users);
            }
            catch (err) {
                res.send(err);
            }
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let update = yield _userService.deleteUser(req.params.userId.toString());
                res.json(update);
            }
            catch (err) {
                res.send(err);
            }
        });
    }
}
exports.UserController = UserController;
