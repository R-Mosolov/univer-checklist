import React from 'react';
import { Link } from 'react-router-dom';

import '../css/style.css';
import './css/desktop.css';
import './css/tablet-and-desktop.css';

import menuBurger from './js/menu-burger';
import { runNightMode } from '../js/night-mode/night-mode';

const SiteHeader = () => {
    return (
        <div className="site-header">
            <nav className="navbar navbar-expand-xl navbar-light bg-light shadow-sm">
                <Link className="navbar-brand" to="/">University Checklist</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={menuBurger}>
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/registration">Регистрация</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Войти</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" role="button"
                               aria-haspopup="true" aria-expanded="false">О сервисе</a>
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" to="/about-service-base">Кратко</Link>
                                <Link className="dropdown-item" to="/about-service-full">Подробно</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile">Личный профиль</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/results">Результаты проверок</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/checklist-block-1">Проверить работу</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <button
                            id="night-mode"
                            className="night-mode btn my-2 my-sm-0"
                            type="button"
                            onClick={runNightMode}>
                            Ночной режим
                        </button>
                    </form>
                </div>
            </nav>
        </div>
    )
};

export default SiteHeader;