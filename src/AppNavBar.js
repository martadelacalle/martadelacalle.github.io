function AppNavbar() {

    return (
        <div>
            <Navbar color="black">
                <NavbarBrand href="/">
                    <img alt="logo" src="/logo.jpg" style={{ height: 40, width: 120, color: "black" }} />
                   
                </NavbarBrand>
                <Nav navbar>
                    <NavItem>
                        <NavLink style={{ color: "#FFD700" }} id="about" tag={Link} to="/about">about</NavLink>
                    </NavItem>
               
                    <NavItem style={{ display: "flex", alignItems: "center" }}>
                        <NavLink style={{ color: "#FFD700" }} id="skills" tag={Link} to="/skills">skills & tools</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink style={{ color: "#FFD700" }} id="projects" tag={Link} to="/projects">projects</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink style={{ color: "#FFD700" }} id="contact" tag={Link} to="/contact">contact</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}

export default AppNavbar;