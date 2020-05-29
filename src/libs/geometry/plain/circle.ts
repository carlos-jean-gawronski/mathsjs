export default class Circle {
  area(radius: number): number {
    return Math.PI * radius ** 2;
  }

  perimeter(radius: number): number {
    return Math.PI * radius * 2;
  }

  sectionArea(radius: number, sectorAngle: number): number {
    const totalArea = Math.PI * radius ** 2;
    const finalArea = (totalArea * sectorAngle) / 360;
    return finalArea;
  }

  sectionPerimeter(radius: number, sectorAngle: number): number {
    return (Math.PI * radius * 2 * sectorAngle) / 360;
  }
}
