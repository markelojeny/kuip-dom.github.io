import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import Contact from './Contact';
import sendOk from "../image/ok.svg";
import sendNotOk from "../image/not_ok.svg";
import InfoTooltip from './InfoTooltip';
import ShablykinoPopup from './ShablykinoPopup';
import ForestPopup from './ForestPopup';
import NotForestPopup from './NotForestPopup';
import api from "../utils/api"; 
import { House1, Forest, Notforest } from '../utils/photo';

function App() {
  const navigate = useNavigate();
  const [popupText, setPopupText] = React.useState("");
  const [popupImage, setPopupImage] = React.useState("");
  const [isGoodRegister, setIsGoodRegister] = React.useState(false);
  const [isContact, setIsContact] = React.useState(false);
  const [isPhoto, setIsPhoto] = React.useState(false);
  const [isSecondPhoto, setIsSecondPhoto] = React.useState(false);
  const [isThirdPhoto, setIsThirdPhoto] = React.useState(false);


  const [selectedFirstCard, setSelectedFirstCard] = React.useState({ });
  const [selectedSecondCard, setSelectedSecondCard] = React.useState({ });
  const [selectedThirdCard, setSelectedThirdCard] = React.useState({ });

  const [firstHouse, setFirstHouse] = React.useState([]);
  const [secondHouse, setSecondHouse] = React.useState([]);
  const [thirdHouse, setThirdHouse] = React.useState([]);

  React.useEffect(() => {
    setFirstHouse(House1);
    setSecondHouse(Forest);
    setThirdHouse(Notforest);
  }, []);

  function handleCardFirstClick(card) { 
    setSelectedFirstCard(card);
  }

  function handleCardSecondClick(card) { 
    setSelectedSecondCard(card);
  }

  function handleCardThirdClick(card) { 
    setSelectedThirdCard(card);
  }

  function handleGoodClick() { 
    setIsGoodRegister(true);
  }

  function handleContact() {
    setIsContact(true);
  }

  function handlePhoto() {
    setIsPhoto(true);
    setFirstHouse(House1);
  }

  function handleSecondPhoto() {
    setIsSecondPhoto(true);
    setSecondHouse(Forest);
  }

  function handleThirdPhoto() {
    setIsThirdPhoto(true);
    setThirdHouse(Notforest);
  }

  function handleClose() {
    setIsContact(false);
    setIsPhoto(false);
    setIsSecondPhoto(false);
    setIsThirdPhoto(false);
  }

  const closePopup = function() {
    setIsGoodRegister(false); 
  }

  function handleSendMail(fio, mail, tel) {
    console.log(fio, mail, tel);
    api.register(fio, mail, tel)
    .then(() => {
        setIsContact(false);
        setPopupImage(sendOk);
        setPopupText("Заявка отправлена!");
        navigate('/', {replace: true});
    })
    .catch(() => {
        setPopupImage(sendNotOk);
        setPopupText("Что-то пошло не так! Попробуйте ещё раз."); 
    }) 
    .finally(handleGoodClick);
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FirstPage onButtonClick={handleContact} />} />
        <Route path="/semidvorie" element={<SecondPage onButtonClick={handleContact} />} />
        <Route path="/shablykino-village" element={<SecondPage 
          firstcard={firstHouse}
          secondcard={secondHouse}
          thirtcard={thirdHouse}
          onPhotoClick={handlePhoto} 
          onSecondPhotoClick={handleSecondPhoto} 
          onThirdPhotoClick={handleThirdPhoto} 
          onButtonClick={handleContact} />} />
      </Routes>
      <InfoTooltip name="register" forms="register" text={popupText} scr={popupImage} onClose={closePopup} isOpen={isGoodRegister} />
      <Contact name="contact" forms="contact" onSendMail={handleSendMail} onClose={handleClose} isOpen={isContact} />
      <ShablykinoPopup 
        onClose={handleClose} 
        isOpen={isPhoto}
        card={selectedFirstCard}
        onCardClick={handleCardFirstClick} />
      <ForestPopup 
        onClose={handleClose} 
        isOpen={isSecondPhoto}
        card={selectedSecondCard}
        onCardClick={handleCardSecondClick} />
      <NotForestPopup 
        onClose={handleClose} 
        isOpen={isThirdPhoto}
        card={selectedThirdCard}
        onCardClick={handleCardThirdClick} />
  </div>
  );
}

export default App;
