import { cons } from 'hexlet-pairs';
import runGame from '..';
import getRandomInteger from '../utils';

const progressionLength = 10;
export default () => {
  const addNumberToSequence = (sequence, maxSequenceLength, commonDiff) => {
    if (sequence.length === maxSequenceLength) return sequence;
    const lastElement = sequence[sequence.length - 1];
    const nextElement = lastElement + commonDiff;
    return addNumberToSequence([...sequence, nextElement], maxSequenceLength, commonDiff);
  };
  const getGameData = () => {
    const firstElement = getRandomInteger(2, 100);
    const commonDiff = getRandomInteger(2, 100);
    const sequence = addNumberToSequence([firstElement], progressionLength, commonDiff);
    const elementIndex = getRandomInteger(0, sequence.length - 1);
    const question = sequence.map((digit, index) => (index === elementIndex ? '..' : digit)).join(' ');
    const answer = `${sequence[elementIndex]}`;
    return cons(question, answer);
  };
  runGame({
    instruction: 'What number is missing in this progression?',
    getGameData,
  });
};
