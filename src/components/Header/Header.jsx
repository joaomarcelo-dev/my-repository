import './style.scss';
import logoPng from '../../assets/logo-header.jpg'


export default function Home() {
    return (
        <div className="header-container">
            <img className='logo-header' src={logoPng} alt="" />
        </div>
    )
}