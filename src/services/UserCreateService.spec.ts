import { AppError } from './../errors/AppError';

import FakeUserRepository from '../repositories/fakes/FakeUserRepository';

import UserCreateService from './UserCreateService';

describe('UserCreateService', () => {
  it('Should be able to create user', async () => {
    const fakeUserRepository = new FakeUserRepository();

    const userCreateService = new UserCreateService(
      fakeUserRepository
    );
    
    const user =  await userCreateService.execute({
      name: 'User',
      email: 'user@email.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });
});
