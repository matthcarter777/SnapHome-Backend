import { getRepository } from 'typeorm';
import { Request, Response } from 'express';

import PropertyIndexService from '../services/PropertyIndexService';
import PropertyCreateService from '../services/PropertyCreateService';
import PropertyShowService from '../services/PropertyShowService';
import PropertyUpdateService from '../services/PropertyUpdateService';
import PropertyDeleteService from '../services/PropertyDeleteService';
import IPropertyRepository from '../repositories/IPropertyRepository';
import PropertyRepository from '../repositories/PropertyRepository';


export default class PropertyController {

  private static repository: IPropertyRepository;

  private static getRepository(): IPropertyRepository {
    if (!this.repository) {
      this.repository = new PropertyRepository();
    }

    return this.repository;
  }

  async index(request: Request, response: Response) {

    const propertyService = new PropertyIndexService(
      PropertyController.getRepository()
    );

    const findPropertys = await propertyService.execute();
    
    return response.status(200).json(findPropertys);
  }

  async create(request: Request, response: Response) {
    const { title, address, city, state, price, description, user_id } = request.body;

    const propertyService = new PropertyCreateService(
      PropertyController.getRepository()
    );

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

    const propertyService = new PropertyDeleteService();

    await propertyService.execute(id);
    
    return response.status(200).json({message: 'Property Deleted'});
  }
}