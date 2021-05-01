import { AppError } from './../errors/AppError';
import FakeUserRepository from '../repositories/fakes/FakeUserRepository';

import UserCreateService from './UserCreateService';
import UserShowService from './UserShowService';

describe('UserShowService', () => {
  it('Should be able to show user', async () => {
    const fakeUserRepository = new FakeUserRepository();

    const userCreateService = new UserCreateService(
      fakeUserRepository
    );

    const userShowService = new UserShowService(
      fakeUserRepository
    );
    
    const user = await userCreateService.execute({
      name: 'User',
      email: 'user@email.com',
      password: '123456',
    });

    const response = await userShowService.execute(user.id);

    expect(response).toHaveProperty('id');
  });

  it('Should be able to show user', async () => {
    const fakeUserRepository = new FakeUserRepository();

    const userShowService = new UserShowService(
      fakeUserRepository
    );
    
    const id = 'asijas-iasjas';

    expect(
      userShowService.execute(id)
    ).rejects.toBeInstanceOf(AppError);
  });
});