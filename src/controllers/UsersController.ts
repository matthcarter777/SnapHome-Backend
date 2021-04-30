import { Request, Response } from 'express';
import UserCreateService from '../services/UserCreateService';

import UserIndexService from '../services/UserIndexService';

export default class UserController {

  async index(request: Request, response: Response) {
    const userService = new UserIndexService();

    const findUsers = await userService.execute();
    
    return response.status(200).json(findUsers);
  }

  async create(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const userService = new UserCreateService();

    const findUsers = await userService.execute({
      name,
      email,
      password
    });
    
    return response.status(200).json(findUsers);
  }
}