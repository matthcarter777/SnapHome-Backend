import { getCustomRepository } from 'typeorm';

import { AppError } from '../errors/AppError';
import BCryptHashProvider from '../providers/implementations/BCryptHashProvider';
import UserRepository from '../repositories/UserRepository';

import IUserRepository from '../repositories/IUserRepository';
import IUserDTO from '../dtos/IUserDTO';

interface UserRequest {
  id: string;
  name?: string;
  email?: string;
  password?: string;
}

class UserUpdateService {
  constructor( private repository: IUserRepository) {}

  async execute({ id, name, email, password }: UserRequest) {
    const hashProvider = new BCryptHashProvider();

    const user = await this.repository.findById(id);

    if(!user) {
      throw new AppError('User not already exist!');
    }

    const hashedPassword = await hashProvider.generateHash(password);
    
    user.name = name;
    user.email = email;
    user.password = hashedPassword;
    
    await this.repository.save(user);

    return user;
  }

}

export default UserUpdateService;