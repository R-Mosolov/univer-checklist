import React from 'react';
import './css/style.css';
import './js/calculate-result';
import calculateResult from './js/calculate-result';

const SiteContent = () => {
    return (
        <div className="container__position">
            <div className="layout-positioner">
                <form className="px-4 py-3">
                    <h1>Проверить ВКР</h1>
                    <div className="form-group">
                        <label htmlFor="question-1">На какой ступени обучения Вы находитесь?</label><br/>
                        <input type="radio" id="question-1__answer-1" name="question-1"/><span className="margin"/>Бакалавр<br/>
                        <input type="radio" id="question-1__answer-2" name="question-1"/><span className="margin"/>Магистр<br/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="question-2">На каком курсе Вы учитесь?</label><br/>
                        <input type="radio" id="question-2__answer-1" name="question-2"/><span className="margin"/>1-й (первый курс)<br/>
                        <input type="radio" id="question-2__answer-2" name="question-2"/><span className="margin"/>2-й (второй курс)<br/>
                        <input type="radio" id="question-2__answer-3" name="question-2"/><span className="margin"/>3-й (третий курс)<br/>
                        <input type="radio" id="question-2__answer-4" name="question-2"/><span className="margin"/>4-й (четвертый курс)<br/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="question-2">Какую оценку Вы намерены получить на защите диплома?</label><br/>
                        <input type="radio" id="question-3__answer-1" name="question-3"/><span className="margin"/>«Отлично»<br/>
                        <input type="radio" id="question-3__answer-2" name="question-3"/><span className="margin"/>«Четверку»<br/>
                        <input type="radio" id="question-3__answer-3" name="question-3"/><span className="margin"/>«Тройку»<br/>
                    </div>
                    <button type="submit" className="btn btn-primary show-result" id="show-result" onClick={calculateResult}>Получить результат</button>
                </form>
            </div>
        </div>
    )
};

export default SiteContent;