//using mjackson's expect library
import expect from 'expect';
import mergeIntervals from '../fut.js';

describe ('MergeIntervals', () => {
  it('should merge partial intervals', ()=> {
    expect(mergeIntervals([[1,3],[2,4],[5,8]])).toBe([[1,4],[5,8]]);
  });

  it('should not be false', ()=> {
    expect(true).toNotBe(false);
  });
});
