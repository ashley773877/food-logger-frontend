// page for signup form will be rendered into sign in folder

import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useRef, useState } from "react";

function SignUpForm() {
    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);
   
   
   
   
   
    const handleSignUp = (e) => {
        e.preventDefault();
        console.log(emailInputRef.current.value);
        console.log(passwordInputRef.current.value);
    
        if (emailInputRef.current.value === "") {
          emailInputRef.current.focus();
          return;
        }
        if (passwordInputRef.current.value === "") {
          passwordInputRef.current.focus();
          return;
        }
        // the request here will be for the signup
      };
    
    
    
    
    
    
    
    
    
    return (
        <div>
            <h3> Sign Up </h3>

            <fieldset>
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
        <button type="submit">Sign Up</button>
      
      </Form>
     
      </div>
    );
}


export default SignUpForm