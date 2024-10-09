import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import '../blocks/FirstPage.css';

function FirstPage(props) {
    return (
        <div>
            <Header onButtonClick={props.onButtonClick} />
            <Main />
            <Footer />
      </div>
    )
}

export default FirstPage;