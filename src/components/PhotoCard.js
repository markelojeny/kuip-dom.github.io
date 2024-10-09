import React from 'react';

function PhotoCard(props) {
    
    function handleClick() { 
        props.onCardClick(props.card);
        console.log(props.card)
    }

    return (
        <>
            
            <img onClick={handleClick} className={props.className} src={props.card.link} alt={props.card.name} />
                          
        </>
    )
}

export default PhotoCard;