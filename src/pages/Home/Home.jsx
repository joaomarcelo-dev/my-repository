import './style.scss';
import Header from '../../components/Header/Header';
import CardProjects from '../../components/CardProjects/CardProjects';

import imgInitMain from '../../assets/compilter-img.svg';
import rectangle from '../../assets/rectangle.svg';
import imgProfile from '../../assets/117828396.jpeg';
import imgContact from '../../assets/contactImg.svg';

import logoTwitter from '../../assets/🦆 icon _twitter outlined_.svg';
import logoIntagram from '../../assets/🦆 icon _instagram outlined_.svg';
import logoLinkedin from '../../assets/🦆 icon _linkedin outlined_.svg'

// =================== Img dos projetos =============================== //
import imgPortifolio from '../../assets/projects/portifólio/Captura de tela de 2023-03-25 15-15-05.png'
// -------------------------------------------------------------------- //
export default function Home() {
    return (
        <>
            <header>
                <Header />
            </header>

            <main>
                <section className='top-main'>
                    <div className='aplic-animated'>
                        <div className="text-main-top">
                            <p>Bem vindo ao meu portifólio</p>
                            <h3>OLÁ! EU SOU UM DESENVOLVEDOR WEB FULL-STACK</h3>
                            <a href="#session-contact">
                                <button className='text-main-button'>CONTACTE-ME</button>
                            </a>
                        </div>
                        <div className="img-main-top">
                            <img src={imgInitMain} alt="" />
                        </div>
                    </div>
                </section>

                <section className='about-me'>
                    <div className='aplic-animated'>
                        <div className='div-init-about-me'>
                            <img src={rectangle} alt="" />
                            <h3>Sobre mim</h3>
                        </div>

                        <aside className='my-info'>
                            <div className='my-info-img'>
                                <img src={imgProfile} alt="Foto do dono do perfil" />
                            </div>

                            <div className="my-info-text">
                                <p>Olá!! Meu nome é João Marcelo Lima Oliveira, tenho 18 anos e 
                                    atuamente estou cursando desenvolvimento web Full-Stack na TRYBE.
                                </p>
                            </div>
                        </aside>

                        <aside className='stacks'>
                            <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=joaomarcelo-dev&layout=compact&langs_count=10&theme=dark"/>
                        </aside>
                    </div>
                </section>

                <section className='section-my-projects'>
                    <h3>Meus projetos</h3>
                    <div className='projcts'>
                        <CardProjects
                            img={imgPortifolio}
                            title="Portifólio antigo"
                            description="Meu primeiro portifólio"
                        />
                    </div>
                </section>

                <section id='session-contact' className='section-contact'>
                    <h3>Contacte-me</h3>
                    <div className='contact-container'>
                        <div className='img-contact'>
                            <img src={imgContact} alt="" />
                        </div>
                        <form className='form-send-mensage' action="" method='get'>
                            <input className='border-conf input-name input' type="text" placeholder='Nome'/>
                            <input className='border-conf input-email input' type="text" placeholder='E-mail'/>
                            <textarea className='border-conf text-area input' placeholder='Mensagem' name="" id="textarea-msg" cols="30" rows="10"></textarea>
                            <input className='button-submit border-conf input' type="submit" id='submit' value="Enviar" />
                        </form>
                    </div>
                </section>
            </main>
            <footer>
                <div className='box-color box-color-left'></div>

                <div className='networking'>
                    <a href="https://twitter.com/joao_r35" target="_blank">
                        <img src={logoTwitter} alt="logo do twitter" />
                    </a>

                    <a href="https://www.instagram.com/joao_marcelo_r35/" target="_blank">
                        <img src={logoIntagram} alt="logo do instagram" />
                    </a>

                    <a href="https://www.linkedin.com/in/jo%C3%A3o-marcelo-a414b6265/" target="_blank">
                        <img src={logoLinkedin} alt="logo do linkedi" />
                    </a>
                </div>

                <div className='box-color box-color-rigth'></div>
            </footer>
        </>
    )
}   