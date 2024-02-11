//import { Link}  from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


// added a navbar from react-bootstrap
function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">EverDiet</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/History">History</Nav.Link>
            <Nav.Link href="Logs">Logs</Nav.Link>
           
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