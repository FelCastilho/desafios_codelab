import './style.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-card.svg'
export default function Projects(){
    return(
        <section className="projects">

            <div className="projects-container">

                <div className='card'>
                    <div className='card-background'>
                        <img src={logo} />
                    </div>

                    <div className='card-text'>
                        <h2>Blog</h2>
                        <div className="container-btn">
                            <Link to="#" className='btn-details'>Detalhes</Link>
                            <Link to="#" className='btn-acessar'>Acessar</Link>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div className='card-background'>
                        <img src={logo} />
                    </div>

                    <div className='card-text'>
                        <h2>Blog</h2>
                        <div className="container-btn">
                            <Link to="#" className='btn-details'>Detalhes</Link>
                            <Link to="#" className='btn-acessar'>Acessar</Link>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div className='card-background'>
                        <img src={logo} />
                    </div>

                    <div className='card-text'>
                        <h2>Blog</h2>
                        <div className="container-btn">
                            <Link to="#" className='btn-details'>Detalhes</Link>
                            <Link to="#" className='btn-acessar'>Acessar</Link>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}