import orderArray from './orderArray';
import { checkRepetitionOnMaxFrequency } from './fashion';

interface IFrequency {
  arrayLenght: number;
  keys: Array<number>;
  values: Array<number>;
}

interface IAbsoluteFrequency {
  repetitiveValues: Array<number>;
  repeatedTimes: number;
  totalSample: number;
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

export function absolute(array: Array<number>): IAbsoluteFrequency {
  const data = checkRepetitionOnMaxFrequency(array);
  let finalReturn: IAbsoluteFrequency;
  if (data.repetitionOccurs && data.indexOfRepetition.length > 1) {
    let repetitiveValues: Array<number> = [];
    for (let i = 0; i < data.indexOfRepetition.length; i++) {
      repetitiveValues.push(data.organized.keys[data.indexOfRepetition[i]]);
    }
    finalReturn = {
      repetitiveValues,
      repeatedTimes: data.maxValue,
      totalSample: data.organized.arrayLenght,
    };
  } else {
    finalReturn = {
      repetitiveValues: data.organized.keys,
      repeatedTimes: data.maxValue,
      totalSample: data.organized.arrayLenght,
    };
  }
  return finalReturn;
}
