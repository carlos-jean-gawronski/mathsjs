export default class Averages {
  simpleAverage(array: Array<number>): number {
    let sum: number = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }

    return sum / array.length;
  }
}
