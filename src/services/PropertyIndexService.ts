import { AppError } from './../errors/AppError';

import IPropertyRepository from '../repositories/IPropertyRepository';

class PropertyIndexService {
  constructor( private repository: IPropertyRepository) {}
  
  async execute() {
    const propertys = await this.repository.findAll();

    return propertys;
  }

}

export default PropertyIndexService;
