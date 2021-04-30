import { getCustomRepository } from 'typeorm';

import PropertyRepository from '../repositories/PropertyRepository';
import { AppError } from './../errors/AppError';

class PropertyDeleteService {
  async execute(id: string) {

    const propertyRepository = getCustomRepository(PropertyRepository);

    const property = await propertyRepository.findById(id);

    if(!property) {
      throw new AppError('Property not already exist!');
    };

    await propertyRepository.remove(property);

    return property;
  }

}

export default PropertyDeleteService;
