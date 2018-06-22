import { cons } from 'hexlet-pairs';
import runGame from '..';
import getRandomInteger from '../utils/get-random-integer';

const minRandomInteger = 10;
const maxRandomInteger = 9999;

const balance = (num) => {
  const iter = (digits) => {
    const firstDigit = digits[0];
    const lastDigit = digits[digits.length - 1];
    if (lastDigit === (firstDigit + 1) || lastDigit === firstDigit) {
      return Number.parseInt(digits.join(''), 10);
    }
    const newDigits = digits.map((d, idx) => {
      if (idx === 0) return d + 1;
      if (idx === (digits.length - 1)) return d - 1;
      return d;
    }).sort();
    return iter(newDigits);
  };
  return iter(`${num}`.split('').map(d => Number.parseInt(d, 10)).sort());
};

export default () => {
  const getGameData = () => {
    const num = getRandomInteger(minRandomInteger, maxRandomInteger);
    const question = `${num}`;
    console.log(question);
    const answer = `${balance(num)}`;
    return cons(question, answer);
  };
  runGame({
    instruction: 'Balance the given number.',
    getGameData,
  });
};
