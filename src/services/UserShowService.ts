import { getCustomRepository } from 'typeorm';

import UserRepository from '../repositories/UserRepository';
import { AppError } from './../errors/AppError';

class UserShowService {
  async execute(id: string) {

    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findById(id);

    if(!user) {
      throw new AppError('User not already exist!');
    };

    return user;
  }

}

export default UserShowService;
