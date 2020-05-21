export default function middleValue(array: Array<number>): number {
  const mid = Math.floor(array.length / 2);
  const nums = [...array].sort((a, b) => a - b);

  return array.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
}
