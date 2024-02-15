import { Link}  from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogOutButton from './LogOutButton';
import styled from 'styled-components'

const StyledNavbar = styled(Navbar)`
  background-color: #415846;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const StyledNavLink = styled(Nav.Link)`
  color: white;
  font-size: 20px;
  font-weight: 700;
  margin-right: 10px;
  text-decoration: none;

  &:hover {
    color: grey; 
  }
`;



function Navigation() {
  return (
    <StyledNavbar expand="lg">
    <Navbar expand="lg" className="bg-body-tertiary">
    <StyledNavbar>
      <Container >
        <StyledNavbar>
        <StyledNavLink href="/" style={{fontVariant: 'small-caps', fontWeight:'700', color:'white', fontStretch: 'ultra-expanded'}}
        >EverDiet</StyledNavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <StyledNavLink as={Link} to="/login">
                    Login
                  </StyledNavLink>
                 <StyledNavLink as={Link} to="/History">
                    History
                  </StyledNavLink>
                  <StyledNavLink as={Link} to="/Logs">
                    Logs
                  </StyledNavLink>
       
           
          <LogOutButton />
        
           
          </Nav>
        </Navbar.Collapse>
        </StyledNavbar>
      </Container>
      </StyledNavbar>
    </Navbar>
    </StyledNavbar>
  );
}

export default Navigation;








