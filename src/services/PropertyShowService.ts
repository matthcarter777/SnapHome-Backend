import { AppError } from './../errors/AppError';

import IPropertyRepository from '../repositories/IPropertyRepository';

class PropertyShowService {
  constructor( private repository: IPropertyRepository) {}

  async execute(id: string) { 
    const property = await this.repository.findById(id);

    if(!property) {
      throw new AppError('Property not already exist!');
    };

    return property;
  }

}

export default PropertyShowService;
