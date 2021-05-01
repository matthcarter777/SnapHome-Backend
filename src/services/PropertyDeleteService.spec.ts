import { AppError } from './../errors/AppError';

import FakePropertyRepository from '../repositories/fakes/FakePropertyRepository';
import PropertyCreateService from './PropertyCreateService';
import PropertyDeleteService from './PropertyDeleteService';

describe('PropertyDeleteService', () => {
  it('Should be able to delete a property', async () => {
    const fakePropertyRepository = new FakePropertyRepository();

    const propertyCreateService = new PropertyCreateService(
      fakePropertyRepository
    );

    const propertyDeleteService = new PropertyDeleteService(
      fakePropertyRepository
    );
    
    const property = await propertyCreateService.execute({
      title: 'Title Test',
      description: 'Insert Test',
      address: 'road 01',
      city: 'NY',
      state: 'NY',
      price: 99,
      user_id: 'usahsuahsuahs'
    });

    const response = await propertyDeleteService.execute(property.id);

    expect(response).toBe(property);
  });

  it('Should be able not to delete', async () => {
    const fakePropertyRepository = new FakePropertyRepository();

    const propertyDeleteService = new PropertyDeleteService(
      fakePropertyRepository
    );
    
    const id = 'uagsuasu-asasas-asasa';

    expect(
      propertyDeleteService.execute(id)
    ).rejects.toBeInstanceOf(AppError);
  });
});
