import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { User } from "../entities/User.entity";

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
      return res
        .status(500)
        .json({ message: "Error getting all users", error });
    }
  }
}
