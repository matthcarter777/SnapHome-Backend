import { Request, Response } from 'express';

import PropertyCreateService from '../services/PropertyCreateService';
import UserDeleteService from '../services/UserDeleteService';
import PropertyIndexService from '../services/PropertyIndexService';
import UserShowService from '../services/UserShowService';
import UserUpdateService from '../services/UserUpdateService';

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

    const userService = new UserShowService();

    const findUser = await userService.execute(id);
    
    return response.status(200).json(findUser);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name, email, password } = request.body;

    const userService = new UserUpdateService()

    const findUser = await userService.execute({
      id,
      name,
      email,
      password
    });
    
    return response.status(200).json(findUser);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const userService = new UserDeleteService();

    await userService.execute(id);
    
    return response.status(200).json({message: 'User Deleted'});
  }
}