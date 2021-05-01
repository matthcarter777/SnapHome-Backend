import { AppError } from './../errors/AppError';

import FakeUserRepository from '../repositories/fakes/FakeUserRepository';

import UserCreateService from './UserCreateService';
import UserUpdateService from './UserUpdateService';

describe('UserCreateService', () => {
  it('Should be able to create user', async () => {
    const fakeUserRepository = new FakeUserRepository();

    const userCreateService = new UserCreateService(
      fakeUserRepository
    );

    const userUpdateService = new UserUpdateService(
      fakeUserRepository
    );
    
    const user =  await userCreateService.execute({
      name: 'User',
      email: 'user@email.com',
      password: '123456',
    });
    user.name = 'Att'

    const updatedUser = await userUpdateService.execute(user);

    expect(updatedUser.name).toEqual('Att');
  });

  it('Should be able not to authenticate with non exist non user', async () => {
    const fakeUserRepository = new FakeUserRepository();

    const userCreateService = new UserCreateService(
      fakeUserRepository
    );

    const userUpdateService = new UserUpdateService(
      fakeUserRepository
    );
    
    await userCreateService.execute({
      name: 'User',
      email: 'user@email.com',
      password: '123456',
    });

    const updatedUser = {
      id: 'iasjiajs-jiajsia',
      name: 'User',
      email: 'user@email.com',
      password: '123456',
    };

    expect(
      userCreateService.execute(updatedUser)
    ).rejects.toBeInstanceOf(AppError);
  });

  it('Should be able not to authenticate with non exist non user', async () => {
    const fakeUserRepository = new FakeUserRepository();

    const userCreateService = new UserCreateService(
      fakeUserRepository
    );

    const userUpdateService = new UserUpdateService(
      fakeUserRepository
    );
    
    await userCreateService.execute({
      name: 'User',
      email: 'user@email.com',
      password: '123456',
    });

    const updatedUser = {
      id: 'iasjiajs-jiajsia',
      name: 'User',
      email: 'user@email.com',
      password: '123456',
    };

    expect(
      userUpdateService.execute(updatedUser)
    ).rejects.toBeInstanceOf(AppError);
  });
});
