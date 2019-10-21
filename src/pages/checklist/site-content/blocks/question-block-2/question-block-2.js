import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './css/desktop.css';
import './css/tablet.css';
import './css/mobile.css';

import SiteHeader from '../../../../../global/header/site-header';
import Ciolkovskii from './img/Ciolkovskii.png';
import './js/portrait-animation';
import generateWeight from '../checklist-recommendations/generate-weight';
import { generateRecommendations } from '../checklist-recommendations/generate-recommendations/generate-recommendations';

export default class QuestionBlockTwo extends Component {
    render() {
        return (
            <div className="checklist checklist-block-2">
                <SiteHeader />
                <div className="d-flex">
                    <div className="portrait d-flex justify-content-center align-items-center">
                        <div className="portrait-container">
                            <div className="img-container">
                                <img src={Ciolkovskii} alt="Портрет К.Э. Циолковского" />
                            </div>
                            <h3 className="portrait-name mt-3 text-center">
                                Константин Эдуардович <br className="mobile-break"/>Циолковский
                            </h3>
                            <p className="portrait-description text-center">
                                Отец российской <br className="mobile-break"/>теоретической космонавтики
                            </p>
                            <div className="wrapper"/>
                        </div>
                    </div>
                    <div className="form-container d-flex justify-content-center align-items-center">
                        <form className="form px-4 py-3">
                            <h2>2. Общее оформление работы</h2>

                            <div className="form-group">
                                <p className="mt-4">2.1. Каждая страница работы вложена в отдельный файл?</p>
                                <input type="radio" id="question-5__answer-1" name="question-5" value="Да, каждая"/>
                                <span className="margin"/>
                                <label htmlFor="question-5__answer-1">Да, каждая</label><br/>
                                <input type="radio" id="question-5__answer-2" name="question-5"/><span className="margin"/>
                                <label htmlFor="question-5__answer-2">Нет, ни одна</label><br/>
                            </div>

                            <div className="form-group">
                                <p className="mt-4">2.2. Работа вложена в твердую папку?</p>
                                <input type="radio" id="question-6__answer-1" name="question-6"/><span className="margin"/>
                                <label htmlFor="question-6__answer-1">Да</label><br/>
                                <input type="radio" id="question-6__answer-2" name="question-6"/><span className="margin"/>
                                <label htmlFor="question-6__answer-2">Нет</label><br/>
                            </div>

                            <div className="form-group">
                                <p className="mt-4">
                                    2.3. Работа оформлена шрифтом Times New Roman, 14 кегль, с интервалом между строк 1,5?
                                </p>
                                <input type="radio" id="question-7__answer-1" name="question-7"/><span className="margin"/>
                                <label htmlFor="question-7__answer-1">Да</label><br/>
                                <input type="radio" id="question-7__answer-2" name="question-7"/><span className="margin"/>
                                <label htmlFor="question-7__answer-2">Нет</label><br/>
                            </div>

                            <nav className="mt-4" aria-label="Page navigation example">
                                <ul className="pagination d-flex justify-content-center">
                                    <li className="page-item btn-block text-center">
                                        <Link className="page-link" to="/checklist-block-1">
                                            Предыдущий блок
                                        </Link>
                                    </li><br/>
                                    <li className="get-recommendation page-item btn-block text-center">
                                        <Link className="page-link"
                                              to="/checklist-block-3"
                                              onClick={() => {
                                                  generateWeight();
                                                  generateRecommendations();}}
                                              >
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
    }
};