import React from 'react';

import { recommendations } from './check-answers';

const generateRecommendationLayout = () => {
  let _layout = [];

  const isNeededTitle = () => {
    if (recommendations.length > 0) {
      return (
        <h2 className="recommendations-title text-center mb-4">
          Список рекомендаций
        </h2>
      );
    }
    return;
  };

  for (let i = 0; i < recommendations.length; i++) {
    _layout.push(<li>{recommendations[i]}</li>);
  }

  return (
    <div>
      {isNeededTitle()}
      {_layout}
    </div>
  );
};

export { generateRecommendationLayout };
