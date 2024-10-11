import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { User } from "../entities/User.entity";

export class UserController {
  constructor(private readonly userService: UserService) {}

  async getAllUsers(req: Request, res: Response): Promise<any> {
    try {
      const users: User[] = await this.userService.getAllUsers();
      return res.json(users);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error getting all users", error });
    }
  }
}
