import './css/home.css'
import { translations } from './utils/translations';
import { useLanguage } from './utils/LenguageProvider';
import lavanda from './images/lavanda.png'
import foto from '../src/images/foto.jpg'

export default function Home(){
    const { language } = useLanguage();

    return(
    <>
        <div className="home-container">
            <div className="container-izquierda">
                <img className="lavanda" alt="lavanda" src={lavanda} style={{ height: "500px" }} />
                <div className="rectangle-home">            </div>
            </div>
            <div className="container-derecha">
                <h2 className="welcome">{translations[language].welcome}</h2>
                <h1 className="name">Marta de la Calle</h1>
                <h3 className="description">{translations[language].description}</h3>
            </div>
        </div>

        <div className="home-container-2">
            <div className="title">
                <p className="about">{translations[language].aboutMayus}</p>
            </div>
            <div className="about-home-container">
                <img className="photo" alt="Marta" src={foto} style={{ height: "500px" }} />
                <div className="text-container">
                    <div className="rectangle-perfil">
                        {/*TODO: ACTUALIZAR INFO DEL PERFIL */}
                        <p className="perfil">{translations[language].perfil2}</p>
                        <p className="perfil">{translations[language].perfil3}</p>
                    </div>
                    <div className="rectangle-hobbies">
                        <h3 className='hobby'>HOBBIES</h3>
                        <div className="hobby-1">
                            <p className='hobby'>{translations[language].music}</p>
                            <p className='hobby'>{translations[language].tvshows}</p>
                            <p className='hobby'>{translations[language].puzzles}</p>
                            <p className='hobby'>{translations[language].travel}</p>
                            <p className='hobby'>{translations[language].gym}</p>
                            <p className='hobby'>{translations[language].fashion}</p>
                        </div>
                        <div className="hobby-2">
                            <p className='hobby'>{translations[language].football}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    
    );
    
}