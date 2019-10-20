import React from 'react';
import '../../css/style.css';
import { Link } from "react-router-dom";
import SiteHeader from '../../../../../global/header/site-header';
import generateWeight from "../checklist-recommendations/generate-weight";
import { generateRecommendations } from "../checklist-recommendations/generate-recommendations/generate-recommendations";

const QuestionBlockFour = () => {
    return (
        <div className="checklist">
            <SiteHeader />
            <div className="layout-positioner">
                <form className="px-4 py-3">

                    <h2 className="mt-4">4. Название работы</h2>

                    <div className="form-group">
                        <p className="mt-4">4.1. Название работы содержит понятие «особенности»?</p>
                        <input type="radio" id="question-11__answer-1" name="question-11"/><span className="margin"/>
                        <label htmlFor="question-11__answer-1">Да, содержит</label><br/>
                        <input type="radio" id="question-11__answer-2" name="question-11"/><span className="margin"/>
                        <label htmlFor="question-11__answer-2">Нет, не содержит</label><br/>
                    </div>

                    <div className="form-group">
                        <p className="mt-4">4.2. Название работы ограничивает исследование локально? Например,
                            «…в России» или «…в г. Казань».</p>
                        <input type="radio" id="question-12__answer-1" name="question-12"/><span className="margin"/>
                        <label htmlFor="question-12__answer-1">Да, ограничивает</label><br/>
                        <input type="radio" id="question-12__answer-2" name="question-12"/><span className="margin"/>
                        <label htmlFor="question-12__answer-2">Нет, не ограничивает</label><br/>
                    </div>

                    <div className="form-group">
                        <p className="mt-4">
                            4.3. Названия отдельных глав более узки по смыслу, чем название (тема) работы?
                        </p>
                        <input type="radio" id="question-13__answer-1" name="question-13"/><span className="margin"/>
                        <label htmlFor="question-13__answer-1">Да, главы уже</label><br/>
                        <input type="radio" id="question-13__answer-2" name="question-13"/><span className="margin"/>
                        <label htmlFor="question-13__answer-2">Нет, главы шире</label><br/>
                    </div>

                    <nav className="mt-4" aria-label="Page navigation example">
                        <ul className="pagination d-flex justify-content-center">
                            <li className="page-item btn-block text-center">
                                <Link className="page-link" to="/checklist-block-3">
                                    Предыдущий блок
                                </Link>
                            </li><br/>
                            <li className="page-item btn-block text-center">
                                <Link className="page-link"
                                      to="/checklist-block-5"
                                      onClick={() => {
                                          generateWeight();
                                          generateRecommendations();
                                      }}>
                                    Следующий блок
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </form>
            </div>
        </div>
    )
};

export default QuestionBlockFour;