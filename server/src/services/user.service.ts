import { User } from "../entities/User.entity";
import { userRepository } from "../repositories/userRepository";

export class UserService {
  async getAllUsers() {
    try {
      return await userRepository.find();
    } catch (error) {
      console.error("Error fetching users:", error);
      throw new Error("Failed to fetch users");
    }
  }
}
