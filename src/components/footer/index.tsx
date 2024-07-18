import './style.css';

export function Footer(){
    return(
        <footer>
            <div className="footer-container">
                <div className='logo-footer'>
                    © CodeLab 2024
                </div>
                <div className='assinatura'>
                    Desenvolvido por <span className='text-footer'>Felipe Castilho</span>
                </div>
            </div>
        </footer>
    )
}