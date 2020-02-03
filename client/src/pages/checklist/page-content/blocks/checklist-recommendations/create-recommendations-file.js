import generateWeight from './generate-weight';
import { generateRecommendations } from './generate-recommendations/generate-recommendations';
const fs = require('browserify-fs');

function createRecommendationsFile() {
    // let blob = new Blob([`Список рекомендаций. По итогам теста на сайте university-checklist.ru Вами было
    //     набрано баллов: ${generateWeight()}. Ниже будет приведен список рекомендаций, который поможет доработать ВКР
    //     до совершенства. Каждый пункт списка содержит 1,5 условных балла и повышает вероятность более профессионального
    //     восприятия Вашей работы дипломной Комиссией. Максимальное количество условных баллов, которые можно было набрать
    //     по итогам теста: 50. Список рекомендаций: ${generateRecommendations()}`],
    //     {type: 'text/plain;charset=utf-8'});

    // const text = 'text';

    // fs.mkdir('/home', function() {
    //     fs.writeFile('/home/hello-world.txt', 'Hello world!\n', function() {
    //         fs.readFile('/home/hello-world.txt', 'utf-8', function(err, data) {
    //             console.log(data);
    //         });
    //     });
    // });

    // return fs.writeFile('/recommendations/test-recommendations.txt', 'text');

    fs.writeFile('~/test-recommendations.txt', 'Hello Node.js', (err) => {
        err ? alert(err) : alert('The file was recorded.');
    });
}

export { createRecommendationsFile };
