import React from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Characteristics from './Characteristics';
import Destination from './Destination';
import Contant from './Contant';
import semidvorie from "../image/House2.png";

function SemidvoriePage(props) {
    const [selectedCard, setSelectedCard] = React.useState({ });

    function handleCardClick(card) { 
        setSelectedCard(card);
    }

    return (
        <>
            <Header onButtonClick={props.onButtonClick} />
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
            <Footer />
        </>
    )
}

export default SemidvoriePage;