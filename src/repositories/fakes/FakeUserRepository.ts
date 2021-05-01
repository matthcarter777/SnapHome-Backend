import { v4 as uuid } from 'uuid'

import IUserDTO from '../../dtos/IUserDTO';
import { User } from '../../models/User';
import IUserRepository from '../IUserRepository';

class FakeUserRepository implements IUserRepository {
  private users: User[] = [];
  
  public async findAll(): Promise<User[]> {
    return this.users;
  }

  public async findById(id: string): Promise<User | null> {
    const findUser = this.users.find(property => property.id === id);

    return findUser;
  }
  
  public async findByEmail(email: string) {
    const findUser = this.users.find(property => property.email === email);

    return findUser;
  }

  public async create({ name, email, password }: IUserDTO) {
    const user = new User();
    
    user.id = uuid();
    user.name = name;
    user.email = email;
    user.password = password;

    this.users.push(user);

    return user;
  }
  
  public async save(property: IUserDTO): Promise<User> {
    this.users.push(property as User);

    return property as User;
  }

  delete(id: string): void {
    this.users.filter(property => property.id !== id);
    return;
  }

}

export default FakeUserRepository; 
