import { Button } from 'react=bootstrap'

function LogOutButton() {
    const handleLogout = (e) => {
        e.prevent.Default()
        localStorage.clear('foodLogUser');
        window.location.href = '/'
    }
}
return (
    <div>
        <button variant="secondary" onClick={handleLogout} >Log Out</button>
    </div>
)


export default LogOutButton