import './style.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/codelab.svg';

export function Header() {
    return (
        <header>
            <div className="header-container">
                <img src={Logo} alt="Logo da CodeLab" />

                <nav>
                    <ul>
                        <li><Link to="#">Página inicial</Link></li>
                        <li><Link to="#">Sobre</Link></li>
                        <li><Link to="#" className='btn-community'>Entrar na comunidade</Link></li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}