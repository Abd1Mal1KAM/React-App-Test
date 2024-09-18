import express from 'express';
import UserService from '../services/UserService.js';

const { Request, Response } = express;
export default class UserController {
  static async getUsers(req, res) {
    const users = await UserService.getAllUsers();
    res.json(users);
  }
}