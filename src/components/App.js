import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import sendOk from "../image/ok.svg";
import sendNotOk from "../image/not_ok.svg";
import InfoTooltip from './InfoTooltip';
import api from "../utils/api"; 

function App() {
  const navigate = useNavigate();
  const [popupText, setPopupText] = React.useState("");
  const [popupImage, setPopupImage] = React.useState("");
  const [isGoodRegister, setIsGoodRegister] = React.useState(false);

  function handleGoodClick() { 
    setIsGoodRegister(true) 
  }

  const closePopup = function() {
    setIsGoodRegister(false); 
  }

  function handleSendMail(fio, mail, tel) {
    console.log(fio, mail, tel);
    api.register(fio, mail, tel)
    .then(() => {
        console.log(fio, mail, tel);
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
        <Route path="/kuip-dom.github.io/" element={<FirstPage />} />
        <Route path="/kuip-dom.github.io/semidvorie" element={<SecondPage onSendMale={handleSendMail} />} />
        <Route path="/kuip-dom.github.io/shablykino-village" element={<SecondPage />} />
      </Routes>
      <InfoTooltip name="register" forms="register" text={popupText} scr={popupImage} onClose={closePopup} isOpen={isGoodRegister} /> 
  </div>
  );
}

export default App;
