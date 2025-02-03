import { useLanguage } from './utils/LenguageProvider';
import { translations } from './utils/translations';
import './css/skills.css'
import python from './images/logos/python_logo.png'
import java from './images/logos/java_logo.png'
import html from './images/logos/html_logo.png'
import js from './images/logos/js_logo.png'
import mysql from './images/logos/mysql_logo.png'
import r from './images/logos/r_logo.png'
import kotlin from './images/logos/kotlin_logo.png'
import haskell from './images/logos/haskell_logo.png'
import css from './images/logos/css_logo.png'
import react from './images/logos/react_logo.png'
import mongodb from './images/logos/mongo_logo.png'
import mariadb from './images/logos/mariadb_logo.png'
import android from './images/logos/android_studio_logo.png'
import eclipse from './images/logos/eclipse_logo.png'
import github from './images/logos/github_logo.png'
import intellij from './images/logos/intellij_logo.png'
import postman from './images/logos/postman_logo.png'
import sagemath from './images/logos/sagemath_logo.png'

export default function Skills(){
    const { language } = useLanguage();

    return(
        <div className="skills-container">
                <div className="skills-title">
                    <p className='title-skills'>{translations[language].skill}</p>
                    <div className="rectangle-skill-1">            </div>
                </div>
                <div className="skill-container">
                    <div className="skill-container-1">
                        <img className="img-mongodb" alt="MongoDB" src={mongodb}/>
                        <img className="img-python" alt="Python" src={python}/>
                        <img className="img-js" alt="JS" src={js}/>
                        <img className="img-java" alt="Java" src={java}/>
                    </div>
                    <div className="skill-container-2">
                        <img className="img-haskell" alt="Haskell" src={haskell}/>
                        <img className="img-html" alt="HTML" src={html}/>
                        <img className="img-mysql" alt="MySQL" src={mysql}/>
                        <img className="img-r" alt="R" src={r}/>
                    </div>
                    <div className="skill-container-3">
                        <img className="img-kotlin" alt="Kotlin" src={kotlin}/>
                        <img className="img-react" alt="React" src={react}/>
                        <img className="img-css" alt="css" src={css}/>
                        <img className="img-mariadb" alt="MariaDB" src={mariadb}/>
                    </div>
            </div>
                <div className="skills-title">
                    <p className='title-skills'>{translations[language].tools}</p>
                    <div className="rectangle-skill-2">            </div>
                </div>
                <div className="tools-container">
                    <div className="tool-container-1">
                        <img className="img-react" alt="Android Studio" src={android}/>
                        <img className="img-react" alt="Eclipse" src={eclipse}/>
                        <img className="img-react" alt="Github" src={github}/>
                        <img className="img-react" alt="IntelliJ" src={intellij}/>
                        <img className="img-react" alt="Postman" src={postman}/>
                        <img className="img-react" alt="SageMath" src={sagemath}/>
                    </div>
                </div>
        </div>
    );
    
    
}