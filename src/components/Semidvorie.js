import React from 'react';
import About from './About';
import Characteristics from './Characteristics';
import Destination from './Destination';
import Contant from './Contant';
import Shablykino from './Shablykino';
import Payment from './Payment';
import shablykino from "../image/forest.svg";
import semidvorie from "../image/House2.png";
import { useLocation } from 'react-router-dom';

function Semidvorie(props) {
    const [selectedCard, setSelectedCard] = React.useState({ });

    const location = useLocation();
    let second__page;

    function handleCardClick(card) { 
        setSelectedCard(card);
    }

    if (location.pathname === '/kuip-dom.github.io/semidvorie') {
        second__page = (
            <>
                <main className="content">
                    <Contant className="content__main_house_semidvorie" title="Семидворье" />
                    <About 
                        text="Комплекс Семидворье - это 7 домов с видом разрешенного использования ИЖС, построенных в единой концепции. Создает идеальную среду для гармоничной жизни, а развитая инфраструктура обеспечивают высокий комфорт для жителей. Единый архитектурный стиль с индивидуальными фасадными решениями, станут прекрасным украшением природного ландшафта." 
                        photo={semidvorie} />
                    <Characteristics card={selectedCard} onCardClick={handleCardClick}/>
                    <Destination 
                        iframe='semidvorie'
                        title='Как дообраться до комплекса "Семидворье"?'
                        foot="На электричке от Ярославского вокзала до станции Зеленоградская. От неё Семидворья пешком 15 минут либо можно воспользоваться недорогим такси"
                        car="Московская область, Пушкинский район, дп Зеленоградский, ул. Славянская 11" />
                </main>
            </>
        )
      } else {
        second__page = (
            <>
                <main className="content">
                    <Contant className="content__main_house_shablykino" title="Шаблыкино Village"/>
                    <About 
                    text="Комплекс Шаблыкино Village - 3-я очередь реализуемого Компанией «Центр-2000» проекта в деревне Шаблыкино Александровского района Владимирской области. Дома на территории построены в стилях ЭКО и барнхаус, прекрасно вписываются в окружающую среду. В Шаблыкино Village вы можете приобрести готовые дома в стиле Барнхаус 32-55 кв.м.,  участки без подряда от 8 соток, а также участки  с подрядом (строительство дома по вашим индивидуальным пожеланиям, в том числе проект, материал изготовления (каркасный, модульный, из газобетонных блоков), отделка внешняя и внутренняя и так далее). Статус: Дереня. Вид разрешенного использования: Индивидуальное жилищное строительство (ИЖС)" 
                    photo={shablykino}/>
                    <Shablykino
                        firstcard={props.firstcard}
                        secondcard={props.secondcard}
                        thirtcard={props.thirtcard}
                        onCardFirstClick={props.onPhotoClick} 
                        onCardSecondClick={props.onSecondPhotoClick} 
                        onCardThirdClick={props.onThirdPhotoClick} />
                    <Payment />
                    <Destination
                    iframe='shablykino'
                    title="Как добраться до комплекса Шаблыкино Village?"
                    foot="На электричке до станции Струнино от Ярославского вокзала. От неё до Шаблкино ходит рейсовый автобус пять раз в день. Либо можно воспользоваться недорогим такси"
                    car="Владимирская область, Александровский р-н, Каринское МО, ДПК Шаблыкино-3 " />
                </main>
            </>
          )
      } 
    return second__page;
}

export default Semidvorie;