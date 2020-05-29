export default class Rectangle {
  area(base: number, height: number): number {
    return base * height;
  }

  perimeter(base: number, height: number): number {
    return 2 * base + 2 * height;
  }

  diagonal(base: number, height: number): number {
    return Math.sqrt(base ** 2 + height ** 2);
  }
}
