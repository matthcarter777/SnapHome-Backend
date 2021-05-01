import { AppError } from './../errors/AppError';

import IUserRepository from '../repositories/IUserRepository';

class UserDeleteService {
  constructor( private repository: IUserRepository) {}

  async execute(id: string) {
    const user = await this.repository.findById(id);

    if(!user) {
      throw new AppError('User not already exist!');
    };

    await this.repository.delete(user.id);

    return;
  }

}

export default UserDeleteService;