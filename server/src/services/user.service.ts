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

  async getUserById(userId: string): Promise<User | null | undefined> {
    try {
      const user: User | null = await userRepository.findOne({
        where: { userId },
      });

      return user;
    } catch (error) {
      throw new Error("Error getting user by id");
    }
  }
}
