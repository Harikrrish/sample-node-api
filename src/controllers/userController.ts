import { Request, Response } from 'express';
const userService = require('../services/userServices');
const _userService = new userService();

export class UserController {

    constructor() {
    }

    async addNewUser(req: Request, res: Response) {
        try {
            let users = await _userService.addUser(req.body);
            res.json(users);
        } catch (err) {
            res.send(err);
        }
    }

    async getAllUsers(req: Request, res: Response) {
        try {
            let users = await _userService.getUsers();
            res.json(users);
        } catch (err) {
            res.send(err);
        }
    }

    async getUserWithId(req: Request, res: Response) {
        try {
            let users = await _userService.getUsers(req.params.userId);
            res.json(users);
        } catch (err) {
            res.send(err);
        }
    }

    async updateUser(req: Request, res: Response) {
        try {
            let users = await _userService.updateUser(req.params.userId, req.body);
            res.json(users);
        } catch (err) {
            res.send(err);
        }
    }

    async deleteUser(req: Request, res: Response) {
        try {
            let update = await _userService.deleteUser(req.params.userId.toString());
            res.json(update);
        } catch (err) {
            res.send(err);
        }
    }

}