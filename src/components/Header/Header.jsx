import './style.scss';
import logoPng from '../../assets/logo-header.jpg'

export default function Home() {
    return (
        <div className="header-container">
            <img className='logo-header' src={logoPng} alt="imagem de logo header" />
            <h1 className='title-header'>Meu portifólio</h1>
            <div className="icon-menu hover-efect-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                </svg>
            </div>
        </div>
    )
}