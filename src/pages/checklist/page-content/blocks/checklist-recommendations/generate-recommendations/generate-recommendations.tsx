import React from 'react';

import { checkAnswers } from './check-answers';
import { generateRecommendationLayout } from './generate-layout';

const generateRecommendations = () => {
  checkAnswers();

  return <ol>{generateRecommendationLayout()}</ol>;
};

export { generateRecommendations };
