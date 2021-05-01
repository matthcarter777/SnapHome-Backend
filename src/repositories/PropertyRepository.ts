import { EntityRepository, Repository, getRepository } from "typeorm";
import IPropertyDTO from "../dtos/IPropertyDTO";

import { Property } from "../models/Property";
import IPropertyRepository from "./IPropertyRepository";

@EntityRepository(Property)
class PropertyRepository implements IPropertyRepository {
  private ormRepository: Repository<Property>;

  constructor() {
    this.ormRepository = getRepository(Property);
  }

  public async findAll(): Promise<Property[]> {
    const findAll = await this.ormRepository.find();

    return findAll;
  }
  
  public async findById(id: string): Promise<Property | undefined> {
    const find = await this.ormRepository.findOne({
      where: { id }
    });

    return find || undefined;
  }
  
  public async findByTitle(title: string): Promise<Property | undefined>  {
    const find = await this.ormRepository.findOne({
      where: { title }
    });

    return find || undefined;
  }

  public async create(data: IPropertyDTO): Promise<Property>  {
    const property = this.ormRepository.create(data);

    await this.ormRepository.save(property)

    return property;
  }

  public async delete(id: string) {
    const find = await this.ormRepository.findOne({
      where: { id }
    });

    await this.ormRepository.remove(find);
  }


}

export default PropertyRepository; 
