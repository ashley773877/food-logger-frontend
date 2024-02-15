import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Fieldset from 'react-bootstrap/Button';
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'










function SignUpForm({setUser, onSignUpSuccess}) { // remove onsign if no work
  const navigate = useNavigate();
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
          localStorage.setItem('foodLogUser', JSON.stringify(response.data))
          console.log("Signup successful:", response.data);
   
      navigate('/')
        } catch (error) {
          console.error("Signup failed:", error.message);
        }
        // setUser(response.data.user)
      };
      
      return (
        
        <div>
            <h1> Register </h1>

            <Fieldset style={{border: '1px solid white', padding: '10px',
            borderRadius: '8px', width:"500px", marginBottom: "10px", backgroundColor: '#415846' }}>
      
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2}>
            Gender
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="Female"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="Male"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="Rather not say"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
          </Col>
        </Form.Group>
      </Fieldset>
        
        <Form onSubmit={handleSignUp}>
     
      <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
            Username
          </Form.Label>
          <InputGroup className="mb-2">
            <InputGroup.Text>@</InputGroup.Text>
            <Form.Control  id="inlineFormInputGroup" placeholder="Username" ref={usernameInputRef} />
          </InputGroup>
        
          
        <Form.Group className="mb-3" controlId="formGroupAge">
          <Form.Label style={{color: 'white', frontSize:'50px', fontWeight: '700'}}>age</Form.Label>
          <Form.Control type="age" placeholder="age" />
        </Form.Group>
         <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label style={{color: 'white', frontSize:'50px', fontWeight: '700'}}>Email address</Form.Label>
          <Form.Control type="email" placeholder="email" ref={emailInputRef} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label style={{color: 'white', frontSize:'50px', fontWeight: '700'}}>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={passwordInputRef} />
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button variant="success" type="submit">Sign up</Button>
        </Col>
      </Form.Group>
      
      </Form>
     
      </div>
      
      
    );
    }


export default SignUpForm