import React from 'react';

import './css/desktop.css';
import './css/tablet.css';
import './css/mobile.css';

import { ReactComponent as Pen } from "../../main/page-content/img/pen.svg";

const PageContent = () => {
    return (
        <div className="registration">
            <div className="banner">
                <h1 className="d-flex justify-content-center align-items-center h-100">Регистрация</h1>
            </div>
            <div className="page-background">
                <div className="layout-positioner">
                    <form className="px-4 py-3">
                        <div className="form-group mt-4">
                            <label htmlFor="last-name">Фамилия</label>
                            <input
                                type="text"
                                className="form-control last-name"
                                id="last-name"
                                placeholder="Ломоносов"
                                minLength="2"
                                maxLength="30"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="first-name">Имя</label>
                            <input
                                type="text"
                                className="form-control first-name"
                                id="first-name"
                                placeholder="Михаил"
                                minLength="2"
                                maxLength="20"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="third-name">Отчество</label>
                            <input
                                type="text"
                                className="form-control third-name"
                                id="third-name"
                                placeholder="Васильевич"
                                minLength="2"
                                maxLength="20"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="university-name">Название ВУЗ-а</label>
                            <input
                                type="text"
                                className="form-control university-name"
                                id="university-name"
                                placeholder="МГУ"
                                minLength="3"
                                maxLength="40"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="university-faculty">Факультет обучения в ВУЗ-е</label>
                            <input
                                type="text"
                                className="form-control university-faculty"
                                id="university-faculty"
                                placeholder="Химический факультет"
                                minLength="2"
                                maxLength="50"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email (электронная почта)</label>
                            <input
                                type="email"
                                className="form-control email"
                                id="email"
                                placeholder="email@example.com"
                                minLength="9"
                                maxLength="50"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Пароль</label>
                            <input
                                type="password"
                                className="form-control password"
                                id="password"
                                placeholder="Введите пароль"
                                minLength="6"
                                maxLength="50"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password-repeat">Проверка пароля</label>
                            <input
                                type="password"
                                className="form-control password-repeat"
                                id="password-repeat"
                                placeholder="Повторите пароль"
                                minLength="6"
                                maxLength="50"
                                required
                            />
                        </div>
                        <div className="form-group remember">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                                <label className="form-check-label" htmlFor="dropdownCheck">
                                    Запомнить меня
                                </label>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-block mt-3">
                                <Pen />Зарегистрироваться
                            </button>
                        </div>
                    </form>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">Забыли пароль?</a>
                </div>
            </div>
        </div>
    )
};

export default PageContent;
