//using mjackson's expect library
import expect from 'expect';
import IsRotation from '../fut.js';

describe('IsRotation', () => {
  it('should check if strings are rotation', () => {
    expect(IsRotation('abcde', 'cdeab')).toBe(true);
  });

  it('should check if strings are not rotation', () => {
    expect(IsRotation('abcde', 'caedb')).toBe(false);
  });
});


