import {
  mostAppeared,
  mostAppearedRelative,
} from '../../src/libs/statistic/frequencies';
import fashion from '../../src/libs/statistic/fashion';
import * as data from '../../dataTest.json';

test('shows the absolute frequency on a given sample', () => {
  const absoluteResult = mostAppeared(data.arr);
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

test('shows the relative frequency on a given sample', () => {
  const relativeResult = mostAppearedRelative(data.arr);
  expect(relativeResult).toHaveProperty(
    'relativeFrequency',
    1.5714285714285714
  );
  expect(relativeResult).toHaveProperty('dataToAbsoluteFrequency');
});
