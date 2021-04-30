import { getCustomRepository } from 'typeorm';

import { AppError } from './../errors/AppError';

import PropertyRepository from '../repositories/PropertyRepository';

class PropertyIndexService {
  async execute() {

    const propertyRepository = getCustomRepository(PropertyRepository);

    const property = await propertyRepository.find();

    if(!property) {
      throw new AppError('No records found', 404);
    }

    return property;
  }

}

export default PropertyIndexService;
