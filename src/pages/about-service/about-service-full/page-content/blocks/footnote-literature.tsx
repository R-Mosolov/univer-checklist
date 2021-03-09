import React from 'react';
import '../css/desktop.css';

const FootnoteLiterature = () => {
  return (
    <div>
      <h2 className="text-center font-weight-bold text-uppercase">
        Примечания
      </h2>
      <p className="mt-3 mb-0 text-justify">
        * В пер. на англ. «best practices», понятие впервые внедренное в России
        И.Л. Викентьевым, автором нескольких экспертных информационных систем
        (направление инженерии знаний) и бизнес-консультантом ряда международных
        компаний. Смысловым наполнением понятия «best practices» является
        приобщение сотрудников-«троечников» (не профессионалов) к опыту
        сотрудников-«отличников» (профессионалов), то есть к применению наиболее
        эффективных технологий. По словам И.Л. Викентьева, подобные системы
        проверки (в пер. на англ. «check list») широко используются в крупных
        российских и международных компаниях, например, «McDonald’s».
      </p>
      <p className="mt-3 text-justify">
        ** Технически это можно реализовать через подмену кодировки информации
        при ее копировании (текст из «непонятных символов»); рандомизации
        текстов примеров; установке таймера (например, 1 мин.), по истечении
        которого Студент будет видеть новый текст, таким образом будет
        минимизирована возможность его перепечатать; и т.д.
      </p>
      <h2 className="text-center font-weight-bold text-uppercase">
        Источники и литература
      </h2>
      <p className="mt-3 mb-0 text-justify">
        1. Киян И.В. Принципы автоматизации и управления технологическими
        процессами в сфере образования // Энергобезопасность и энергосбережение.
        2009. №4. С. 43-47.
      </p>
      <p className="mt-3 mb-0 text-justify">
        2. Коменский Я.А. Избранные педагогические сочинения в 2-х томах. Т.1. –
        М.: Педагогика, 1982. – 656 с. – (Пед. б-ка).
      </p>
      <p className="mt-3 mb-0 text-justify">
        3. Открытая база выпускных квалификационных работ студентов НИУ ВШЭ //
        URL:
        <a href="https://www.hse.ru/edu/vkr/" rel="noopener noreferrer">
          https://www.hse.ru/edu/vkr/
        </a>{' '}
        (дата обращения: 29.05.2019).
      </p>
      <p className="mt-3 mb-0 text-justify">
        4. Регламент о балльно-рейтинговой системе оценки знаний обучающихся в
        федеральном государственном автономном образовательном учреждении
        высшего профессионального образования «Казанский (Приволжский)
        федеральный университет» (в редакции принятой Учебно-методическим
        советом от 27 апреля 2012 года, протокол №2).
      </p>
      <p className="last-paragraph mt-3 pb-5 text-justify">
        5. GfK. Проникновение Интернета в России (пресс-релиз) [Электронный
        ресурс] // URL:{' '}
        <a
          href={
            'https://www.gfk.com/fileadmin/user_upload/dyna_content/RU/' +
            'Documents/Press_Releases/2018/GfK_Rus_Press_Release_Internet_' +
            'Penetration_in_Russia_2017-2018.pdf'
          }
          rel="noopener noreferrer"
        >
          https://www.gfk.com/fileadmin/user_upload/dyna_
          <br />
          content/RU/Documents/Press_Releases/2018
          /GfK_Rus_Press_Release_Internet_Penetration
          <br />
          _in_Russia_2017-2018.pdf
        </a>{' '}
        (дата обращения: 30.05.2019).
      </p>
    </div>
  );
};

export default FootnoteLiterature;
