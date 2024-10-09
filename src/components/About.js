import React from 'react';

function About(props) {

    return (
        <section className="about">
            <p className="about__text">{props.text}</p>
        </section>
    )
}

export default About;