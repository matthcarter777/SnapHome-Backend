import { getCustomRepository } from 'typeorm';

import PropertyRepository from '../repositories/PropertyRepository';
import { AppError } from './../errors/AppError';

interface PropertyRequest {
  id: string;
  title: string;
  address: string;
  city: string;
  state: string;
  price: number;
  description: string;
  user_id: string;
}

class PropertyUpdateService {
  async execute({ id, title, address, city, state, description, price, user_id }: PropertyRequest) {

    const propertyRepository = getCustomRepository(PropertyRepository);

    const property = await propertyRepository.findById(id);

    if(!property) {
      throw new AppError('Property not already exist!');
    };

    property.title = title;
    property.address = address;
    property.city = city;
    property.state = state;
    property.description = description;
    property.price = price;

    await propertyRepository.save(property);
    
    return property;
  }

}

export default PropertyUpdateService;