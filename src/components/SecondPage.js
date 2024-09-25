import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Semidvorie from './Semidvorie';
import '../blocks/Semidvorie.css';

function SecondPage(props) {
    return (
        <>
            <Header>
                <nav className="nav">
                    <a className="nav__link" href="#Project">О проекте</a>
                    <a className="nav__link" href="#Characteristic">Характеристики</a>
                    <a className="nav__link" href="#Contact">Контакты</a>
                </nav>
            </Header>
            <Semidvorie onMail={props.onSendMale}/>
            <Footer />
        </>
    )
}

export default SecondPage;