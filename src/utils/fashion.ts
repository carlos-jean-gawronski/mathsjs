import { organizer } from './frequencies';

export default function fashion(array: Array<number>): number {
  let organized = organizer(array);
  let maxRepetition = Math.max(...organized.values);
  let indexOfRepetition: Array<number> = [];

  for (var i = 0; i < organized.values.length - 1; i++) {
    if (maxRepetition === organized.values[i]) {
      indexOfRepetition.push(i);
    }
  }
  if (indexOfRepetition.length > 1) {
    let totalSum: number = 0;
    for (let i = 0; i < indexOfRepetition.length; i++) {
      totalSum += organized.keys[indexOfRepetition[i]];
    }

    return totalSum / indexOfRepetition.length;
  } else {
    return organized.keys[indexOfRepetition[0]];
  }
}
