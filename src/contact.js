import { useLanguage } from './utils/LenguageProvider';
import { translations } from './utils/translations';
import './css/contact.css'
import gh from './images/github_logo.png'
import linkedin from './images/linkedin_logo.png'

export default function Contact(){
    const { language } = useLanguage();
    

    return(
        <div className="contact-container">
            <div className="semicircle">
                <div className="wave-container">
                    <h2 className="hi">{translations[language].hi}</h2>
                    <span class="wave-emoji" role="img" aria-label="Waving hand emoji">👋🏻</span>
                </div>

                <h3 className='project'>{translations[language].project}</h3>

                <h3><a href="mailto:martadelacalle2003@gmail.com">{translations[language].mail}</a></h3>

                <h3>{translations[language].socials}</h3>
                
                <div className="social">
                    <a className="linkedin" href="https://www.linkedin.com/in/marta-de-la-calle/">
                        <img alt="Linkedin" src={linkedin} style={{ height: "50px" }} />
                    </a>
                    <a href="https://github.com/martadelacalle/">
                        <img alt="Github" src={gh} style={{ height: "50px" }} />
                    </a>
                </div>
            </div>
        </div>
    );
    
}