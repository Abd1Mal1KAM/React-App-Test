import { User } from '../models/User.js';

export default class UserRepository {
  static async findAll() {
    return await User.findAll();
  }
}