import './css/projects.css'
import { useLanguage } from './utils/LenguageProvider';
import { translations } from './utils/translations';
import planty from './images/planty.jpg'
import lfnsc from './images/lfnsc.png'
import yugioh from './images/yugioh.png'
import infoca from './images/infoca.jpeg'



export default function Projects(){
    const { language } = useLanguage();

    return(
        <div className="projects-container">
            <div className="project-left">
                <div className="project-image">
                    <div className="rectangle-project"></div>  
                    <img className="photo-project" alt="YuGi-Oh!" src={yugioh} />
                </div>  
                <div className="project-text">
                    <h3 className="project-title">YuGi-Oh!</h3>
                    <p className="project-description">{translations[language].yugioh}</p>
                    <p className="project-description">{translations[language].yh1}</p>
                    <p className="project-description">{translations[language].yh2}</p>
                </div>  
            </div>  
            <div className="project-right">
                <div className="project-image">
                    <img className="photo-project" alt="INFOCA" src={infoca}/>
                    <div className="rectangle-project"></div>  
                </div> 
                <div className="project-text">
                    <h3 className="project-title">Plan INFOCA</h3> 
                    <p className="project-description">{translations[language].infoca}</p> 
                    <p className="project-description">{translations[language].if1}</p>
                </div> 
            </div> 
            <div className="project-left">
                <div className="project-text">
                    <h3 className="project-title">VideoMiner</h3> 
                    <p className="project-description">{translations[language].videominer}</p> 
                    <p className="project-description">{translations[language].vm1}</p>
                    <p className="project-description">{translations[language].vm2}</p>
                </div> 
            </div> 
            <div className="project-right">
                <div className="project-image">
                    <img className="photo-project" alt="Las Flores No Se Comen" src={lfnsc}/>
                    <div className="rectangle-project"></div>
                </div>
                <div className="project-text">
                    <h3 className="project-title">Las Flores No Se Comen</h3>  
                    <p className="project-description">{translations[language].lasfloresnosecomen}</p>
                    <p className="project-description">{translations[language].lfnsc1}</p>
                    <p className="project-description">{translations[language].lfnsc2}</p>
                </div> 
            </div> 
            <div className="project-left">
                <div className="project-image">
                    <div className="rectangle-project"></div>  
                    <img className="photo-project" alt="PLANTY" src={planty}/>
                </div> 
                <div className="project-text">
                    <h3 className="project-title">PLANTY</h3>  
                    <p className="project-description">{translations[language].planty}</p>
                    <p className="project-description">{translations[language].pt1}</p>
                    <p className="project-description">{translations[language].pt2}</p>
                </div> 
            </div> 
        </div>
    );  
}