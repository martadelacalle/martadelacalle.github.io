import { useLanguage } from './utils/LenguageProvider';
import { translations } from './utils/translations';
import './css/contact.css'
import gh from './images/logos/github_logo.png'
import linkedin from './images/logos/linkedin_logo.png'
import mail from './images/logos/mail_logo.png'
import foto from './images/foto_contacto.jpg'

export default function Contact(){
    const { language } = useLanguage();
    

    return(
        <div className="contact-container">
            <div className="contact-image">               
                <img className="photo" alt="Marta" src={foto} style={{ height: "500px" }} />
                <div className="rectangle-contact">                </div>
            </div>
            <div className="semicircle">
                <div className="wave-container">
                    <h2 className="hi">{translations[language].hi}</h2>
                    <span className="wave-emoji" role="img" aria-label="Waving hand emoji">👋🏻</span>
                </div>

                <p className='project'>{translations[language].project}</p>

                <div className="socials-container">
                    <div className="socials">
                        <a className="mail" href="mailto:martadelacalle2003@gmail.com">
                            <img className="mail" alt="Gmail" src={mail} style={{ height: "50px", borderRadius: "10px"}} />
                        </a>
                        <p className='social'>martadelacalle2003@gmail.com</p>
                    </div>

                    <div className="socials">
                        <a className="linkedin" href="https://www.linkedin.com/in/marta-de-la-calle/">
                            <img className="linkedin" alt="Linkedin" src={linkedin} style={{ height: "50px" }} />
                        </a>
                        <p className='social'>Marta de la Calle</p>
                    </div>

                    <div className="socials">
                        <a className="gh" href="https://github.com/martadelacalle/">
                            <img className="gh"alt="Github" src={gh} style={{ height: "50px" }} />
                        </a>
                        <p className='social'>martadelacalle</p>
                    </div>
                </div>
            </div>
        </div>
    );
    
}