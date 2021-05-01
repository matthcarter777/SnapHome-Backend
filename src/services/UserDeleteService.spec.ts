import { AppError } from './../errors/AppError';

import FakeUserRepository from '../repositories/fakes/FakeUserRepository';

import UserCreateService from './UserCreateService';
import UserDeleteService from './UserDeleteService';

describe('UserDeleteService', () => {
  it('Should be able to delete user', async () => {
    const fakeUserRepository = new FakeUserRepository();

    const userCreateService = new UserCreateService(
      fakeUserRepository
    );

    const userDeleteService = new UserDeleteService(
      fakeUserRepository
    );
    
    const user =  await userCreateService.execute({
      name: 'User',
      email: 'user@email.com',
      password: '123456',
    });

    const response = await userDeleteService.execute(user.id);

    expect(response).toBe(undefined);
  });

  it('Should be able not to delete', async () => {
    const fakeUserRepository = new FakeUserRepository();

    const userDeleteService = new UserDeleteService(
      fakeUserRepository
    );

    const id = 'asiuhasa-asasasas-asasas'; 

    expect(
      userDeleteService.execute(id)
    ).rejects.toBeInstanceOf(AppError);
  });
});
