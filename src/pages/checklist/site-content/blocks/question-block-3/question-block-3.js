import React from 'react';
import { Link } from "react-router-dom";

import './css/desktop.css';
import './css/tablet.css';
import './css/mobile.css';

import '../../css/style.css';
import SiteHeader from '../../../../../global/header/site-header';
import Mendeleev from "./img/Mendeleev.png";
import getWeight from '../checklist-data/get-weight';
import { getRecommendation } from "../checklist-data/get-recommendation";

const QuestionBlockThree = () => {
    return (
        <div className="checklist checklist-block-3">
            <SiteHeader />
            <div className="d-flex">
                <div className="portrait d-flex justify-content-center align-items-center">
                    <div className="portrait-container">
                        <div className="img-container d-flex justify-content-center">
                            <img className="shadow-sm" src={Mendeleev} alt="Портрет Д.И. Менделеева" />
                        </div>
                        <h3 className="portrait-name mt-3 text-center">Дмитрий Иванович <br className="mobile-break"/>Менделеев</h3>
                        <p className="portrait-description text-center">
                            Создатель таблицы химических <br className="mobile-break"/> элементов
                        </p>
                        <div className="wrapper"/>
                    </div>
                </div>
                <div className="form-container d-flex align-items-center">
                    <form className="form px-4 py-3">

                        <h2>3. Титульный лист</h2>

                        <div className="form-group">
                            <p className="mt-4">3.1. На титульном листе стоят обе подписи (Ваша и научного руководителя)?</p>
                            <input type="radio" id="question-8__answer-1" name="question-8"/><span className="margin"/>
                            <label htmlFor="question-8__answer-1">Да, стоят обе подписи</label><br/>
                            <input type="radio" id="question-8__answer-2" name="question-8"/><span className="margin"/>
                            <label htmlFor="question-8__answer-2">Нет</label><br/>
                        </div>

                        <div className="form-group">
                            <p className="mt-4">3.2. Тема работы написана прописными буквами?</p>
                            <input type="radio" id="question-9__answer-1" name="question-9"/><span className="margin"/>
                            <label htmlFor="question-9__answer-1">Да</label><br/>
                            <input type="radio" id="question-9__answer-2" name="question-9"/><span className="margin"/>
                            <label htmlFor="question-9__answer-2">Нет</label><br/>
                        </div>

                        <div className="form-group">
                            <p className="mt-4">
                                3.3. В «шапке» написан номер учебного направления?
                            </p>
                            <input type="radio" id="question-10__answer-1" name="question-10"/><span className="margin"/>
                            <label htmlFor="question-10__answer-1">Да</label><br/>
                            <input type="radio" id="question-10__answer-2" name="question-10"/><span className="margin"/>
                            <label htmlFor="question-10__answer-2">Нет</label><br/>
                        </div>

                        <nav className="mt-4" aria-label="Page navigation example">
                            <ul className="pagination d-flex justify-content-center">
                                <li className="page-item btn-block text-center">
                                    <Link className="page-link" to="/checklist-block-2">
                                        Предыдущий блок
                                    </Link>
                                </li><br/>
                                <li className="page-item btn-block text-center">
                                    <Link className="page-link"
                                          to="/checklist-block-4"
                                          onClick={() => {
                                              getWeight();
                                              getRecommendation();
                                          }}>
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

export default QuestionBlockThree;