import React from 'react';
import { Link } from "react-router-dom";

import './css/desktop.css';
import './css/tablet-and-mobile.css';

import { saveInLocalStorage } from './js/save-in-local-storage';

const PageContent = () => {
    return (
        <div className="login">
            <div className="container__position d-flex justify-content-center align-items-center">
                <div className="layout-positioner">
                    <form className="px-4 py-3">
                        <h1 className="hide-header">Вход в систему</h1>
                        <div className="form-group">
                            <label htmlFor="email">Email (электронная почта)</label>
                            <input
                                type="email"
                                className="login__email form-control email"
                                id="email"
                                placeholder="email@example.com"
                                minLength="9"
                                maxLength="50"
                                onChange={ saveInLocalStorage }
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
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                                <label className="form-check-label" htmlFor="dropdownCheck">
                                    Запомнить меня
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="login__button btn btn-block">Войти</button>
                    </form>
                    <div className="dropdown-divider" />
                    <Link to="/login">
                        <a className="dropdown-item" href="/" onClick={() => alert('В настоящее время данная функция ' +
                            'не работает. Вернитесь к ней, пожалуйста, позднее.')}>Забыли пароль?</a>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default PageContent;
