import { Request, Response } from 'express';

import  AuthenticateUserService from '../services/AuthenticateUserService';

import IUserRepository from '../repositories/IUserRepository';
import UserRepository from '../repositories/UserRepository';

export default class SessionsController {

  private static repository: IUserRepository;

  private static getRepository(): IUserRepository {
    if (!this.repository) {
      this.repository = new UserRepository();
    }

    return this.repository;
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserService(
      SessionsController.getRepository()
    );

    const { user, token } = await authenticateUser.execute({
      email,
      password,
    })

    delete user.password;

    return response.json({ user, token });
  }

}