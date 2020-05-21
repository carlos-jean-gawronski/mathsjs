import {
  circleArea,
  circlePerimeter,
  circleSectionArea,
  circleSectionPerimeter,
} from '../../src/libs/geometry/plain/circle';
import {
  rectagleArea,
  rectaglePerimeter,
  rectangleDiagonal,
} from '../../src/libs/geometry/plain/rectangle';

const data: any = {};
data.radius = 12.5;
data.rectangle = {
  base: 3,
  height: 4,
};
test('gets a circle area', () => {
  const circle = circleArea(data.radius);
  expect(circle).toBe(490.8738521234052);
});

test('gets a circle perimeter', () => {
  const circle = circlePerimeter(data.radius);
  expect(circle).toBe(78.53981633974483);
});

test('gets a circle section area', () => {
  const circle = circleSectionArea(data.radius, 13);
  expect(circle).toBe(17.72600021556741);
});

test('gets a circle section perimeter', () => {
  const circle = circleSectionPerimeter(data.radius, 13);
  expect(circle).toBe(2.836160034490786);
});

test('gets a rectangle/square area', () => {
  const rect = rectagleArea(data.rectangle.base, data.rectangle.height);
  expect(rect).toBe(12);
});

test('gets a rectangle/square perimeter', () => {
  const rect = rectaglePerimeter(data.rectangle.base, data.rectangle.height);
  expect(rect).toBe(14);
});

test('gets a rectangle/square diagonal', () => {
  const rect = rectangleDiagonal(data.rectangle.base, data.rectangle.height);
  expect(rect).toBe(5);
});
