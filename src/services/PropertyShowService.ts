import { getCustomRepository } from 'typeorm';

import PropertyRepository from '../repositories/PropertyRepository';
import { AppError } from './../errors/AppError';

class PropertyShowService {
  async execute(id: string) {

    const propertyRepository = getCustomRepository(PropertyRepository);

    const property = await propertyRepository.findById(id);

    if(!property) {
      throw new AppError('Property not already exist!');
    };

    return property;
  }

}

export default PropertyShowService;
