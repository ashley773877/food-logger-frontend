import { Link}  from 'react-router-dom'


function NavBar() {
    return (

         <div>  
             <nav>
            <Link to="/">Home</Link>
            <br />
            <Link to="/Login"> Login</Link>
            <br />
            <Link to= "/History">History</Link>
            <br />
            <Link to="/logs">Foodlog</Link>
       
         </nav>
     </div>
    )
}

export default NavBar