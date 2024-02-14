import { Link}  from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogOutButton from './LogOutButton';



function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
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
      
    </Navbar>
  );
}

export default Navigation;








// function NavBar() {
//     return (
        
   
//              <div>  
//              <nav>
//             <Link to="/">Home</Link>
//             <br />
//             <Link to="/Login"> Login</Link>
//             <br />
//             <Link to= "/History">History</Link>
//             <br />
//             <Link to="/logs">Foodlog</Link>
       
//          </nav>
//      </div>
//     )
// }
    


// export default NavBar