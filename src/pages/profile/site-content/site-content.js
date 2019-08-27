import React from 'react';

import { ReactComponent as Banner } from './img/development.svg';
import User from './img/user.svg';
import Content from './img/content.svg';

const SiteContent = () => {
  return (
    <div className="profile">
      <div className="container-fluid">
        <div className="row">
          <div className="col-4 vh-100 shadow-sm">
            <h2 className="mt-4 text-center text-black-50">Мой профиль</h2>
            <img className="m-4" alt="Моя фотография" src={User} />
            <h3 className="text-center text-black-50">Фамилия Имя Отчество</h3>
          </div>
          <div className="col-8">
            <div className="">
              <h2 className="m-4 text-black-50">Ранее пройденные проверки</h2>
              <div className="card-group row d-flex justify-content-around">
                <div className="card col-5 border-0 shadow-sm">
                  <img src={Content} className="card-img-top p-3" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
                <div className="card col-5 border-0 shadow-sm">
                  <img src={Content} className="card-img-top p-3" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteContent;
