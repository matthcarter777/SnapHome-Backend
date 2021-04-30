import { EntityRepository, Repository, getRepository } from "typeorm";

import { Property } from "../models/Property";

@EntityRepository(Property)
class PropertyRepository extends Repository<Property> {
  private ormRepository: Repository<Property>;

  constructor() {
    super();
    this.ormRepository = getRepository(Property);
  }
  
  public async findById(id: string) {
    const find = await this.ormRepository.findOne({
      where: { id }
    });

    return find || undefined;
  }
  
  public async findByTitle(title: string) {
    const find = await this.ormRepository.findOne({
      where: { title }
    });

    return find || undefined;
  }

}

export default PropertyRepository; 
