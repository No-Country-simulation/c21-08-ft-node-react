import { User } from "../entities/User.entity";
import { userRepository } from "../repositories/userRepository";

export class UserService {
  async getAllUsers(): Promise<User[]> {
    return await userRepository.find();
  }
}
