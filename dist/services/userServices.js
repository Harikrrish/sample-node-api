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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userModel_1 = require("../models/userModel");
const User = mongoose_1.default.model('users', userModel_1.UsersSchema);
class UserService {
    constructor() {
    }
    addUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let userData = new User(data);
                return yield User.create(userData);
            }
            catch (err) {
                return err.message;
            }
        });
    }
    getUsers(userId = '') {
        return __awaiter(this, void 0, void 0, function* () {
            let findObject = userId ? { _id: { $eq: userId } } : {};
            try {
                return yield User.find(findObject).exec();
            }
            catch (err) {
                return err.message;
            }
        });
    }
    updateUser(userId, updateData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield User.findOneAndUpdate({ _id: userId }, updateData, { new: true });
            }
            catch (err) {
                return err.message;
            }
        });
    }
    deleteUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield User.findByIdAndDelete({ _id: userId });
            }
            catch (err) {
                return err.message;
            }
        });
    }
}
module.exports = UserService;
