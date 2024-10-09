import React from 'react';
import PopupPhoto from './PopupPhoto';

function Cards(props) {
    

    return (
        <>
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
                    <div className='feature'>
                        <h3 className='feature__title'>Особенности</h3>
                        <div className='feature__texts'>
                            {props.feature.map((initialCards, i) => {
                                return <p key={initialCards.id} className="feature__text">{initialCards.text}</p>
                            })}
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Cards;