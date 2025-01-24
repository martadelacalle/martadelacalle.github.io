import foto from '../src/images/foto.jpg'
import { translations } from './utils/translations';
import { useLanguage } from './utils/LenguageProvider';
import './css/about.css'

export default function About(){
    const { language } = useLanguage();

    return(
    <div className="about-container">
        <img className="photo" alt="Marta" src={foto} style={{ height: "500px" }} />
        <div className="rectangle">
            <p className="perfil">{translations[language].perfil1}</p>
            <p className="perfil">{translations[language].perfil2}</p>
            <p className="perfil">{translations[language].perfil3}</p>
            <p className="perfil">{translations[language].perfil4}</p>
        </div>
        <div className="rectangle-idiomas">
            <h3 className="idiomas">{translations[language].idiomas}</h3>
            <ul>
                <li>{translations[language].spanish}</li>
                <li>{translations[language].english}</li>
                <li>{translations[language].french}</li>
                <li>{translations[language].chinese}</li>
                <li>{translations[language].korean}</li>
            </ul>

        </div>
    </div>
    );
}