import React from 'react';
import '../css/style.css';
import { Link } from "react-router-dom";
import SiteHeader from "../../../site-header/site-header";

const QuestionBlockTwo = () => {
    return (
        <div className="checklist">
            <SiteHeader />
            <div className="layout-positioner">
                <form className="px-4 py-3">

                    <h2 className="mt-4">2. Общее оформление работы</h2>

                    <div className="form-group">
                        <p className="mt-4">2.1. Каждая страница работы вложена в отдельный файл?</p>
                        <input type="radio" id="question-4__answer-1" name="question-4"/><span className="margin"/>
                        <label htmlFor="question-4__answer-1">Да, каждая</label><br/>
                        <input type="radio" id="question-4__answer-2" name="question-4"/><span className="margin"/>
                        <label htmlFor="question-4__answer-2">Нет, ни одна</label><br/>
                    </div>

                    <div className="form-group">
                        <p className="mt-4">2.2. Работа вложена в твердую папку?</p>
                        <input type="radio" id="question-5__answer-1" name="question-4"/><span className="margin"/>
                        <label htmlFor="question-5__answer-1">Да</label><br/>
                        <input type="radio" id="question-5__answer-2" name="question-4"/><span className="margin"/>
                        <label htmlFor="question-5__answer-2">Нет</label><br/>
                    </div>

                    <div className="form-group">
                        <p className="mt-4">
                            2.3. Работа оформлена шрифтом Times New Roman, 14 кегль, с интервалом между строк 1,5?
                        </p>
                        <input type="radio" id="question-5__answer-1" name="question-4"/><span className="margin"/>
                        <label htmlFor="question-5__answer-1">Да</label><br/>
                        <input type="radio" id="question-5__answer-2" name="question-4"/><span className="margin"/>
                        <label htmlFor="question-5__answer-2">Нет</label><br/>
                    </div>

                    <nav className="mt-4" aria-label="Page navigation example">
                        <ul className="pagination d-flex justify-content-center">
                            <li className="page-item btn-block text-center">
                                <Link className="page-link" to="/checklist-block-1">
                                    Предыдущий блок
                                </Link>
                            </li><br/>
                            <li className="page-item btn-block text-center">
                                <Link className="page-link" to="/checklist-block-3">
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

export default QuestionBlockTwo;