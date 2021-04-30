import { getCustomRepository } from 'typeorm';

import { AppError } from '../errors/AppError';
import BCryptHashProvider from '../providers/implementations/BCryptHashProvider';
import UserRepository from '../repositories/UserRepository';

interface UserRequest {
  id: string;
  name?: string;
  email?: string;
  password?: string;
}

class UserUpdateService {
  async execute({ id, name, email, password }: UserRequest) {

    const userRepository = getCustomRepository(UserRepository);
    const hashProvider = new BCryptHashProvider();

    const user = await userRepository.findById(id);

    if(!user) {
      throw new AppError('User not already exist!');
    }

    const hashedPassword = await hashProvider.generateHash(password);
    
    user.name = name;
    user.email = email;
    user.password = hashedPassword;
    
    await userRepository.save(user);

    return user;
  }

}

export default UserUpdateService;