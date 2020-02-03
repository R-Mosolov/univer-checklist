import generateWeight from './generate-weight';
import { generateRecommendations } from './generate-recommendations/generate-recommendations';
// import $ from 'jquery';

// const link = document.getElementById('link');

let blob = new Blob([`Список рекомендаций. По итогам теста Вами было набрано баллов: ${generateWeight()}.` +
    `Ниже будет приведен список рекомендаций, который поможет доработать ВКР до совершенства.` +
    `Каждый пункт списка содержит 1,5 условных балла и повышает вероятность более` +
    `профессионального восприятия Вашей работы дипломной Комиссией. Максимальное количество условных` +
    `баллов, которые можно было набрать по итогам теста: 50. Список рекомендаций: ${generateRecommendations()}`],
    {type: 'text/plain;charset=utf-8'});

// window.location.href = blob;
// link.href = URL.createObjectURL(blob);
