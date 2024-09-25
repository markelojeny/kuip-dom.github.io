import React from 'react';

function Contant(props) {

    return (
        <section className={props.className}>
            <h3 className="content__name">{props.title}</h3>
        </section>
    )
}

export default Contant;