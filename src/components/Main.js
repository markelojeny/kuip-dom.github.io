import React from 'react';
import semidvirie from '../image/semidvorie.png';
import shablykino from '../image/Shablykino/House1/Shablykino.jpeg';
import { useNavigate } from 'react-router-dom';

function Main() {
    const navigate = useNavigate();
    function handleClickSemidvorie() {
        navigate('/semidvorie');
    }

    function handleClickShablykino() {
        navigate('/shablykino-village');
    }

    return (
        <main className="main">
            <section className="houses">
                <div className="house">
                    <img className="house__foto" src={semidvirie}  onClick={handleClickSemidvorie} alt="Подождите немного и фотография загрузится" />
                    <div className="house__description">
                        <h2 className="house__title">Семидворье</h2>
                        <p className="house__text">Домики в Пушкинском районе Московской области. Вокруг лес, а также церкви.</p>
                    </div>
                    <button onClick={handleClickSemidvorie} className="house__buttom">Подробнее</button>
                </div>
                <div className="house">
                    <img className="house__foto" src={shablykino} onClick={handleClickShablykino} alt="Подождите немного и фотография загрузится"/>
                    <div className="house__description">
                        <h2 className="house__title">Шаблыкино Village</h2>
                        <p className="house__text">Уютные комфортные домики во Владимирской области.</p>
                    </div>
                    <button onClick={handleClickShablykino} className="house__buttom">Подробнее</button>
                </div>
            </section>
            <section className="developer">
                <h2 className="developer__title">О застройщике</h2>
                <div className="developer__descriptions">
                    <div className="developer__texts">
                        <p className="developer__text">Компания «Центр-2000» существует с 1988 года, а с 1991 года она вышла на рынок недвижимости. </p>
                        <p className="developer__text">В настоящее время Компания осуществляет управление строительными  проектами,  расположенными в г. Москве и  Московской области.</p>
                        <p className="developer__text">С 1991 года Компания приняла активное участие в реализации более 20 инвестиционных проектов самого разнообразного назначения, включая строительство жилой и коммерческой недвижимости.</p>
                    </div>
                <div className="developer__texts">
              <p className="developer__text">Имея необходимый опыт, Компания «Центр-2000» способна обеспечить весь цикл инвестиционного строительного проекта собственными ресурсами.</p>
              <p className="developer__text">Компания «Центр-2000» за годы своей профессиональной деятельности на рынке недвижимости была отмечена многочисленными наградами. Руководство фирмы «Центр-2000» удостоено званий «Заслуженный строитель России» и «Почетный строитель Москвы».</p>
              <p className="developer__text">Фирма неоднократно получала Дипломы Правительства Москвы по результатам конкурсов — за лучшую реконструкцию и строительство в исторической части Москвы.</p>
            </div>
          </div>
        </section>
      </main>
    )
}

export default Main;