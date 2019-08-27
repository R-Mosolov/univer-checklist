import React from 'react';
import '../../css/style.css';
import CalculateResultFourth from '../../js/calculate-result-4';
import { Link } from 'react-router-dom';
import SiteHeader from '../../../../../global/header/site-header';
import getWeight from '../checklist-data/get-weight';
import getRecommendation from '../checklist-data/get-recommendation';

const QuestionBlockFive = () => {
  return (
    <div className="checklist">
      <SiteHeader />
      <div className="layout-positioner">
        <form className="px-4 py-3">
          <h2 className="mt-4">5. Содержание</h2>

          <div className="form-group">
            <p className="mt-4">
              5.1. Страницы начала глав и параграфов соответствуют тем, которые
              указаны в содержании?
            </p>
            <input type="radio" id="question-14__answer-1" name="question-14" />
            <span className="margin" />
            <label htmlFor="question-14__answer-1">Да, соответствуют</label>
            <br />
            <input type="radio" id="question-14__answer-2" name="question-14" />
            <span className="margin" />
            <label htmlFor="question-14__answer-2">Нет, не соответствуют</label>
            <br />
          </div>

          <div className="form-group">
            <p className="mt-4">
              5.2. Названия разделов выделены жирным шрифтом и написаны
              прописными буквами?
            </p>
            <input type="radio" id="question-15__answer-1" name="question-15" />
            <span className="margin" />
            <label htmlFor="question-15__answer-1">Да, оформлены так</label>
            <br />
            <input type="radio" id="question-15__answer-2" name="question-15" />
            <span className="margin" />
            <label htmlFor="question-15__answer-2">Нет, оформлены иначе</label>
            <br />
          </div>

          <div className="form-group">
            <p className="mt-4">
              5.3. Все смысловые блоки работы включены в содержание? Например,
              введение, глава 1, параграфы главы 1 и т.д.
            </p>
            <input type="radio" id="question-16__answer-1" name="question-16" />
            <span className="margin" />
            <label htmlFor="question-16__answer-1">Да, включены</label>
            <br />
            <input type="radio" id="question-16__answer-2" name="question-16" />
            <span className="margin" />
            <label htmlFor="question-16__answer-2">Нет, не включены</label>
            <br />
          </div>

          <nav className="mt-4" aria-label="Page navigation example">
            <ul className="pagination d-flex justify-content-center">
              <li className="page-item btn-block text-center">
                <Link className="page-link" to="/checklist-block-4">
                  Предыдущий блок
                </Link>
              </li>
              <br />
            </ul>
            <span className="get-recommendation mb-4 text-center">
              <Link
                className="btn btn-block btn-outline-success"
                to="/recommendation-page/recommendation-page"
              >
                Получить рекомендации
              </Link>
            </span>
          </nav>
        </form>
      </div>
    </div>
  );
};

export default QuestionBlockFive;
