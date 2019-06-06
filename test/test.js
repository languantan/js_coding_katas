//using mjackson's expect library
import expect from 'expect';
import Converter from '../fut.js';

describe('Converter', () => {
  let converter = new Converter();

  describe('#convertToString', () => {
    it('should convert ones and tens', () => {
      [{ 'test': 1, 'expected': 'one' },
      { 'test': 10, 'expected': 'ten' },
      { 'test': 12, 'expected': 'twelve' },
      { 'test': 35, 'expected': 'thirty five' },
      { 'test': 88, 'expected': 'eighty eight' },
      ].forEach(v => {
        expect(converter.convertToString(v.test)).toBe(v.expected);
      });
    });

    it('should convert hundreds and thousands', () => {
      [{ 'test': 99, 'expected': 'ninety nine' },
      { 'test': 303, 'expected': 'three hundred and three' },
      { 'test': 789, 'expected': 'seven hundred eighty nine' },
      { 'test': 1026, 'expected': 'one thousand and twenty six' },
      { 'test': 3621, 'expected': 'three thousand six hundred twenty one' },
      ].forEach(v => {
        expect(converter.convertToString(v.test)).toBe(v.expected);
      });
    });
  });
});
