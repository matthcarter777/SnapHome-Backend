import { v4 as uuid } from 'uuid'

import PropertyDTO  from '../../dtos/IPropertyDTO';
import { Property } from '../../models/Property';
import IPropertyRepository from '../IPropertyRepository';

class FakePropertyRepository implements IPropertyRepository {
  private property: Property[] = [];
  
  public async findAll(): Promise<Property[]> {
    return this.property;
  }

  public async findById(id: string): Promise<Property | null> {
    const findProperty = this.property.find(property => property.id === id);

    return findProperty;
  }
  
  public async findByTitle(title: string) {
    const findProperty = this.property.find(property => property.title === title);

    return findProperty;
  }

  public async create({ title, address, description, state, city, price, user_id }: PropertyDTO) {
    const property = new Property();
    
    property.id = uuid();
    property.title = title;
    property.description = description;
    property.address = address;
    property.state = state;
    property.city = city;
    property.price = price;
    property.user_id = user_id;

    this.property.push(property);

    return property;
  }

}

export default FakePropertyRepository; 
