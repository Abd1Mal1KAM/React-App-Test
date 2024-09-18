import UserRepository from '../repositories/UserRepository.js';

export default class UserService {
  static async getAllUsers() {
    return await UserRepository.findAll();
  }
}