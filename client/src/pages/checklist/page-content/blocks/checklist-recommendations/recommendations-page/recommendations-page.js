import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

import './css/style.css';
import SiteHeader from '../../../../../../global/header/site-header';

import generateWeight from '../generate-weight';
import { generateRecommendations } from '../generate-recommendations/generate-recommendations';
import '../download-recommendations';

const RecommendationsPage = () => {
    return (
        <div className="recommendation-page">
            <SiteHeader/>
            <div className="layout-positioner">
                <div className="recommendation-container p-5 rounded shadow">
                    <h2 className="title text-center mb-4">Количество баллов</h2>

                    <p>По итогам теста Вами было набрано баллов: <i>{generateWeight()}</i>.</p>

                    <p>Ниже будет приведен список рекомендаций, который поможет доработать ВКР до совершенства.
                        Каждый пункт списка содержит 1,5 условных балла и повышает вероятность более
                        профессионального восприятия Вашей работы дипломной Комиссией. Максимальное количество условных
                        баллов, которые можно было набрать по итогам теста: 50.</p>

                    <p className="get-recommendation">{generateRecommendations()}</p>

                    <nav className="d-flex flex-column justify-content-center">
                        <a className="text-center mt-2 btn"
                            href="/recommendations/recommendations.txt"
                            download>
                            Скачать файл в TXT-формате (Блокнот)
                        </a>
                        <a className="text-center mt-2 btn"
                            href="/recommendations/recommendations.csv"
                            download>
                            Скачать файл в CSV-формате (Эксель)
                        </a>
                        <Link
                            className="get-recommendation btn text-center mt-4"
                            to="/checklist-block-5">
                            Вернуться к тесту
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    )
};

export default RecommendationsPage;
