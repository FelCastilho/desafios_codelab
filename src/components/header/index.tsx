import { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/codelab.svg';

export function Header() {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <header>
            <div className="navbar">
                <div className="logo">
                    <img src={Logo} alt="Logo Codelab" />
                </div>
                <div className={`hamburguer ${menuActive ? 'active' : ''}`} onClick={toggleMenu}></div>
                <ul className={`menu ${menuActive ? 'active' : ''}`}>
                    <li><Link to="#">Página inicial</Link></li>
                    <li><Link to="#">Sobre</Link></li>
                    <li><Link to="#" className='btn-community'>Entrar na comunidade</Link></li>
                </ul>
            </div>
        </header>
    );
}
