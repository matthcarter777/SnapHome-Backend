import { AppError } from './../errors/AppError';
import FakePropertyRepository from '../repositories/fakes/FakePropertyRepository';
import PropertyCreateService from './PropertyCreateService';

describe('PropertyCreateService', () => {
  it('Should be able to create a new property', async () => {
    const fakePropertyRepository = new FakePropertyRepository();

    const propertyCreateService = new PropertyCreateService(
      fakePropertyRepository
    );
    
    const property = await propertyCreateService.execute({
      title: 'Title Test',
      description: 'Isert Test',
      address: 'road 01',
      city: 'NY',
      state: 'NY',
      price: 99,
      user_id: 'usahsuahsuahs'
    });

    expect(property).toHaveProperty('id');
  });

  it('Should not be able to create two property on the same name', async () => {
    const fakePropertyRepository = new FakePropertyRepository();

    const propertyCreateService = new PropertyCreateService(
      fakePropertyRepository
    );
    
    await propertyCreateService.execute({
      title: 'Title Test',
      description: 'Isert Test',
      address: 'road 01',
      city: 'NY',
      state: 'NY',
      price: 99,
      user_id: 'usahsuahsuahs'
    });

    expect(
      propertyCreateService.execute({
        title: 'Title Test',
        description: 'Isert Test',
        address: 'road 01',
        city: 'NY',
        state: 'NY',
        price: 99,
        user_id: 'usahsuahsuahs'
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
