//using mjackson's expect library
import expect from 'expect';
import Negate from '../fut.js';

describe ('Negate', () => {
  it('should change the truth', ()=> {
    expect(Negate(true)).toBe(false);
  });

  it('should not retain truth', ()=> {
    expect(Negate(true)).toNotBe(true);
  });
});
