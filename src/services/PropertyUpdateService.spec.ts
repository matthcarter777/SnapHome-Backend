import FakePropertyRepository from '../repositories/fakes/FakePropertyRepository';
import { AppError } from './../errors/AppError';

import PropertyCreateService from './PropertyCreateService';
import PropertyUpdateService from './PropertyUpdateService';

describe('PropertyUpdateService', () => {
  it('Should be able to updated property', async () => {
    const fakePropertyRepository = new FakePropertyRepository();

    const propertyCreateService = new PropertyCreateService(
      fakePropertyRepository
    );
    
    const propertyUpdateService = new PropertyUpdateService(
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

    property.city = 'CB';

    const updatedProperty = await propertyUpdateService.execute(property); 

    expect(updatedProperty.city).toEqual('CB');
  });

  it('Should be able not to show property', async () => {
    const fakePropertyRepository = new FakePropertyRepository();

    const propertyCreateService = new PropertyCreateService(
      fakePropertyRepository
    );
    
    const propertyUpdateService = new PropertyUpdateService(
      fakePropertyRepository
    );
    
    await propertyCreateService.execute({
      title: 'Title Test',
      description: 'Insert Test',
      address: 'road 01',
      city: 'NY',
      state: 'NY',
      price: 99,
      user_id: 'usahsuahsuahs'
    });

    const updatedProperty = {
      id: 'iasjiajs-jiajsia',
      title: 'Title Test',
      description: 'Insert Test',
      address: 'road 01',
      city: 'NY',
      state: 'NY',
      price: 99,
      user_id: 'usahsuahsuahs'
    }

    expect(
      propertyUpdateService.execute(updatedProperty)
    ).rejects.toBeInstanceOf(AppError);
  });
});

