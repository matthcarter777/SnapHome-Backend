import { AppError } from './../errors/AppError';

import IPropertyRepository from '../repositories/IPropertyRepository';

class PropertyDeleteService {
  constructor( private repository: IPropertyRepository) {}

  async execute(id: string) {
    const property = await this.repository.findById(id);

    if(!property) {
      throw new AppError('Property not already exist!');
    };

    await this.repository.delete(property.id);

    return property;
  }

}

export default PropertyDeleteService;
