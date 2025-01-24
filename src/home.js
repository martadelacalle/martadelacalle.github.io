import './css/home.css'
import { translations } from './utils/translations';
import { useLanguage } from './utils/LenguageProvider';
import lavanda from './images/lavanda.png'

export default function Home(){
    const { language } = useLanguage();

    return(
    <div className="container">
        <img className="lavanda" alt="Marta" src={lavanda} style={{ height: "500px" }} />
        <div className="container-derecha">
            <h2 className="welcome">{translations[language].welcome}</h2>
            <h1 className="name">Marta de la Calle</h1>
            <h3 className="description">{translations[language].description}</h3>
        </div>
    </div>
    );
    
}