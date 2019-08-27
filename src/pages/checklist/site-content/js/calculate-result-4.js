import React from 'react';
import $ from 'jquery';

const CalculateResultFourth = event => {
  event.preventDefault();

  let result = 0;
  let recommendation = '';

  if ($('.question-1__answer-1').checked) {
    result += 1;
  } else if ($('.question-1__answer-2').checked) {
    result += 2;
  }

  if ($('.question-2__answer-1').checked) {
    result += 1;
  } else if ($('.question-2__answer-2').checked) {
    result += 2;
  } else if ($('.question-2__answer-3').checked) {
    result += 3;
  } else if ($('.question-2__answer-4').checked) {
    result += 4;
  }

  if ($('.question-3__answer-1').checked) {
    result += 1;
  } else if ($('.question-3__answer-2').checked) {
    result += 2;
  } else if ($('.question-3__answer-3').checked) {
    result += 3;
  }

  alert(
    `После финальной доработки веб-приложения здесь будет выводиться результат теста и список рекомендаций.`
    // `Вы хотите получить: ...
    // Итого баллов: ${result}
    // Список рекомендаций:
    // ${recommendation}`
  );

  // recommendation += 'Вам стоит потрудиться и поступить на магистра. ';
};

export default CalculateResultFourth;
