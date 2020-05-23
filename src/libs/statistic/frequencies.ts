import { checkRepetitionOnMaxFrequency } from './fashion';

interface IAbsoluteFrequency {
  repetitiveValues: Array<number>;
  repeatedTimes: number;
  totalSample: number;
}
interface IReturnRelative {
  relativeFrequency: number;
  dataToAbsoluteFrequency: IAbsoluteFrequency;
}

export function mostAppeared(array: Array<number>): IAbsoluteFrequency {
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

export function mostAppearedRelative(array: Array<number>): IReturnRelative {
  let finalValue: number = 0;
  const resultAbsolute = mostAppeared(array);
  for (let i = 0; i < resultAbsolute.repetitiveValues.length; i++) {
    finalValue +=
      resultAbsolute.repetitiveValues[i] * resultAbsolute.repeatedTimes;
  }
  finalValue /= resultAbsolute.totalSample;
  const returnObject: IReturnRelative = {
    relativeFrequency: finalValue,
    dataToAbsoluteFrequency: resultAbsolute,
  };
  return returnObject;
}
