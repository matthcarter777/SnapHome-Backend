import { EntityRepository, Repository, getRepository } from "typeorm";
import IUserDTO from '../dtos/IUserDTO';

import { User } from "../models/User";
import IUserRepository from './IUserRepository';

@EntityRepository(User)
class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findAll(): Promise<User[]> {
    const findAll = await this.ormRepository.find();

    return findAll;
  }
  
  public async findById(id: string): Promise<User | undefined> {
    const find = await this.ormRepository.findOne({
      where: { id }
    });

    return find || undefined;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const find = await this.ormRepository.findOne({
      where: { email }
    });

    return find || undefined;
  }

  public async create(data: IUserDTO): Promise<User> {
    const user = this.ormRepository.create(
      data
    );

    await this.ormRepository.save(user)

    return user || undefined;
  }

  public async save(data: IUserDTO): Promise<User> {
    const user = await this.ormRepository.save(data)

    return user;
  }

  public async delete(id: string) {
    const find = await this.ormRepository.findOne({
      where: { id }
    });

    await this.ormRepository.remove(find);
  }
}

export default UserRepository; 
