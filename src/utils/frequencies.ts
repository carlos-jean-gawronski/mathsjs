import orderArray from './orderArray';

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

export function absolute(array: Array<number>): Object {
  let organized = organizer(array);
  let data: object = {};
  for (let i = 0; i < organized.arrayLenght; i++) {
    Object.defineProperty(data, organized.keys[i], {
      value: organized.values[i],
    });
  }
  return data;
}
