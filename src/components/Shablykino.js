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
                <img className="photo__card_size_big" onClick={handleClickFirst} src={shablykinoh10} alt="Готовые дома в стиле Барнхаус" />
            </div>
            <div className="option">
                <p className="option__description">Лесные и равнинные Участки с подрядом (аккредитованный в Банках подрядчик)</p>
                <img className="photo__card_size_big" onClick={handleClickSecond} src={shablykinoh20} alt="Лесные и равнинные Участки с подрядом" />
            </div>
            <div className="option">
                <p className="option__description">Лесные и равнинные Участки без подряда</p>
                <img className="photo__card_size_big" onClick={handleClickThird} src={shablykinoh30} alt="Лесные и равнинные Участки без подряда" />
            </div>
        </section>
    )
}

export default Shablykino;

/* <Cards 
                    texts={textOfFirstHouse} 
                    first={shablykinoh10}
                    feature={textOfFeature}
                    title="Дом Маленький" 
                    photo={props.firstcard} >
                        {firstHouse.map((initialCards, i) => {
                            return <PhotoCard card={initialCards} key={initialCards.id} onCardClick={props.onCardFirstClick}/>
                        })}
                    </Cards>
                    <Cards 
                    texts={textOfSecondHouse} 
                    first={shablykinoh20} 
                    title="Дом Средний"
                    feature={textOfFeature}
                    photo={props.secondcard} >
                        {secondHouse.map((initialCards, i) => {
                            return <PhotoCard card={initialCards} key={initialCards.id} onCardClick={props.onCardSecondClick}/>
                        })}
                    </Cards>
                    <Cards 
                    texts={textOfThirdHouse} 
                    first={shablykinoh30} 
                    title="Дом Большой" 
                    feature={textOfFeature}
                    photo={props.thirdcard} >
                        {thirdHouse.map((initialCards, i) => {
                            return <PhotoCard card={initialCards} key={initialCards.id} onCardClick={props.onCardThirdClick}/>
                        })}
                    </Cards> */