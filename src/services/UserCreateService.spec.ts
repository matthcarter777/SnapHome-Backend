import { AppError } from './../errors/AppError';

import FakeUserRepository from '../repositories/fakes/FakeUserRepository';

import UserCreateService from './UserCreateService';

describe('AuthenticateUserService', () => {
  it('Should be able to create user', async () => {
    const fakeUserRepository = new FakeUserRepository();

    const userCreateService = new UserCreateService(
      fakeUserRepository
    );
    
    const response =  await userCreateService.execute({
      name: 'User',
      email: 'user@email.com',
      password: '123456',
    });

    expect(response).toHaveProperty('email');
  });

/*   it('Should be able not to authenticate with non exist non user', async () => {
    const fakeUserRepository = new FakeUserRepository();

    const userCreateService = new UserCreateService(
      fakeUserRepository
    );
    
    await userCreateService.execute({
      name: 'User',
      email: 'user@email.com',
      password: '123456',
    });


    expect(
      userCreateService.execute({
        name: 'User',
        email: 'user@email',
        password: '12345'
      })
    ).rejects.toBeInstanceOf(AppError);
  }); */
});
