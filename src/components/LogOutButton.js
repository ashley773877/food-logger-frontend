 import { Button } from 'react-bootstrap'
import axios from 'axios'
import { useAuth } from '../context/AuthContext';

function LogOutButton() {
    const{signOut}= useAuth();
    const handleLogout = async (e) => {
      // const{signOut}= useAuth();
        e.preventDefault()
         localStorage.clear('foodloggerUser');
        try {
           
            const response = await axios.post('http://localhost:4000/api/users/logout');
      
          
            console.log(response.data); 
      
           
            localStorage.removeItem('foodLogUser');
           signOut()
           
            window.location.href = '/';
          } catch (error) {
            console.error('Logout failed', error.message);
            
          }
        };
      
    

return (
    <div>
       
        <Button variant="outline-log Out" onClick={handleLogout}>Sign Out</Button>
    </div>
)

}

export default LogOutButton