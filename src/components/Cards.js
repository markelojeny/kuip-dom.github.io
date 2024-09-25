import React from 'react';
import PopupPhoto from './PopupPhoto';

function Cards(props) {
    

    return (
        <>
            <h4 className="characteristics__title">{props.title}</h4>
            <div className="characteristic">
                    <div className="characteristic__cards">
                    <PopupPhoto main={props.first} card={props.photo} />
                        <div className="photo__cards">
                            {props.children}
                        </div>
                    </div>
                    <div className="characteristic__texts">
                        {props.texts.map((initialCards, i) => {
                            return <p key={initialCards.id} className="characteristic__text">{initialCards.text}</p>
                        })}
                    </div>
            </div>
        </>
    )
}

export default Cards;