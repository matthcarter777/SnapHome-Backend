import { getCustomRepository } from 'typeorm';

import { AppError } from './../errors/AppError';

import PropertyRepository from '../repositories/PropertyRepository';

interface PropertyRequest {
  title: string;
  address: string;
  city: string;
  state: string;
  price: number;
  description: string;
  user_id: string;
}

class UserCreateService {
  async execute({ title, address, city, state, description, price, user_id }: PropertyRequest) {

    const propertyRepository = getCustomRepository(PropertyRepository);

    const findProperty = await propertyRepository.findByTitle(title);

    if(findProperty) {
      throw new AppError('User already exists');
    }
    
    const property = propertyRepository.create({
      title, 
      address, 
      city, 
      state, 
      description, 
      price, 
      user_id
    });

    await propertyRepository.save(property);

    return property;
  }

}

export default UserCreateService;