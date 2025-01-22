import { Navbar, NavbarBrand, NavLink, NavItem, Nav} from 'reactstrap';
import { Link } from 'react-router-dom';
import { useLanguage } from './utils/LenguageProvider';
import { translations } from './utils/translations';


function AppNavbar() {
    const { language } = useLanguage();


    return (
        <div>
            <Navbar color="black">
                <NavbarBrand href="/">
                    <img alt="logo" src="/logo.jpg" style={{ height: 40, width: 120, color: "black" }} />
                   
                </NavbarBrand>
                <Nav navbar>
                    <NavItem>
                        <NavLink style={{ color: "#FFD700" }} id="about" tag={Link} to="/about">{translations[language].about}</NavLink>
                    </NavItem>
               
                    <NavItem style={{ display: "flex", alignItems: "center" }}>
                        <NavLink style={{ color: "#FFD700" }} id="skills" tag={Link} to="/skills">{translations[language].skills}</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink style={{ color: "#FFD700" }} id="projects" tag={Link} to="/projects">{translations[language].projects}</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink style={{ color: "#FFD700" }} id="contact" tag={Link} to="/contact">{translations[language].contact}</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}

export default AppNavbar;