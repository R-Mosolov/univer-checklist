import {recommendations} from './check-answers';
import React from 'react';

const generateRecommendationLayout = () => {
    let _layout = [];

    for (let i = 0; i < recommendations.length; i++) {
        _layout.push(<li>{recommendations[i]}</li>);
    }

    return _layout;
};

export { generateRecommendationLayout };