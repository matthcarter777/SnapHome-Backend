import { AppError } from './../errors/AppError';

import IUserRepository from '../repositories/IUserRepository';

class UserIndexService {
  constructor( private repository: IUserRepository) {}
  
  async execute() {
    const user = await this.repository.findAll();

    return user;
  }

}

export default UserIndexService;
