import React from 'react';
import shablykinoh10 from "../image/Shablykino/House1/IMG_3057.jpg";
import shablykinoh20 from "../image/Shablykino/Forest/IMG_3067.jpg";
import shablykinoh30 from "../image/Shablykino/Notforest/IMG_5524.jpg";

function Shablykino(props) {

    function handleClickFirst() { 
        props.onCardFirstClick(props.firstcard); 
    }

    function handleClickSecond() { 
        props.onCardSecondClick(props.secondcard);
    }

    function handleClickThird() { 
        props.onCardThirdClick(props.thirtcard);
    }

    return (
        <section className="options">
            <div className="option">
                <p className="option__description">Готовые дома в стиле Барнхаус (полная комлектация с мебелью)</p>
                <img className="option__photo" onClick={handleClickFirst} src={shablykinoh10} alt="Готовые дома в стиле Барнхаус" />
            </div>
            <div className="option">
                <p className="option__description">Лесные и равнинные Участки с подрядом (аккредитованный в Банках подрядчик)</p>
                <img className="option__photo" onClick={handleClickSecond} src={shablykinoh20} alt="Лесные и равнинные Участки с подрядом" />
            </div>
            <div className="option">
                <p className="option__description">Лесные и равнинные Участки без подряда</p>
                <img className="option__photo" onClick={handleClickThird} src={shablykinoh30} alt="Лесные и равнинные Участки без подряда" />
            </div>
        </section>
    )
}

export default Shablykino;