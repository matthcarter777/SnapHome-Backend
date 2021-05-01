import { AppError } from './../errors/AppError';

import IPropertyRepository from '../repositories/IPropertyRepository';
import IPropertyDTO from '../dtos/IPropertyDTO';

interface PropertyRequest {
  title: string;
  address: string;
  city: string;
  state: string;
  price: number;
  description: string;
  user_id: string;
}

class PropertyCreateService { 

  constructor( private repository: IPropertyRepository) {}

  async execute({ title, address, city, state, description, price, user_id }: PropertyRequest) {

    const findProperty = await this.repository.findByTitle(title);

    if(findProperty) {
      throw new AppError('User already exists');
    }
    
    const property = {
      title, 
      address, 
      city, 
      state, 
      description, 
      price, 
      user_id
    } as IPropertyDTO ;

    return this.repository.create(property);
  }

}

export default PropertyCreateService;