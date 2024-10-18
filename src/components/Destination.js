import React from 'react';

function Destination(props) {

    return (
        <section className='about'>
                <div className="destination">
                    <h3 className="content__title">{props.title}</h3>
                    <div className="destination__information">
                    <div className='destination__description'>
                        <h4 className='destination__title'>Своим ходом</h4>
                        <p className="destination__text">{props.foot}</p>
                    </div>
                    <div className='destination__description'>
                        <h4 className='destination__title'>На машине</h4>
                        <p className="destination__text">{props.car}</p>
                    </div>
                    </div>
                </div>
                <iframe className="destination__foto" title={props.iframe} src="https://yandex.ru/map-widget/v1/?um=constructor%3A4a41f52235f7426d769f21bbc86e8b0705f0c9c647f815537046bf65cb7b98e9&amp;source=constructor"></iframe>
            </section>
    )
}

export default Destination;