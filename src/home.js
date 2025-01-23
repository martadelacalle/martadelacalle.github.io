import './css/home.css'
import { translations } from './utils/translations';
import { useLanguage } from './utils/LenguageProvider';
import logo from './logo_martadelacalle_lavanda.png'


export default function Home(){
    const { language } = useLanguage();
    

    return(
    <div className="container">
        <div className="container-izquierda">
            <img alt="Marta" src={logo} style={{ height: "100px" }} />
        </div>
        <div className="container-derecha">
            <h1 className="name">Marta de la Calle</h1>
            <h3 className="description">{translations[language].description}</h3>
        </div>
    </div>
    );
    
}