import { AppError } from './../errors/AppError';

import IPropertyRepository from '../repositories/IPropertyRepository';

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
  constructor( private repository: IPropertyRepository) {}

  async execute({ id, title, address, city, state, description, price, user_id }: PropertyRequest) {
    const property = await this.repository.findById(id);

    if(!property) {
      throw new AppError('Property not already exist!');
    };

    property.title = title;
    property.address = address;
    property.city = city;
    property.state = state;
    property.description = description;
    property.price = price;

    await this.repository.save(property);
    
    return property;
  }

}

export default PropertyUpdateService;