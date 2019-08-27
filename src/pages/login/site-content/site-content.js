import React from 'react';

import './css/desktop.css';
import './css/tablet-and-mobile.css';

const SiteContent = () => {
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
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="dropdownCheck"
                />
                <label className="form-check-label" htmlFor="dropdownCheck">
                  Запомнить меня
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Войти
            </button>
          </form>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#">
            Забыли пароль?
          </a>
        </div>
      </div>
    </div>
  );
};

export default SiteContent;
