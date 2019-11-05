import React from 'react';
import { Link } from 'react-router-dom';

import '../../../../../global/css/style.css';
import '../../css/style.css';
import './css/desktop.css';
import './css/tablet.css';
import './css/mobile.css';

import SiteHeader from '../../../../../global/header/site-header';
import Lomonosov from './img/Lomonosov.png';
import './js/about-portrait';

const QuestionBlockOne = () => {
    return (
        <div className="checklist checklist-block-1">
            <SiteHeader />
            <div className="d-flex">
                <div className="portrait d-flex justify-content-center align-items-center">
                    <div className="portrait-container">
                        <div className="img-container">
                            <img src={Lomonosov} alt="Портрет М.В. Ломоносова" />
                        </div>
                        <h3 className="portrait-name mt-3 text-center">Михаил Васильевич <br className="mobile-break"/>Ломоносов</h3>
                        <p className="portrait-description text-center">
                            Основатель первого <br className="mobile-break"/>московского Университета
                        </p>
                        <div className="wrapper"/>
                    </div>
                </div>
                <div className="form-container layout-positioner">
                    <form className="px-4 py-3">
                        <h1 className="mt-4">Проверка ВКР</h1>

                        <h2 className="mt-4">1. Уточняющие вопросы</h2>

                        <div className="form-group">
                            <p className="mt-4">1.1. На какой ступени обучения Вы находитесь?</p>
                            <div className="d-flex">
                                <div className="col p-0">
                                    <input type="radio" id="question-1__answer-1" name="question-1" /><span className="margin"/>
                                    <label htmlFor="question-1__answer-1">Бакалавр</label><br/>
                                </div>
                                <div className="col">
                                    <input type="radio" id="question-1__answer-2" name="question-1"/><span className="margin"/>
                                    <label htmlFor="question-1__answer-2">Магистр</label><br/>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <p className="mt-4">1.2. На каком курсе Вы учитесь?</p>
                            <div className="d-flex">
                                <div className="col p-0">
                                    <input type="radio" id="question-2__answer-1" name="question-2"/><span className="margin"/>
                                    <label htmlFor="question-2__answer-1">1</label><br/>
                                    <input type="radio" id="question-2__answer-2" name="question-2"/><span className="margin"/>
                                    <label htmlFor="question-2__answer-2">2</label><br/>
                                </div>
                                <div className="col">
                                    <input type="radio" id="question-2__answer-3" name="question-2"/><span className="margin"/>
                                    <label htmlFor="question-2__answer-3">3</label><br/>
                                    <input type="radio" id="question-2__answer-4" name="question-2"/><span className="margin"/>
                                    <label htmlFor="question-2__answer-4">4</label><br/>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <p className="mt-4">1.3. Сколько баллов из 5 Вам достаточно на защите диплома?</p>
                            <div className="d-flex">
                                <div className="col p-0">
                                    <input type="radio" id="question-3__answer-1" name="question-3"/><span className="margin"/>
                                    <label htmlFor="question-3__answer-1">5</label><br/>
                                    <input type="radio" id="question-3__answer-2" name="question-3"/><span className="margin"/>
                                    <label htmlFor="question-3__answer-2">4</label><br/>
                                </div>
                                <div className="col">
                                    <input type="radio" id="question-3__answer-3" name="question-3"/><span className="margin"/>
                                    <label htmlFor="question-3__answer-3">3</label><br/>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <p className="mt-4">1.4. На какой месяц назначена защита работы?</p>
                            <div className="d-flex">
                                <div className="col p-0">
                                    <input type="radio" id="question-4__answer-1" name="question-4"/><span className="margin"/>
                                    <label htmlFor="question-4__answer-1">Январь-март</label><br/>
                                    <input type="radio" id="question-4__answer-2" name="question-4"/><span className="margin"/>
                                    <label htmlFor="question-4__answer-2">Апрель-июнь</label><br/>
                                </div>
                                <div className="col">
                                    <input type="radio" id="question-4__answer-3" name="question-4"/><span className="margin"/>
                                    <label htmlFor="question-4__answer-3">Июль-сентябрь</label><br/>
                                    <input type="radio" id="question-4__answer-4" name="question-4"/><span className="margin"/>
                                    <label htmlFor="question-4__answer-4">Октябрь-декабрь</label><br/>
                                </div>
                            </div>
                        </div>

                        <nav className="mt-4" aria-label="Page navigation example">
                            <ul className="pagination d-flex justify-content-center">
                                <li className="page-item btn-block text-center">
                                    <Link className="page-link" to="/checklist-block-2">
                                        Следующий блок
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default QuestionBlockOne;
