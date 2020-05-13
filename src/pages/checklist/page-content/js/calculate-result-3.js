import React from "react";

let result = 0;

const questions = [
  {
    numberQuestion: 1,
    numberAnswer: 1,
    pointAnswer: 0,
  },
  {
    numberQuestion: 1,
    numberAnswer: 1,
    pointAnswer: 1,
  },
  {
    numberQuestion: 1,
    numberAnswer: 1,
  },
];

const CalculateResult = () => {
  if (questionFirstAnswerFirst) {
    result += questionFirstAnswerFirst;
    alert(result);
  }
};

export default CalculateResult;
