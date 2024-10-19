import React from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Destination from './Destination';
import Contant from './Contant';
import Shablykino from './Shablykino';
import Payment from './Payment';
import shablykino from "../image/forest.svg";

function ShablykinoPage(props) {

    return (
        <>
            <Header onButtonClick={props.onButtonClick} />
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
            <Footer />
        </>
    )
}

export default ShablykinoPage;