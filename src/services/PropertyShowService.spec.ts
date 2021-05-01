import FakePropertyRepository from '../repositories/fakes/FakePropertyRepository';
import { AppError } from './../errors/AppError';

import PropertyCreateService from './PropertyCreateService';
import PropertyShowService from './PropertyShowService';

describe('PropertyShowService', () => {
  it('Should be able to show property', async () => {
    const fakePropertyRepository = new FakePropertyRepository();

    const propertyCreateService = new PropertyCreateService(
      fakePropertyRepository
    );
    
    const propertyShowService = new PropertyShowService(
      fakePropertyRepository
    );
    
    const property =  await propertyCreateService.execute({
      title: 'Title Test',
      description: 'Insert Test',
      address: 'road 01',
      city: 'NY',
      state: 'NY',
      price: 99,
      user_id: 'usahsuahsuahs'
    });

    const findProperty = await propertyShowService.execute(property.id); 

    expect(findProperty).toHaveProperty('id');
  });

  it('Should be able not to show property', async () => {
    const fakePropertyRepository = new FakePropertyRepository();
    
    const propertyShowService = new PropertyShowService(
      fakePropertyRepository
    );

    const id = 'uagsuasu-asasas-asasa';

    expect(
      propertyShowService.execute(id)
    ).rejects.toBeInstanceOf(AppError);
  });
});

