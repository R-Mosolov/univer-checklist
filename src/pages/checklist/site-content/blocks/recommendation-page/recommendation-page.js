import React from 'react';
import { Link } from 'react-router-dom';
import './css/style.css';
import recommendationList from '../question-block-2/js/recommendation-list';
import SiteHeader from '../../../../../global/header/site-header';

const RecommendationPage = () => {
    return (
        <div className="recommendation-page">
            <SiteHeader/>
            <div className="layout-positioner">
                <div className="recommendation-container p-5 rounded shadow">
                    <h1 className="text-center mb-4">Список улучшений</h1>
                    <ol className="list-group">
                        <li className="list-group-flush mb-3">
                            {recommendationList[0].recommendations[0].offer}.
                            Это добавит Вашей работе {recommendationList[0].recommendations[1].weight} балла.
                        </li>
                        <li className="list-group-flush mb-3">
                            {recommendationList[1].recommendations[1].offer}.
                            Это добавит Вашей работе {recommendationList[1].recommendations[1].weight} балла.
                        </li>
                        <li className="list-group-flush mb-4">
                            {recommendationList[2].recommendations[1].offer}.
                            Это добавит Вашей работе {recommendationList[2].recommendations[1].weight} балла.
                        </li>
                    </ol>
                    <nav className="d-flex justify-content-center">
                        <Link
                            className="get-recommendation btn btn-outline-success text-center"
                            to="/checklist-block-2">
                            Вернуться к тесту
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    )
};

export default RecommendationPage;