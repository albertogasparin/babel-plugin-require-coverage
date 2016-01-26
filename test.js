
import { expect } from 'chai';
import API from './index';

describe('all()', () => {
  
  it('should return all todos', () => {
    let result = API.all();
    expect(result).to.have.length.gt(0);
  });

});
