import { organizer } from '../../utils/tools';

interface IAnalized {
  keys: Array<number>;
  values: Array<string>;
}

export default class GraphicsAnalizer {
  simplePercentageGraphic(arr: Array<number>, n: number): IAnalized {
    const data = organizer(arr);
    let valuesArray: Array<string> = [];

    for (let i = 0; i < data.keys.length; i++) {
      let a = ((data.values[i] / data.arrayLenght) * 100).toFixed(n);
      let value = `${a}%`;
      valuesArray.push(value);
    }

    return {
      keys: data.keys,
      values: valuesArray,
    };
  }
}
