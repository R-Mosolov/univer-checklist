import $ from 'jquery';
import allRecommendations from './all-recommendations';
import React from 'react';

const getRecommendation = () => {
    let recommendationsForUser = [];
    let layout = [];

    const addRecommendation = (n) => recommendationsForUser.push(allRecommendations[n]);

    if ($('#question-5__answer-1').is(':checked')) addRecommendation(0);
    if ($('#question-6__answer-2').is(':checked')) addRecommendation(1);
    if ($('#question-7__answer-2').is(':checked')) addRecommendation(2);

    if ($('#question-8__answer-2').is(':checked')) addRecommendation(3);
    if ($('#question-9__answer-2').is(':checked')) addRecommendation(4);
    if ($('#question-10__answer-2').is(':checked')) addRecommendation(5);

    if ($('#question-11__answer-1').is(':checked')) addRecommendation(6);
    if ($('#question-12__answer-1').is(':checked')) addRecommendation(7);
    if ($('#question-13__answer-2').is(':checked')) addRecommendation(8);

    if ($('#question-14__answer-2').is(':checked')) addRecommendation(9);
    if ($('#question-15__answer-2').is(':checked')) addRecommendation(10);
    if ($('#question-16__answer-2').is(':checked')) addRecommendation(11);

    const generateRecommendationLayout = () => {
        for (let i = 0; i < recommendationsForUser.length; i++) {
            layout.push(<li>{recommendationsForUser[i]}</li>);
        }

        return layout;
    };

    return (
        <ol>
            {generateRecommendationLayout()}
        </ol>
    );
};

export { getRecommendation };