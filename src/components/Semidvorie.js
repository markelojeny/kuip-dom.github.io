import React from 'react';
import About from './About';
import Characteristics from './Characteristics';
import Destination from './Destination';
import Contact from './Contact';
import Contant from './Contant';
import shablykino from "../image/forest.svg";
import semidvorie from "../image/House2.png";
import { useLocation } from 'react-router-dom';

function Semidvorie(props) {
    const [selectedCard, setSelectedCard] = React.useState({ });
    const [selectedFirstCard, setSelectedFirstCard] = React.useState({ });
    const [selectedSecondCard, setSelectedSecondCard] = React.useState({ });
    const [selectedThirdCard, setSelectedThirdCard] = React.useState({ });

    const location = useLocation();
    let second__page;

    function handleCardClick(card) { 
        setSelectedCard(card);
    }

    function handleCardFirstClick(card) { 
        setSelectedFirstCard(card);
    }

    function handleCardSecondClick(card) { 
        setSelectedSecondCard(card);
    }

    function handleCardThirdClick(card) { 
        setSelectedThirdCard(card);
    }

    if (location.pathname === '/semidvorie') {
        second__page = (
            <>
                <main className="content">
                    <Contant className="content__main_house_semidvorie" title="Семидворье" />
                    <About 
                        text="Мы предлагаем 7 одинаковых домов в Московской области в Пушкинскм районе. В округе в пешей доступности есть церкви, а также лес. Данный дом прекрасно подойдет для семейного отдыха, а также как дом, в котором можно проживать на протяжении круглого года" 
                        photo={semidvorie} />
                    <Characteristics card={selectedCard} onCardClick={handleCardClick}/>
                    <Contact onSendMail={props.onMail} />
                    <Destination />
                </main>
            </>
        )
      } else {
        second__page = (
            <>
                <main className="content">
                    <Contant className="content__main_house_shablykino" title="Шаблыкино Village"/>
                    <About 
                    text="Мы предлагаем 7 одинаковых домов в Московской области в Пушкинскм районе. В округе в пешей доступности есть церкви, а также лес. Данный дом прекрасно подойдет для семейного отдыха, а также как дом, в котором можно проживать на протяжении круглого года" 
                    photo={shablykino}/>
                    <Characteristics 
                        firstcard={selectedFirstCard} 
                        secondcard={selectedSecondCard} 
                        thirdcard={selectedThirdCard} 
                        onCardFirstClick={handleCardFirstClick} 
                        onCardSecondClick={handleCardSecondClick} 
                        onCardThirdClick={handleCardThirdClick}/>
                    <Destination />
                </main>
            </>
          )
      } 
    return second__page;
}

export default Semidvorie;