import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import './js/progress-bar';
import { ReactComponent as Banner } from './img/scholarship.svg';

import Introduction from './blocks/introduction';
import Concepts from './blocks/concepts';
import Value from './blocks/value';
import FirstTable from './blocks/first-table';
import SecondTable from './blocks/second-table';
import Direction from './blocks/direction';
import FootnoteLiterature from './blocks/footnote-literature';

const SiteContent = () => {
    return (
        <div className="about-service-full">
            <div className="layout-positioner">
                <div className="banner">
                    <h1>Подробно о сервисе <br/>«University Checklist»</h1>
                    <div className="banner__container">
                        <div className="banner__books"><Banner /></div>
                    </div>
                </div>
                <div className="description">
                    <Introduction />
                    <Concepts />
                    <Value />
                    <FirstTable />
                    <SecondTable />
                    <Direction />
                    <FootnoteLiterature />
                </div>
            </div>
        </div>
    )
};

export default SiteContent;