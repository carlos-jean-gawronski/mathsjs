export function circleArea(radius: number): number {
  return Math.PI * radius ** 2;
}

export function circlePerimeter(radius: number): number {
  return Math.PI * radius * 2;
}

export function circleSectionArea(radius: number, sectorAngle: number): number {
  const totalArea = Math.PI * radius ** 2;
  const finalArea = (totalArea * sectorAngle) / 360;
  return finalArea;
}

export function circleSectionPerimeter(
  radius: number,
  sectorAngle: number
): number {
  return (Math.PI * radius * 2 * sectorAngle) / 360;
}
