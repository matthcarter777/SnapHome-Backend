import { Request, Response } from 'express';

import PropertyIndexService from '../services/PropertyIndexService';
import PropertyCreateService from '../services/PropertyCreateService';
import PropertyShowService from '../services/PropertyShowService';
import UserDeleteService from '../services/UserDeleteService';
import UserUpdateService from '../services/UserUpdateService';
import PropertyUpdateService from '../services/PropertyUpdateService';

export default class PropertyController {

  async index(request: Request, response: Response) {
    const propertyService = new PropertyIndexService();

    const findPropertys = await propertyService.execute();
    
    return response.status(200).json(findPropertys);
  }

  async create(request: Request, response: Response) {
    const { title, address, city, state, price, description, user_id } = request.body;

    const propertyService = new PropertyCreateService();

    const property = await propertyService.execute({
      title, 
      address, 
      city, 
      state, 
      price, 
      description, 
      user_id
    });
    
    return response.status(200).json(property);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const propertyService = new PropertyShowService();

    const findProperty = await propertyService.execute(id);
    
    return response.status(200).json(findProperty);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { title, address, city, state, price, description, user_id } = request.body;

    const propertyService = new PropertyUpdateService();

    const property = await propertyService.execute({
      id,
      title, 
      address, 
      city, 
      state, 
      price, 
      description, 
      user_id
    });
    
    return response.status(200).json(property);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const userService = new UserDeleteService();

    await userService.execute(id);
    
    return response.status(200).json({message: 'User Deleted'});
  }
}