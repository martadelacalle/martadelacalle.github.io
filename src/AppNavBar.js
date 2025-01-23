import { Navbar, NavbarBrand, NavLink, NavItem, Nav} from 'reactstrap';
import { Link } from 'react-router-dom';
import { useLanguage } from './utils/LenguageProvider';
import { translations } from './utils/translations';
import './css/navbar.css'
import logo from './logo_martadelacalle_lavanda.png'


function AppNavbar() {
    const { language } = useLanguage();


    return (
        <div className='navbar-container'>
            <Navbar>
                <Nav style={{listStyleType: "none", margin: "0px"}}>
                <div className='navbar-elements'>
                    <NavItem>
                        <a href="/">
                            <img alt="Marta" src={logo} style={{ height: "50px" }} />
                        </a>
                    </NavItem>
                    <div className='navbar-elements-left'>
                    <NavItem>
                        <NavLink style={{ textDecoration: "none" }} id="about" tag={Link} to="/about">{translations[language].about}</NavLink>
                    </NavItem>
               
                    <NavItem>
                        <NavLink style={{ textDecoration: "none" }} id="skills" tag={Link} to="/skills">{translations[language].skills}</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink style={{ textDecoration: "none"}} id="projects" tag={Link} to="/projects">{translations[language].projects}</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink style={{ textDecoration: "none" }} id="contact" tag={Link} to="/contact">{translations[language].contact}</NavLink>
                    </NavItem>
                    </div>
                </div>
                </Nav>
            </Navbar>
        </div>
    );
}

export default AppNavbar;