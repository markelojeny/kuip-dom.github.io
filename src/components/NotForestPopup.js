import React from 'react';
import { Notforest } from '../utils/photo';
import PhotoCard from './PhotoCard';
import shablykinoh10 from "../image/Shablykino/House1/planirovka.JPG";

function NotForestPopup(props) {
    const className = `popup popup_type_image ${props.isOpen ? "popup_opened" : ""}`

    const [notForest, setNotForest] = React.useState([]);

    React.useEffect(() => {
        setNotForest(Notforest);
    }, []);

    return (
        <div className={className}>
            <div className="popup__container popup__container_type_image">
            <div className="popup__figure">
                <button className="popup__button-close" type="button" onClick={props.onClose}/>
                <img className="popup__picture" src={props.card.link || shablykinoh10} />
            </div>
            <div className="photo__cards photo__cards_type_shablykino">
                {notForest.map((initialCards, i) => {
                    return <PhotoCard card={initialCards} key={initialCards.id} onCardClick={props.onCardClick} className="popup__card_size_small"/>
                })}
            </div>
            </div>
        </div>
    )
}

export default NotForestPopup;

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