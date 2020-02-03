import React from 'react';

import './css/desktop.css';
import './css/tablet-and-mobile.css';

import { ReactComponent as Banner } from './img/development.svg';

const PageContent = () => {
    return (
        <div className="results">
            <div className="layout-positioner">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="banner mt-5">
                        <div className="banner__container">
                            <div className="banner__development"><Banner style={{width: 300 + 'px'}} /></div>
                        </div>
                    </div>
                    <div className="description">
                        <p className="text-center">
                            К сожалению, страница находится в процессе разработки. Посетите её, пожалуйста, позднее.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PageContent;
