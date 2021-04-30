import { getCustomRepository } from 'typeorm';

import { AppError } from './../errors/AppError';

import UserRepository from '../repositories/UserRepository';
import BCryptHashProvider from '../providers/implementations/BCryptHashProvider';

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class UserCreateService {
  async execute({ name,email,password }: UserRequest) {

    const userRepository = getCustomRepository(UserRepository);
    const hashProvider = new BCryptHashProvider();

    const findUser = await userRepository.findByEmail(email);

    if(findUser) {
      throw new AppError('User already exists');
    }

    const hashedPassword = await hashProvider.generateHash(password);
    
    const user = userRepository.create({
      name,
      email,
      password: hashedPassword
    });

    await userRepository.save(user);

    return user;
  }

}

export default UserCreateService;