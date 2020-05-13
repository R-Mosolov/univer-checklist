import React from "react";

import "./css/desktop.css";
import "./css/tablet-and-mobile.css";

import { ReactComponent as Banner } from "./img/scholarship.svg";

const PageContent = () => {
  return (
    <div className="about-service-base">
      <div className="layout-positioner">
        <div className="flex-container">
          <div className="banner">
            <h1>
              Кратко о сервисе <br />
              «University Checklist»
            </h1>
            <div className="banner__container">
              <div className="banner__books">
                <Banner />
              </div>
            </div>
          </div>
          <div className="description">
            <p>
              В рамках настоящей работы будет впервые описана и предложена к
              рассмотрению концепция компьютерной программы, которая позволит
              стандартизировать процесс оценивания курсовых и дипломных работ,
              экономить время преподавателей на исправлении повторяющихся,
              типичных ошибок студентов, а также частично дополнит
              функциональные возможности программы «Антиплагиат».
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContent;
