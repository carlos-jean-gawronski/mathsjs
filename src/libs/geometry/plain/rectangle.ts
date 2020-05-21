export function rectagleArea(base: number, height: number): number {
  return base * height;
}

export function rectaglePerimeter(base: number, height: number): number {
  return 2 * base + 2 * height;
}

export function rectangleDiagonal(base: number, height: number): number {
  return Math.sqrt(base ** 2 + height ** 2);
}
