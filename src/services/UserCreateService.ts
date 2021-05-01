import { AppError } from './../errors/AppError';

import BCryptHashProvider from '../providers/implementations/BCryptHashProvider';

import IUserRepository from '../repositories/IUserRepository';
import IUserDTO from '../dtos/IUserDTO';

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class UserCreateService {
  constructor( private repository: IUserRepository) {}

  async execute({ name,email,password }: UserRequest) {
    const hashProvider = new BCryptHashProvider();

    const findUser = await this.repository.findByEmail(email);

    if(findUser) {
      throw new AppError('User already exists');
    }

    const hashedPassword = await hashProvider.generateHash(password);
    
    const user = {
      name,
      email,
      password: hashedPassword
    } as IUserDTO;

    return this.repository.create(user);
  }

}

export default UserCreateService;
