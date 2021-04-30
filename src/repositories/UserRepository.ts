import { EntityRepository, Repository, getRepository } from "typeorm";

import { User } from "../models/User";

@EntityRepository(User)
class UserRepository extends Repository<User> {
  private ormRepository: Repository<User>;

  constructor() {
    super();
    this.ormRepository = getRepository(User);
  }
  
  public async findById(id: string) {
    const find = await this.ormRepository.findOne({
      where: { id }
    });

    return find || undefined;
  }

  public async findByEmail(email: string) {
    const find = await this.ormRepository.findOne({
      where: { email }
    });

    return find || undefined;
  }
}

export default UserRepository; 
