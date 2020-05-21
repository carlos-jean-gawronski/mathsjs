import orderArray from '../../src/utils/orderArray';
import middleValue from '../../src/utils/middleValue';
import { simpleAverage } from '../../src/utils/averages';
import fashion from '../../src/utils/fashion';

const data: any = {};
data.arr = [1, 5, 10, 10, 5, 5, 6, 1, 4, 10, 13, 19, 100, 89, 67132, 712, 23];
test('orders an array', () => {
  const ordered = orderArray(data.arr);
  data.orderedArr = ordered;
  expect(ordered[ordered.length - 1]).toBe(67132);
});

test('finds the biggest value in an array', () => {
  let array = data.arr;
  const max = Math.max(...array);
  expect(max).toBe(67132);
});

test('gets the exact middle value in an orderd array', () => {
  const middle = middleValue(data.orderedArr);
  expect(middle).toBe(10);
});

test('gets the simple average of an array', () => {
  const average = simpleAverage(data.arr);
  expect(average).toBe(4008.529411764706);
});

test('finds the smallest value in an array', () => {
  let array = data.arr;
  const max = Math.min(...array);
  expect(max).toBe(1);
});

test('gets the most repetitive value in an array', () => {
  const fashionResult = fashion(data.arr);
  console.log(fashionResult);
  // expect(fashionResult).toBe(1);
});
