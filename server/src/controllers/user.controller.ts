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
}
