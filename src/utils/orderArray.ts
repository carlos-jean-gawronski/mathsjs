export default function orderArray(array: Array<number>): Array<number> {
  return array.sort((a: number, b: number) => {
    return a - b;
  });
}
