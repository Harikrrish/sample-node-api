import mongoose from 'mongoose';
import { UsersSchema } from '../models/userModel';

const User = mongoose.model('users', UsersSchema);

class UserService {

    constructor() {
    }

    async addUser(data: any) {
        try {
            let userData = new User(data);
            return await User.create(userData);
        } catch (err) {
            return err.message;
        }
    }

    async getUsers(userId: string = '') {
        let findObject = userId ? { _id: { $eq: userId } } : {};
        try {
            return await User.find(findObject).exec();
        } catch (err) {
            return err.message;
        }
    }

    async updateUser(userId: string, updateData: any) {
        try {
            return await User.findOneAndUpdate({ _id: userId }, updateData, { new: true });
        } catch (err) {
            return err.message;
        }
    }

    async deleteUser(userId: string) {
        try {
            return await User.findByIdAndDelete({ _id: userId });
        } catch (err) {
            return err.message;
        }
    }
}

module.exports = UserService;