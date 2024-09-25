import React from 'react';
import Cards from './Cards';
import { useLocation } from 'react-router-dom';
import PhotoCard from './PhotoCard';
import { House1, House2, House3, semidvorieCards } from '../utils/photo';
import { textHouse1, textHouse2, textHouse3, textSemidvorie } from '../utils/text'
import semidvorie1 from "../image/Semidvorie/итог_с+ш.svg";
import shablykinoh10 from "../image/Shablykino/House1/planirovka.JPG";
import shablykinoh20 from "../image/Shablykino/House2/planirovka.JPG";
import shablykinoh30 from "../image/Shablykino/House3/planirovka.JPG";


function Characteristics(props) {
    const location = useLocation();
    let characteristics;

    const [semidvories, setSemidvories] = React.useState([]);
    const [firstHouse, setFirstHouse] = React.useState([]);
    const [secondHouse, setSecondHouse] = React.useState([]);
    const [thirdHouse, setThirdHouse] = React.useState([]);
    const [textOfSemidvorie, setTextOfSemidvorie] = React.useState([]);
    const [textOfFirstHouse, setTextOfFirstHouse] = React.useState([]);
    const [textOfSecondHouse, setTextOfSecondHouse] = React.useState([]);
    const [textOfThirdHouse, setTextOfThirdHouse] = React.useState([]);

    React.useEffect(() => {
        setSemidvories(semidvorieCards);
        setFirstHouse(House1);
        setSecondHouse(House2);
        setThirdHouse(House3);
        setTextOfSemidvorie(textSemidvorie);
        setTextOfFirstHouse(textHouse1);
        setTextOfSecondHouse(textHouse2);
        setTextOfThirdHouse(textHouse3);
      }, []);

    if (location.pathname === '/kuip-dom.github.io/semidvorie') {
        characteristics = (
            <>
                <section id='Characteristic' className="characteristics">
                    <h3 className="content__title content__title_section_contact">Характеристики</h3>
                    <Cards texts={textOfSemidvorie} first={semidvorie1} photo={props.card} >
                        {semidvories.map((initialCards, i) => {
                            return <PhotoCard card={initialCards} key={initialCards.id} onCardClick={props.onCardClick}/>
                        })}
                    </Cards>
                </section>
            </>
        )
      } else {
        characteristics = (
            <>
                <section  id='Characteristic' className="characteristics">
                    <h3 className="content__title content__title_section_contact">Характеристики</h3>
                    <Cards texts={textOfFirstHouse} first={shablykinoh10} title="Дом Маленький" photo={props.firstcard} >
                        {firstHouse.map((initialCards, i) => {
                            return <PhotoCard card={initialCards} key={initialCards.id} onCardClick={props.onCardFirstClick}/>
                        })}
                    </Cards>
                    <Cards texts={textOfSecondHouse} first={shablykinoh20} title="Дом Средний" photo={props.secondcard} >
                        {secondHouse.map((initialCards, i) => {
                            return <PhotoCard card={initialCards} key={initialCards.id} onCardClick={props.onCardSecondClick}/>
                        })}
                    </Cards>
                    <Cards texts={textOfThirdHouse} first={shablykinoh30} title="Дом Большой" photo={props.thirdcard} >
                        {thirdHouse.map((initialCards, i) => {
                            return <PhotoCard card={initialCards} key={initialCards.id} onCardClick={props.onCardThirdClick}/>
                        })}
                    </Cards>
                </section>
            </>
          )
      } 
    return characteristics;
}

export default Characteristics;