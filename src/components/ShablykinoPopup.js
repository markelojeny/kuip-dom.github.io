import React from 'react';
import { House1 } from '../utils/photo';
import PhotoCard from './PhotoCard';
import shablykinoh10 from "../image/Shablykino/House1/IMG_3057.jpg";

function ShablykinoPopup(props) {
    const className = `popup popup_type_image ${props.isOpen ? "popup_opened" : ""}`

    const [houses, setHouses] = React.useState([]);

    React.useEffect(() => {
        setHouses(House1);
    }, []);

    return (
        <div className={className}>
            <div className="popup__container popup__container_type_image">
            <figure className="popup__figure">
                <button className="popup__button-close" type="button" onClick={props.onClose}/>
                <figcaption className="popup__title popup__title_type_image">{props.card.name}</figcaption>
                <img className="popup__picture" src={props.card.link || shablykinoh10} />
            </figure>
            <div className="photo__cards photo__cards_type_shablykino">
                {houses.map((initialCards, i) => {
                    return <PhotoCard card={initialCards} key={initialCards.id} onCardClick={props.onCardClick} className="popup__card_size_small"/>
                })}
            </div>
            </div>
        </div>
    )
}

export default ShablykinoPopup;

/*<figure className="popup__container popup__container_type_image">
          <button className="popup__button-close" type="button" onClick={props.onClose}/>
          <img className="popup__picture" src={props.card.link} alt={props.card.name}/>
          <figcaption className="popup__title popup__title_type_image">{props.card.name}</figcaption>
        </figure>
        
        <div className="photo__cards">
            {thirdHouse.map((initialCards, i) => {
                return <img className="photo__card_size_small" src={initialCards.link} alt={initialCards.name} key={initialCards.id}/>
            })}
        </div>*/