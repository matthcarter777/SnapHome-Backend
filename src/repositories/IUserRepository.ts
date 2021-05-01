import IUserDTO from "../dtos/IUserDTO";
import { User } from "../models/User";

export default interface IPropertyRepository {
  findAll(): Promise<User[]>;
  findById(id: string): Promise<User| undefined>;
  findByEmail(title: string): Promise<User| undefined>;
  create(property: IUserDTO): Promise<User>;
  save(property: IUserDTO): Promise<User>;
  delete(id: string): void;
}