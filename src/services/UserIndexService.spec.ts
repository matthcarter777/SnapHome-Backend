import FakeUserRepository from '../repositories/fakes/FakeUserRepository';

import UserCreateService from './UserCreateService';
import UserIndexService from './UserIndexService';

describe('UserIndexService', () => {
  it('Should be able to return a all user', async () => {
    const fakeUserRepository = new FakeUserRepository();

    const userCreateService = new UserCreateService(
      fakeUserRepository
    );

    const userIndexService = new UserIndexService(
      fakeUserRepository
    );
    
    await userCreateService.execute({
      name: 'User',
      email: 'user@email.com',
      password: '123456',
    });

    const response = await userIndexService.execute();

    expect(response.length).toEqual(1);
  });
});
