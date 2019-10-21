import React from 'react';
import { Link } from 'react-router-dom';

import './css/style.css';
import SiteHeader from '../../../../../../global/header/site-header';

import generateWeight from '../generate-weight';
import { generateRecommendations } from '../generate-recommendations/generate-recommendations';

const RecommendationPage = () => {
    return (
        <div className="recommendation-page">
            <SiteHeader/>
            <div className="layout-positioner">
                <div className="recommendation-container p-5 rounded shadow">
                    <h1 className="text-center mb-4">Список рекомендаций</h1>

                    <p>По итогам теста Вами было набрано баллов: <i>{generateWeight()}</i>.</p>

                    <p>Ниже будет приведен список рекомендаций, который поможет доработать ВКР до совершенства.
                        Каждый пункт списка содержит 1,5 условных балла и повышает вероятность более
                        профессионального восприятия Вашей работы дипломной Комиссией. Максимальное количество условных
                        баллов, которые можно было набрать по итогам теста: 50.</p>

                    <h3 className="recommendations-title text-center">Список рекомендаций</h3>
                    <p className="get-recommendation">{generateRecommendations()}</p>

                    <nav className="d-flex justify-content-center">
                        <Link
                            className="get-recommendation btn text-center"
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