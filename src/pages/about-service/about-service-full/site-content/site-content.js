import React from 'react';

import './css/desktop.css';
import './css/tablet-and-mobile.css';
import './js/progress-bar';

import { ReactComponent as Banner } from './img/scholarship.svg';
import Introduction from './blocks/introduction';
import Concepts from './blocks/concepts';
import Value from './blocks/value/value';
import Direction from './blocks/direction/direction';
import FootnoteLiterature from './blocks/footnote-literature';

const SiteContent = () => {
  return (
    <div className="about-service-full">
      <div className="layout-positioner">
        <div className="banner">
          <h1>
            Подробно о сервисе <br />
            «University Checklist»
          </h1>
          <div className="banner__container">
            <div className="banner__books">
              <Banner />
            </div>
          </div>
        </div>
        <div className="description">
          <Introduction />
          <Concepts />
          <Value />
          <Direction />
          <FootnoteLiterature />
        </div>
      </div>
    </div>
  );
};

export default SiteContent;
