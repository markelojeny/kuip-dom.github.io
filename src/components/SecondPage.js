import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Semidvorie from './Semidvorie';
import '../blocks/Semidvorie.css';

function SecondPage(props) {
    return (
        <>
            <Header onButtonClick={props.onButtonClick} />
            <Semidvorie 
            onPhotoClick={props.onPhotoClick} 
            onSecondPhotoClick={props.onSecondPhotoClick} 
            onThirdPhotoClick={props.onThirdPhotoClick}/>
            <Footer />
        </>
    )
}

export default SecondPage;