import React from 'react';


let result = 0;

const questions = [
    {
        numberQuestion: 1,
        numberAnswer: 1,
        pointAnswer: 0
    },
    {
        numberQuestion: 1,
        numberAnswer: 1
        pointAnswer: 1
    },
    {
        numberQuestion: 1,
        numberAnswer: 1
    }

];

// const questionFirstAnswerFirst = 0;
// const textQuestionFirstAnswerFirst
// const questionFirstAnswerSecond = 1;
//
// const questionSecondAnswerFirst = 0;
// const questionSecondAnswerSecond = 1;
// const questionSecondAnswerThird = 2;
// const questionSecondAnswerFourth = 3;
//
// const questionThirdAnswerFirst = 0;
// const questionThirdAnswerSecond = 1;
// const questionThirdAnswerThird = 2;


const CalculateResult = () => {
    if (questionFirstAnswerFirst) {
        result += questionFirstAnswerFirst;
        alert(result);
    }
};

export default CalculateResult;