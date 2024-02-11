// page for signup form will be rendered into sign in folder

import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useRef } from "react";
import axios from 'axios'

function SignUpForm() {
    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);
    const usernameInputRef = useRef(null);
   
    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post("http://localhost:4000/api/users/signup", {
            username: usernameInputRef.current.value,
            email: emailInputRef.current.value,
            password: passwordInputRef.current.value,
          });
          console.log("Signup successful:", response.data);
        } catch (error) {
          console.error("Signup failed:", error.message);
        }
      };
      
      return (
        <div>
            <h1> Sign Up </h1>

            <fieldset style={{border: '1px solid white', padding: '10px',
            borderRadius: '8px', width:"500px", marginBottom: "10px" }}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2}>
            Gender
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="Gender"
              label="Female"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="Gender"
              label="Male"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="Gender"
              label="Rather not say"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
          </Col>
        </Form.Group>
      </fieldset>
        
        <Form onSubmit={handleSignUp}>
     
      <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
            Username
          </Form.Label>
          <InputGroup className="mb-2">
            <InputGroup.Text>@</InputGroup.Text>
            <Form.Control id="inlineFormInputGroup" placeholder="Username" />
          </InputGroup>
        
          
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>age</Form.Label>
          <Form.Control type="age" placeholder="age" />
        </Form.Group>
         <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Sign in</Button>
        </Col>
      </Form.Group>
      
      </Form>
     
      </div>
    );
    }


export default SignUpForm