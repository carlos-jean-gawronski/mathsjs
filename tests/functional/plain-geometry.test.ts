import Circle from '../../src/libs/geometry/plain/circle';
import Rectangle from '../../src/libs/geometry/plain/rectangle';
import Triangle from '../../src/libs/geometry/plain/triangle';

const data: any = {};
data.radius = 12.5;
data.rectangle = {
  base: 3,
  height: 4,
};
test('gets a circle area', () => {
  const circle = new Circle();
  const result = circle.area(data.radius);
  expect(result).toBe(490.8738521234052);
});

test('gets a circle perimeter', () => {
  const circle = new Circle();
  const result = circle.perimeter(data.radius);
  expect(result).toBe(78.53981633974483);
});

test('gets a circle section area', () => {
  const circle = new Circle();
  const result = circle.sectionArea(data.radius, 13);
  expect(result).toBe(17.72600021556741);
});

test('gets a circle section perimeter', () => {
  const circle = new Circle();
  const result = circle.sectionPerimeter(data.radius, 13);
  expect(result).toBe(2.836160034490786);
});

test('gets a rectangle/square area', () => {
  const rect = new Rectangle();
  const result = rect.area(data.rectangle.base, data.rectangle.height);
  expect(result).toBe(12);
});

test('gets a rectangle/square perimeter', () => {
  const rect = new Rectangle();
  const result = rect.perimeter(data.rectangle.base, data.rectangle.height);
  expect(result).toBe(14);
});

test('gets a rectangle/square diagonal', () => {
  const rect = new Rectangle();
  const result = rect.diagonal(data.rectangle.base, data.rectangle.height);
  expect(result).toBe(5);
});

test('gets the area of a triangle', () => {
  const tri = new Triangle();
  const result = tri.area(10, 6);
  expect(result).toBe(30);
});
