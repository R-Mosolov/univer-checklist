import React from 'react';
import { Link } from 'react-router-dom';
import './css/style.css';
import Background from './img/library.jpg';
import {ReactComponent as Pen} from './img/pen.svg';

const SiteContent = () => {
    return (
        <div className="main">
            <div className="d-flex">
                <div className="background">
                    <img src={Background} />
                </div>
                <div className="mobile-and-tablet">
                    <div className="welcome">
                        <h1 className="text-center">Университетский чек-лист</h1>
                        <p className="text-center mt-3">Бесплатное веб-приложение для проверки качества выпускных,
                            квалификационных работ бакалавров и магистров.</p>
                        <div className="d-flex justify-content-center">
                            <Link to="/registration">
                                <button className="btn mt-3">
                                    <Pen />Перейти к регистрации
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SiteContent;