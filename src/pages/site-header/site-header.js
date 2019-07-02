import React from 'react';
import { Link } from 'react-router-dom';

const SiteHeader = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">University Checklist</Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/login">Войти</Link>
                    </li>
                    <li className="nav-item">
                     <Link className="nav-link" to="/about-service">О сервисе</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/profile">Личный профиль</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/results">Результаты проверок</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/checklist">Проверить работу</Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Что искать?" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Найти</button>
                </form>
            </div>
        </nav>
    )
};

export default SiteHeader;