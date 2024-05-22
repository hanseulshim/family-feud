import * as t from 'io-ts';

const Answer = t.type({
  answer: t.string,
  value: t.number,
});

const Question = t.type({
  question: t.string,
  answers: t.array(Answer),
});

export const Questions = t.array(Question); 