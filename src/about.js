import foto from '../src/images/foto.jpg'
import { translations } from './utils/translations';
import { useLanguage } from './utils/LenguageProvider';
import './css/about.css'

export default function About(){
    const { language } = useLanguage();

    return(
    <div className="about-container">
            <div className="rectangle">
                <div className="rectangle-title">
                    <p className='title-about'>{translations[language].studies}</p>
                    <div className="rectangle-about">            </div>
                </div>
                <p className='formacion'>2019 - 2021</p>
                <p className='formacion'>{translations[language].bach} </p>
                <p className='formacion'>2022 - 2026</p>
                <p className='formacion'>{translations[language].uni} </p>
            </div>
            <div className="rectangle-idiomas">
                <p className='title-about'>{translations[language].idiomas}</p>
                <p>{translations[language].spanish}</p>
                <p>{translations[language].english}</p>
                <p>{translations[language].french}</p>
                <p>{translations[language].chinese}</p>
                <p>{translations[language].korean}</p>
            </div>
    </div>
    );
    //TODO AÑADIR CERTIFICACIONES!!!!!!!!!!
}