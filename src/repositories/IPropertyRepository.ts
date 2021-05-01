import IPropertyDTO from "../dtos/IPropertyDTO";
import { Property } from "../models/Property";

export default interface IPropertyRepository {
  findAll(): Promise<Property[]>;
  findById(id: string): Promise<Property| undefined>;
  findByTitle(title: string): Promise<Property| undefined>;
  create(property: IPropertyDTO): Promise<Property>;
  delete(id: string);
}