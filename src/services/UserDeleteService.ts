import { getCustomRepository } from 'typeorm';

import { AppError } from './../errors/AppError';
import UserRepository from '../repositories/UserRepository';

class UserDeleteService {
  async execute(id: string) {
    console.log(id);

    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findById(id);

    console.log(user);

    if(!user) {
      throw new AppError('User not already exist!');
    };

    await userRepository.remove(user);

    return user;
  }

}

export default UserDeleteService;