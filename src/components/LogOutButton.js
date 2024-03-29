 import { Button } from 'react-bootstrap'
import axios from 'axios'








function LogOutButton() {
   
    const handleLogout = async (e) => {
        e.preventDefault()
         localStorage.clear('foodloggerUser');
        try {
           
            const response = await axios.post('http://localhost:4000/api/users/logout');
      
          
            console.log(response.data); 
      
           
            localStorage.removeItem('foodLogUser');
           
           
            window.location.href = '/';
          } catch (error) {
            console.error('Logout failed', error.message);
            
          }
        };
      
    

return (
    
    
    <div>
   
        <Button style={{color: 'white', frontSize:'50px', fontWeight: '700'}} variant="outline-log Out" onClick={handleLogout}>Sign Out</Button>
     
    </div>
)

}

export default LogOutButton