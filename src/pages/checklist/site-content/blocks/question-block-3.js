import React from 'react';
import '../css/style.css';
import { Link } from "react-router-dom";
import SiteHeader from "../../../site-header/site-header";

const QuestionBlockThree = () => {
    return (
        <div className="checklist">
            <SiteHeader />
            <div className="layout-positioner">
                <form className="px-4 py-3">

                    <h2 className="mt-4">3. Титульный лист</h2>

                    <div className="form-group">
                        <p className="mt-4">3.1. На титульном листе стоят обе подписи (Ваша и научного руководителя)?</p>
                        <input type="radio" id="question-4__answer-1" name="question-4"/><span className="margin"/>
                        <label htmlFor="question-4__answer-1">Да, стоят обе подписи</label><br/>
                        <input type="radio" id="question-4__answer-2" name="question-4"/><span className="margin"/>
                        <label htmlFor="question-4__answer-2">Нет</label><br/>
                    </div>

                    <div className="form-group">
                        <p className="mt-4">3.2. Тема работы написана прописными буквами?</p>
                        <input type="radio" id="question-5__answer-1" name="question-4"/><span className="margin"/>
                        <label htmlFor="question-5__answer-1">Да</label><br/>
                        <input type="radio" id="question-5__answer-2" name="question-4"/><span className="margin"/>
                        <label htmlFor="question-5__answer-2">Нет</label><br/>
                    </div>

                    <div className="form-group">
                        <p className="mt-4">
                            3.3. В «шапке» написан номер учебного направления?
                        </p>
                        <input type="radio" id="question-5__answer-1" name="question-4"/><span className="margin"/>
                        <label htmlFor="question-5__answer-1">Да</label><br/>
                        <input type="radio" id="question-5__answer-2" name="question-4"/><span className="margin"/>
                        <label htmlFor="question-5__answer-2">Нет</label><br/>
                    </div>

                    <nav className="mt-4" aria-label="Page navigation example">
                        <ul className="pagination d-flex justify-content-center">
                            <li className="page-item btn-block text-center">
                                <Link className="page-link" to="/checklist-block-2">
                                    Предыдущий блок
                                </Link>
                            </li><br/>
                            <li className="page-item btn-block text-center">
                                <Link className="page-link" to="/checklist-block-4">
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

export default QuestionBlockThree;