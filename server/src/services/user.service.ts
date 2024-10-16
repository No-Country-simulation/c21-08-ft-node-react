import { User } from "../entities/User.entity";
import { UserException } from "../exceptions/UserException";
import { userRepository } from "../repositories/user.repository";

export class UserService {
  async getAllUsers(): Promise<User[]> {
    try {
      return await userRepository.find();
    } catch (error) {
      throw new UserException("Error getting all users", 500);
    }
  }
}
