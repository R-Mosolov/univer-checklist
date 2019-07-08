import React from 'react';
import './css/style.css';
import { ReactComponent as Banner } from "./img/development.svg";

const SiteContent = () => {
    return (
        <div className="profile">
            <div className="layout-positioner">
                <div className="banner mt-5">
                    <div className="banner__container">
                        <div className="banner__development"><Banner /></div>
                    </div>
                </div>
                <div className="description">
                    <p className="text-center">
                        К сожалению, страница находится в процессе разработки. Посетите её, пожалуйста, позднее.
                    </p>
                </div>
            </div>
        </div>
    )
};

export default SiteContent;