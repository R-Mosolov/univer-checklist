import React from 'react';
import './css/style.css';
import { ReactComponent as Banner } from "./img/scholarship.svg";

const SiteContent = () => {
    return (
        <div className="about-service-base">
            <div className="layout-positioner">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="banner">
                        <h1>Кратко о сервисе <br/>«University Checklist»</h1>
                        <div className="banner__container">
                            <div className="banner__books"><Banner /></div>
                        </div>
                    </div>
                    <div className="description">
                        <p>
                            В рамках настоящей работы будет впервые описана и предложена к рассмотрению концепция компьютерной
                            программы, которая позволит стандартизировать процесс оценивания курсовых и дипломных работ,
                            экономить время преподавателей на исправлении повторяющихся, типичных ошибок студентов, а также
                            частично дополнит функциональные возможности программы «Антиплагиат».
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SiteContent;