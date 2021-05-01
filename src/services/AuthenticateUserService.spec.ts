import { AppError } from './../errors/AppError';

import FakeUserRepository from '../repositories/fakes/FakeUserRepository';
import AuthenticateUserService from './AuthenticateUserService';

import UserCreateService from './UserCreateService';

describe('AuthenticateUserService', () => {
  it('Should be able to authenticate', async () => {
    const fakeUserRepository = new FakeUserRepository();

    const authenticateUserService = new AuthenticateUserService(
      fakeUserRepository
    );

    const userCreateService = new UserCreateService(
      fakeUserRepository
    );
    
    await userCreateService.execute({
      name: 'User',
      email: 'user@email.com',
      password: '123456',
    });

    const response = await authenticateUserService.execute({
      email: 'user@email.com',
      password: '123456'
    })

    expect(response).toHaveProperty('token');
  });

  it('Should be able not to authenticate with non exist non user', async () => {
    const fakeUserRepository = new FakeUserRepository();

    const authenticateUserService = new AuthenticateUserService(
      fakeUserRepository
    );

    expect(
      authenticateUserService.execute({
        email: 'user@email',
        password: '12345'
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('Should be able not to authenticate with wrong password', async () => {
    const fakeUserRepository = new FakeUserRepository();

    const authenticateUserService = new AuthenticateUserService(
      fakeUserRepository
    );

    const userCreateService = new UserCreateService(
      fakeUserRepository
    );
    
    await userCreateService.execute({
      name: 'User',
      email: 'user@email.com',
      password: '123456',
    });

    expect.assertions(1);

    try {
      await authenticateUserService.execute({
        email: 'user@email.com',
        password: '12345',
      })
    } catch (err) {
      expect(err).toBeInstanceOf(AppError);
    }
  });
});
