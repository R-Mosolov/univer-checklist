import React from 'react';
import './css/style.css';

const SiteContent = () => {
    return (
        <div className="registration">
            <div className="layout-positioner">
                <form className="px-4 py-3">
                    <h1 className="mt-4">Регистрация</h1>
                    <div className="form-group">
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
                    <button type="submit" className="btn btn-primary">Войти</button>
                </form>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">Забыли пароль?</a>
            </div>
        </div>
    )
};

export default SiteContent;