import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/codelab.svg';

export function Header() {
    const [isMenuActive, setIsMenuActive] = useState(false);

    const handleHamburgerClick = () => {
        setIsMenuActive(!isMenuActive);
    };

    return (
        <header>
            <div className="navbar">
                <div className="logo">
                    <img src={Logo} alt="Logo Codelab" />
                </div>
                <div
                    className={`hamburguer ${isMenuActive ? 'active' : ''}`}
                    onClick={handleHamburgerClick}
                ></div>
                <ul className={`menu ${isMenuActive ? 'active' : ''}`}>
                    <li><Link to="#">Página inicial</Link></li>
                    <li><Link to="#">Sobre</Link></li>
                    <li><Link to="#" className='btn-community'>Entrar na comunidade</Link></li>
                </ul>
            </div>
        </header>
    );
}
