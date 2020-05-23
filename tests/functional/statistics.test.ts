import { absolute } from '../../src/utils/frequencies';
import fashion from '../../src/utils/fashion';
import * as data from '../../dataTest.json';

test('shows absolute frequency on a given sample', () => {
  const absoluteResult = absolute(data.arr);
  console.log(absoluteResult);
  // expect(absoluteResult).toBe()
});

test('shows the most repetitive value', () => {
  const fashionResult = fashion(data.arr);
  expect(fashionResult).toBe(5.5);
});
