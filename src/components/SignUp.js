// page for signup form will be rendered into sign in folder

import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

function SignUpForm() {
    
    return (
        <div>
            <h3> signnnn</h3>
        <Form>
      <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
            Username
          </Form.Label>
          <InputGroup className="mb-2">
            <InputGroup.Text>@</InputGroup.Text>
            <Form.Control id="inlineFormInputGroup" placeholder="Username" />
          </InputGroup>
        
        
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <button type="submit">Sign In</button>
      </Form>
      </div>
    );
}


export default SignUpForm