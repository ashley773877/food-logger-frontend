
// put a form in here to sign in or sign up 
// have a components page for the sign up and render it here 


import Form from 'react-bootstrap/Form';
import SignUpForm from '../components/SignUp';
import { useRef, useState } from "react";

function LoginPage() {
    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);
    const [showSignIn, setShowSignIn] = useState(false);
  
    const handleSignIn = (e) => {
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
              <button type="submit">Sign In</button>
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
  