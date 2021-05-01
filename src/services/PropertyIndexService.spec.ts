import FakePropertyRepository from '../repositories/fakes/FakePropertyRepository';

import PropertyCreateService from './PropertyCreateService';
import PropertyIndexService from './PropertyIndexService';

describe('PropertyCreateService', () => {
  it('Should be able to create a new property', async () => {
    const fakePropertyRepository = new FakePropertyRepository();

    const propertyCreateService = new PropertyCreateService(
      fakePropertyRepository
    );
    
    const propertyIndexService = new PropertyIndexService(
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

    const findPropertys = await propertyIndexService.execute(); 

    expect(findPropertys.length).toEqual(1);
  });
});
