import { getCustomRepository } from 'typeorm';

import { AppError } from './../errors/AppError';

import UserRepository from '../repositories/UserRepository';

class UserIndexService {
  async execute() {

    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.find();

    if(!user) {
      throw new AppError('No records found', 404);
    }

    return user;
  }

}

export default UserIndexService;
