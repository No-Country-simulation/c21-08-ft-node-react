import { Request, Response } from "express";
import { UserService } from "../service/user.service";
import { User } from "../entities/User.entity";

const userService = new UserService();

export class UserController {
  async getAllUsers(req: Request, res: Response): Promise<any> {
    try {
      const users: User[] = await userService.getAllUsers();
      return res.json(users);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error getting all users", error });
    }
  }
}
