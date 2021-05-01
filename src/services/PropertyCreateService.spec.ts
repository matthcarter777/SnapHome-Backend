import FakePropertyRepository from '../repositories/fakes/FakePropertyRepository';
import PropertyCreateService from './PropertyCreateService';

describe('PropertyCreateService', () => {
  it('Should be able to create a new property', () => {
    const fakePropertyRepository = new FakePropertyRepository();

    const propertyCreateService = new PropertyCreateService(
      fakePropertyRepository
    );


  });

/*   it('Should not be able to create two property on the same name', () => {
    expect(1 +2).toBe(3);
  }); */
});
