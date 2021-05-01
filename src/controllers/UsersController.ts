import { Request, Response } from 'express';

import IUserRepository from '../repositories/IUserRepository';
import UserRepository from '../repositories/UserRepository';

import UserCreateService from '../services/UserCreateService';
import UserDeleteService from '../services/UserDeleteService';
import UserIndexService from '../services/UserIndexService';
import UserShowService from '../services/UserShowService';
import UserUpdateService from '../services/UserUpdateService';

export default class UserController {

  private static repository: IUserRepository;

  private static getRepository(): IUserRepository {
    if (!this.repository) {
      this.repository = new UserRepository();
    }

    return this.repository;
  }

  async index(request: Request, response: Response) {
    const userService = new UserIndexService(
      UserController.getRepository()
    );

    const findUsers = await userService.execute();
    
    return response.status(200).json(findUsers);
  }

  async create(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const userService = new UserCreateService(
      UserController.getRepository()
    );

    const findUsers = await userService.execute({
      name,
      email,
      password
    });
    
    return response.status(200).json(findUsers);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const userService = new UserShowService(
      UserController.getRepository()
    );

    const findUser = await userService.execute(id);
    
    return response.status(200).json(findUser);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name, email, password } = request.body;

    const userService = new UserUpdateService(
      UserController.getRepository()
    )

    const findUser = await userService.execute({
      id,
      name,
      email,
      password
    });
    
    return response.status(200).json(findUser);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const userService = new UserDeleteService(
      UserController.getRepository()
    );

    await userService.execute(id);
    
    return response.status(200).json({message: 'User Deleted'});
  }
}