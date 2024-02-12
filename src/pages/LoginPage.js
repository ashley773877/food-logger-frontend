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
    const [signInError, setSignInError] = useState(null);
  
    const handleSignIn =  (e) => {
      e.preventDefault();
      console.log(emailInputRef.current.value);
      console.log(passwordInputRef.current.value);

      if (emailInputRef.current.value === "") {
        emailInputRef.current.focus();
        signInError("Sign-in failed. Please check your credentials")
        setSignInError("Email is required")
        return;
      }
      if (passwordInputRef.current.value === "") {
        passwordInputRef.current.focus();
        setSignInError("Password is required");
        return;
      }
    
    axios
    .post("http://localhost:4000/api/users/signin", {
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    })
    .then((response) => {
      console.log("Sign in successful:", response.data);
    })
    .catch((error) => {
     
      console.error("Sign in error:", error.message);
      const errorMessage = error.response?.data?.message || "Password must be between 6-50 characters";
      setSignInError(errorMessage);

    });
    
};
return (
      <main>
       
        {showSignIn ? (
          <div>
            <h1> Sign In</h1>
            <Form onSubmit={handleSignIn}>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="email" ref={emailInputRef} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" ref={passwordInputRef} />
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
  
  export default LoginPage;
  