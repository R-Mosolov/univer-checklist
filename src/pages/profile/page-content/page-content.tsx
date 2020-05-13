import React from "react";

import User from "./img/user.svg";
import Content from "./img/content.svg";

const PageContent = () => {
  return (
    <div className="profile">
      <div className="container-fluid">
        <div className="row">
          <div className=" col-3">
            <h2 className="mt-4 text-center">Мой профиль</h2>
            <div className="d-flex justify-content-center">
              <img
                className="m-4"
                alt="Моя фотография"
                src={User}
                style={{ width: 200 + "px" }}
              />
            </div>
            <h3 className="text-center">Фамилия Имя Отчество</h3>
            <hr />
          </div>
          <div className="col-9">
            <div>
              <h2 className="m-4">Ранее пройденные проверки</h2>
              <div className="card-group row d-flex justify-content-around">
                <div
                  className="card-background card col-5 border rounded"
                  style={{ backgroundColor: "floralwhite" }}
                >
                  <div className="d-flex justify-content-center">
                    <img
                      src={Content}
                      className="card-img-top p-3"
                      alt="..."
                      style={{ width: 250 + "px" }}
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title text-center">
                      Результат 1-го тестирования
                    </h3>
                    <p className="card-text pb-3 text-center">
                      Количество набранных баллов: 12
                      <br />
                      Число рекомендаций для улучшения: 10
                    </p>
                    <div className="d-flex justify-content-center">
                      <button
                        className="btn"
                        onClick={() =>
                          alert(
                            "В настоящее время данная функция " +
                              "не работает. Вернитесь к ней, пожалуйста, позднее."
                          )
                        }
                      >
                        Посмотреть результат
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="card-background card col-5 border rounded"
                  style={{ backgroundColor: "floralwhite" }}
                >
                  <div className="d-flex justify-content-center">
                    <img
                      src={Content}
                      className="card-img-top p-3"
                      alt="..."
                      style={{ width: 250 + "px" }}
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title text-center">
                      Результат 2-го тестирования
                    </h3>
                    <p className="card-text pb-3 text-center">
                      Количество набранных баллов: 36
                      <br />
                      Число рекомендаций для улучшения: 3
                    </p>
                    <div className="d-flex justify-content-center">
                      <button
                        className="btn"
                        onClick={() =>
                          alert(
                            "В настоящее время данная функция " +
                              "не работает. Вернитесь к ней, пожалуйста, позднее."
                          )
                        }
                      >
                        Посмотреть результат
                      </button>
                    </div>
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

export default PageContent;
