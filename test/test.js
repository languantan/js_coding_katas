//using mjackson's expect library
import expect from 'expect';
// import /*somethin*/ from '../fut.js';

describe ('True', () => {
  it('should be true', ()=> {
    expect(true).toBe(true);
  });

  it('should not be false', ()=> {
    expect(true).toNotBe(false);
  });
});
