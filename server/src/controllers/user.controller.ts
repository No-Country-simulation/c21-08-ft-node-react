import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { User } from "../entities/User.entity";
import { UserException } from "../exceptions/UserException";

export class UserController {
  private readonly userService: UserService;
  constructor() {
    this.userService = new UserService();
  }

  async getAllUsers(req: Request, res: Response): Promise<any> {
    try {
      const users: User[] = await this.userService.getAllUsers();

      return res.status(200).json(users);
    } catch (error) {
      if (error instanceof UserException) {
        throw error;
      }

      throw new UserException("Error getting all users", 500);
    }
  }

  async getUserById(req: Request, res: Response): Promise<any> {
    try {
      const userId: string = req.params.userId;
      const user: User | undefined = await this.userService.getUserById(userId);

      return res.status(200).json(user);
    } catch (error) {
      if (error instanceof UserException) {
        return res.status(error.statusCode).json({ message: error.message });
      }
      return res.status(500).json({ message: "Error getting a user by Id" });
    }
  }
}
