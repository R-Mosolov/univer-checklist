import React from 'react';
import { Link } from 'react-router-dom';

import './css/desktop.css';
import './css/tablet.css';
import './css/mobile.css';

import Background from '../site-content/img/library.jpg';
import { ReactComponent as Pen } from '../site-content/img/pen.svg';

const SiteContent = () => {
    return (
        <div className="main">
            <div className="d-flex">
                <div className="background">
                    <img className="main__background" src={Background} alt="Изображение библиотеки" />
                </div>
                <div className="tablet-and-mobile">
                    <div className="welcome-container">
                        <h1 className="text-center">Университетский <br className="mobile-break"/>чек-лист</h1>
                        <p className="text-center mt-3">Бесплатное веб-приложение для проверки качества выпускных,
                            квалификационных работ бакалавров и магистров.</p>
                        <div className="d-flex justify-content-center button-container">
                            <div className="button-position">
                                <Link to="/registration">
                                    <button className="btn mt-2">
                                        <Pen />Перейти к регистрации
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SiteContent;