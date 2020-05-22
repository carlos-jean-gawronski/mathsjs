import orderArray from '../../src/utils/orderArray';
import middleValue from '../../src/utils/middleValue';
import { simpleAverage } from '../../src/utils/averages';
import fashion, {
  checkRepetitionOnMaxFrequency,
} from '../../src/utils/fashion';
import { organizer } from '../../src/utils/frequencies';

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
  expect(fashionResult).toBe(7.5);
});

test('test the organizer function', () => {
  const organizerResult = organizer(data.arr);
  expect(organizerResult).toHaveProperty('arrayLenght', 17);
  expect(organizerResult).toHaveProperty('keys');
  expect(organizerResult).toHaveProperty('values');
});

test('test repetition checker function with no repetition', () => {
  const checkRepetition = checkRepetitionOnMaxFrequency([
    1,
    2,
    3,
    4,
    5,
    7,
    8,
    12,
    23,
  ]);
  expect(checkRepetition).toHaveProperty('organized');
  expect(checkRepetition).toHaveProperty('maxValue');
  expect(checkRepetition).toHaveProperty('repetitionOccurs', false);
  expect(checkRepetition).toHaveProperty('indexOfRepetition');
});

test('test repetition checker function with repetition', () => {
  const checkRepetition = checkRepetitionOnMaxFrequency(data.arr);
  expect(checkRepetition).toHaveProperty('organized');
  expect(checkRepetition).toHaveProperty('maxValue');
  expect(checkRepetition).toHaveProperty('repetitionOccurs', true);
  expect(checkRepetition).toHaveProperty('indexOfRepetition');
});
