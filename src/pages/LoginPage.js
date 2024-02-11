
// put a form in here to sign in or sign up 
// have a components page for the sign up and render it here 

import Form from 'react-bootstrap/Form';

function LoginPage() {
    return (
        <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <button type="submit">Sign In</button>
      </Form>
    );
}


export default LoginPage
    