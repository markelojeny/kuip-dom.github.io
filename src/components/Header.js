import React from 'react';
import logo from '../image/logo_dom.svg';
import { useNavigate } from 'react-router-dom';

function Header(props) {
    const navigate = useNavigate();
    function handleClickFirstPage() {
        navigate('/kuip-dom.github.io/');
    }

    return (
        <header className="header">
            <div onClick={handleClickFirstPage} className="header__logo">
                <img src={logo} className="logo" alt="logo" />
                <h1 className="logo__text">
                    Продажа индидуальных жилых домов
                </h1>
            </div>
            {props.children}
        </header>
    )
}

export default Header;