interface IFrequency {
  arrayLenght: number;
  keys: Array<number>;
  values: Array<number>;
}

export function organizer(array: Array<number>): IFrequency {
  let a: any = [],
    b: any = [],
    prev;
  orderArray(array);
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== prev) {
      a.push(array[i]);
      b.push(1);
    } else {
      b[b.length - 1]++;
    }
    prev = array[i];
  }
  return { arrayLenght: array.length, keys: a, values: b };
}

export function orderArray(array: Array<number>): Array<number> {
  return array.sort((a: number, b: number) => {
    return a - b;
  });
}

export function middleValue(array: Array<number>): number {
  const mid = Math.floor(array.length / 2);
  const nums = [...array].sort((a, b) => a - b);

  return array.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
}
