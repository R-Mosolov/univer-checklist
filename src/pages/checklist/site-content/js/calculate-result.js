import React from 'react';


let result = 0;

const questionFirstAnswerFirst = 0;
const questionFirstAnswerFirst
const questionFirstAnswerSecond = 1;

const QuestionSecondAnswerFirst = 0;
const QuestionSecondAnswerSecond = 1;
const QuestionSecondAnswerThird = 2;
const QuestionSecondAnswerFourth = 3;

const QuestionThirdAnswerFirst = 0;
const QuestionThirdAnswerSecond = 1;
const QuestionThirdAnswerThird = 2;


const CalculateResult = () => {
    if (QuestionFirstAnswerFirst) {
        result += QuestionFirstAnswerFirst;
        alert(result);
    }
};

export default CalculateResult;