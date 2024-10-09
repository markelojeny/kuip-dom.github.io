import React from 'react';
import Cards from './Cards';
import PhotoCard from './PhotoCard';
import { semidvorieCards } from '../utils/photo';
import { textSemidvorie, textSemidvorie2 } from '../utils/text'
import semidvorie1 from "../image/Semidvorie/итог_с+ш.svg";


function Characteristics(props) {

    const [semidvories, setSemidvories] = React.useState([]);
    const [textOfSemidvorie, setTextOfSemidvorie] = React.useState([]);
    const [textOfFeature, setTextOfFeature] = React.useState([]);

    React.useEffect(() => {
        setSemidvories(semidvorieCards);
        setTextOfSemidvorie(textSemidvorie2);
        setTextOfFeature(textSemidvorie);
    }, []);

    return (
        <section className="characteristics">
                    <h3 className="content__title">Характеристики</h3>
                    <Cards 
                    texts={textOfSemidvorie} 
                    first={semidvorie1} 
                    photo={props.card}
                    feature={textOfFeature} >
                        {semidvories.map((initialCards, i) => {
                            return <PhotoCard card={initialCards} key={initialCards.id} onCardClick={props.onCardClick} className="photo__card_size_small"/>
                        })}
                    </Cards>
                </section>
    )
}

export default Characteristics;