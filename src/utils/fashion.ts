import { organizer } from './frequencies';

export interface IRepetitionOnMax {
  repetitionOccurs: boolean;
  organized: any;
  maxValue: number;
  indexOfRepetition: Array<number>;
}

export default function fashion(array: Array<number>): number {
  const data = checkRepetitionOnMaxFrequency(array);

  if (data.repetitionOccurs) {
    let totalSum: number = 0;
    for (let i = 0; i < data.indexOfRepetition.length; i++) {
      totalSum += data.organized.keys[data.indexOfRepetition[i]];
    }

    return totalSum / data.indexOfRepetition.length;
  } else {
    return data.organized.keys[data.indexOfRepetition[0]];
  }
}

export function checkRepetitionOnMaxFrequency(
  array: Array<number>
): IRepetitionOnMax {
  let organized = organizer(array);
  let maxRepetition = Math.max(...organized.values);
  let indexOfRepetition: Array<number> = [];

  for (var i = 0; i < organized.values.length - 1; i++) {
    if (maxRepetition === organized.values[i]) {
      indexOfRepetition.push(i);
    }
  }
  if (indexOfRepetition.length > 1 && maxRepetition !== 1) {
    return {
      organized,
      maxValue: maxRepetition,
      repetitionOccurs: true,
      indexOfRepetition,
    };
  } else {
    return {
      organized,
      maxValue: maxRepetition,
      repetitionOccurs: false,
      indexOfRepetition,
    };
  }
}
