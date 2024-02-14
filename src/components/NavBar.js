import { Link}  from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogOutButton from './LogOutButton';
import styled from 'styled-components'

const StyledNavbar = styled(Navbar)`
  background-color: #AED1B5;
`;




function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
       <StyledNavbar expand="lg">
       <FullWidthContainer>
      <Container>
        <Navbar.Brand href="/">EverDiet</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/History">History</Nav.Link>
            <Nav.Link as={Link} to="Logs">Logs</Nav.Link>
         
          <LogOutButton />
           
          </Nav>
        </Navbar.Collapse>
      </Container>
      </FullWidthContainer>
      </StyledNavbar>
    </Navbar>
  );
}

export default Navigation;








