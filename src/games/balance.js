import { cons } from 'hexlet-pairs';
import runGame from '..';
import getRandomInteger from '../utils';

const minRandomInteger = 10;
const maxRandomInteger = 9999;

const sort = arr => [...arr].sort();

const balance = (num) => {
  const iter = (digits) => {
    const minDigit = Math.min(...digits);
    const maxDigit = Math.max(...digits);
    const minIndex = digits.indexOf(minDigit);
    const maxIndex = digits.indexOf(maxDigit);
    const delta = maxDigit - minDigit;
    if (delta <= 1 || minDigit === maxDigit) {
      return sort(digits).join('');
    }
    const newDigits = digits.map((digit, idx) => {
      if (idx === minIndex) return digit + 1;
      if (idx === maxIndex) return digit - 1;
      return digit;
    });
    return iter(newDigits);
  };
  return iter(`${num}`.split('').map(d => Number.parseInt(d, 10)));
};

export default () => {
  const getGameData = () => {
    const num = getRandomInteger(minRandomInteger, maxRandomInteger);
    const question = `${num}`;
    const answer = balance(num);
    return cons(question, answer);
  };
  runGame({
    instruction: 'Balance the given number.',
    getGameData,
  });
};
