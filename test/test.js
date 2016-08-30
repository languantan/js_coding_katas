//using mjackson's expect library
import expect from 'expect';
import Converter from '../fut.js';

describe('Converter', () => {
  let converter = new Converter();

  describe('#convertToString', () => {
    it('should convert ones and tens', () => {
      [{ 'test': 1, 'expected': 'One' },
      { 'test': 10, 'expected': 'Ten' },
      { 'test': 12, 'expected': 'Twelve' },
      { 'test': 40, 'expected': 'Forty' },
      { 'test': 70, 'expected': 'Seventy' },
      { 'test': 35, 'expected': 'ThirtyFive' },
      { 'test': 88, 'expected': 'EightyEight' },
      { 'test': 99, 'expected': 'NinetyNine' }
      ].forEach(v => {
        expect(converter.convertToString(v.test)).toBe(v.expected);
      });
    });

    it('should convert hundreds', () => {
      [{ 'test': 250, 'expected': 'TwoHundredFifty' },
      { 'test': 303, 'expected': 'ThreeHundredThree' },
      { 'test': 764, 'expected': 'SevenHundredSixtyFour' },
      { 'test': 999, 'expected': 'NineHundredNinetyNine' }
      ].forEach(v => {
        expect(converter.convertToString(v.test)).toBe(v.expected);
      });
    });
  });
});
