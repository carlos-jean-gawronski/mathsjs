import { absolute } from '../../src/utils/frequencies';
import fashion from '../../src/utils/fashion';
import * as data from '../../dataTest.json';

test('shows absolute frequency on a given sample', () => {
  const absoluteResult = absolute(data.arr);
  expect(absoluteResult).toHaveProperty('repetitiveValues');
  expect(absoluteResult).toHaveProperty('repeatedTimes');
  expect(absoluteResult).toHaveProperty('totalSample');
  expect(absoluteResult.repeatedTimes).toBe(6);
  expect(absoluteResult.totalSample).toBe(42);
});

test('shows the most repetitive value', () => {
  const fashionResult = fashion(data.arr);
  expect(fashionResult).toBe(5.5);
});
