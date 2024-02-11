import { useRef, useState } from "react";
import axios from 'axios'
import SignUpForm from '../components/SignUp';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

function LoginPage() {
    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);
    const [showSignIn, setShowSignIn] = useState(true);
  
    const handleSignIn = async (e) => {
      e.preventDefault();
// request to backend 
try {
  const response = await axios.post("http://localhost:4000/api/users/signin", {
    email: emailInputRef.current.value,
    password: passwordInputRef.current.value,
  });
  console.log(response.data);
} catch (error) {
  console.error(error);
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
    };
  
return (
      <main>
       
        {showSignIn ? (
          <div>
            <h1> Sign In</h1>
            <Form onSubmit={handleSignIn}>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
             {/* <button type="submit">Sign In</button> */}
             <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button  type="submit" style={{textAlign:"center"}}>Sign in</Button>
        </Col>
      </Form.Group>

            </Form>
            <span>
              Don't have an account?{" "}
              <span onClick={() => setShowSignIn(!showSignIn)}
              style={{cursor: "pointer", textDecoration: "underline" }}
              >
                Sign Up</span>
            </span>
          </div>
        ) : (
          <div>
            <SignUpForm />
            <span>
              Already have an account?{" "}
              <span 
              onClick={() => setShowSignIn(!showSignIn)}
              style={{cursor: "pointer", textDecoration: "underline"}}
              >
                Sign In
              </span>
            
            </span>
          </div>
        )}
      </main>
    );
  }
}
  
  export default LoginPage;
  