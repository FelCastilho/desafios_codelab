import './style.css'
import Logo from '../../assets/logo.svg';

export default function Hero(){
    return(
        <section className='hero'>

            <div className="hero-container">
                <p className='small-text'>Comunidade de desenvolvedores</p>
                <h1>Projetos da CodeLab</h1>
                <p>A CodeLab é uma comunidade para desafios de <br /> desenvolvimento frontend, onde os usuários podem <br /> treinar os seus conhecimentos em programação.</p>
            </div>

            <div>
                <img src={Logo} alt="Logo da CodeLab" />
            </div>


        </section>
    )
}