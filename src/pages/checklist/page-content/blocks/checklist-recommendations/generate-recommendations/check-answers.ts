import $ from 'jquery';

import allRecommendations from '../recommendations-page/data/all-recommendations';

let recommendations: string [] = [];

function checkAnswers(): string [] {
    function _addRecommendation (recNumber: number) {
        recommendations.push(allRecommendations[recNumber]);
    }

    if ($('#question-5__answer-1').is(':checked')) _addRecommendation(0);
    if ($('#question-6__answer-2').is(':checked')) _addRecommendation(1);
    if ($('#question-7__answer-2').is(':checked')) _addRecommendation(2);

    if ($('#question-8__answer-2').is(':checked')) _addRecommendation(3);
    if ($('#question-9__answer-2').is(':checked')) _addRecommendation(4);
    if ($('#question-10__answer-2').is(':checked')) _addRecommendation(5);

    if ($('#question-11__answer-1').is(':checked')) _addRecommendation(6);
    if ($('#question-12__answer-1').is(':checked')) _addRecommendation(7);
    if ($('#question-13__answer-2').is(':checked')) _addRecommendation(8);

    if ($('#question-14__answer-2').is(':checked')) _addRecommendation(9);
    if ($('#question-15__answer-2').is(':checked')) _addRecommendation(10);
    if ($('#question-16__answer-2').is(':checked')) _addRecommendation(11);

    return recommendations;
}

export { checkAnswers, recommendations };
