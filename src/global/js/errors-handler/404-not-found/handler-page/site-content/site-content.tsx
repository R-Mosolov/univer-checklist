import React from 'react';
import { Link } from 'react-router-dom';

import './css/desktop.css';
import './css/tablet-and-mobile.css';

import { ReactComponent as Banner } from './img/404.svg';

const SiteContent = () => {
  return (
    <div className="not-found">
      <div className="layout-positioner">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="banner mt-5">
            <div className="banner__container">
              <div className="banner__not-found">
                <Banner style={{ width: 300 + 'px' }} />
              </div>
            </div>
          </div>
          <div className="description">
            <p className="text-center">
              К сожалению, такая страница не существует. Вы можете вернуться на
              домашнюю страницу.
            </p>
          </div>
          <Link className="get-recommendation btn text-center" to="/">
            Вернуться домой
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SiteContent;
