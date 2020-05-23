import orderArray from './orderArray';
// eslint-disable-next-line no-unused-vars
import { checkRepetitionOnMaxFrequency, IRepetitionOnMax } from './fashion';

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

export function absolute(array: Array<number>) {
  const data = checkRepetitionOnMaxFrequency(array);
  data.repetitionOccurs && data.indexOfRepetition.length > 1
    ? sendAbsoluteComplex(data)
    : sendSimpleValues(data);
  function sendAbsoluteComplex(data: IRepetitionOnMax) {
    let repetitiveValues: Array<number> = [];
    for (let i = 0; i < data.indexOfRepetition.length; i++) {
      repetitiveValues.push(data.organized.keys[data.indexOfRepetition[i]]);
    }
    return {
      repetitiveValues,
      repeatedTimes: data.maxValue,
      totalSample: data.organized.arrayLenght,
    };
  }

  function sendSimpleValues(data: IRepetitionOnMax) {
    return {
      repetitiveValues: 0,
      repeatedTimes: data.maxValue,
      totalSample: data.organized.arrayLenght,
    };
  }
}
