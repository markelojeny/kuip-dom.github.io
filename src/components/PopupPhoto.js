import React from 'react';

function PopupPhoto(props) {

    return (
        <img className="photo__card_size_big" src={props.card.link || props.main} alt={props.card.name} />
    )
}

export default PopupPhoto;