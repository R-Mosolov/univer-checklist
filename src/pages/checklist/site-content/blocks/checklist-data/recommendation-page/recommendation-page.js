import React from 'react';
import { Link } from 'react-router-dom';

import './css/style.css';
import SiteHeader from '../../../../../../global/header/site-header';

import getWeight from '../get-weight';
import getRecommendation from '../get-recommendation';

const RecommendationPage = () => {
    return (
        <div className="recommendation-page">
            <SiteHeader/>
            <div className="layout-positioner">
                <div className="recommendation-container p-5 rounded shadow">
                    <h1 className="text-center mb-4">Список рекомендаций</h1>

                    <p>По итогам теста Вами было набрано баллов: <i>{getWeight()}</i>.</p>

                    <p>Ниже будет приведен список рекомендаций, который поможет доработать ВКР до совершенства.
                        Каждый пункт списка содержит 1,5 условных балла и повышает вероятность более
                        профессионального восприятия Вашей работы дипломной Комиссией. Максимальное количество условных
                        баллов, которые можно было набрать по итогам теста: 50.</p>

                    <h3 className="recommendations-title text-center">Рекомендации по блоку 2</h3>
                    <p className="get-recommendation">{getRecommendation()}</p>

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