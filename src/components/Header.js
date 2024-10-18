import React from 'react';
import logo from '../image/logo.png';
import { useNavigate } from 'react-router-dom';

function Header(props) {
    const navigate = useNavigate();
    function handleClickFirstPage() {
        navigate('/');
    }

    return (
        <header className="header">
            <img onClick={handleClickFirstPage} src={logo} className="header__logo" alt="logo" />
            <button onClick={props.onButtonClick} className="header__button">Связаться с нами</button>
        </header>
    )
}

export default Header;