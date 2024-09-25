import React from 'react';

function About(props) {

    return (
        <section id='Project' className="about">
                <div className="about__description">
                    <h3 className="content__title">О проекте</h3>
                    <p className="about__text">{props.text}</p>
                </div>
                <img className="about__foto" src={props.photo} alt="Подождите немного и фотография загрузится" />
        </section>
    )
}

export default About;