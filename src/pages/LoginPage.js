import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import SignUpForm from '../components/SignUp';
import Button from 'react-bootstrap/Button';
import backgroundImg from '../images/LogPage.jpeg'
import styled from "styled-components";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';


// import LogOutButton from '../components/LogOutButton';

const StyledForm = styled.div` 
  max-width: 300%;
  color: white;
  margin: auto; 
  border: 5px solid #415846;
  padding: 15px; 
  }
`;

const StyledImgWrapper = styled.div`
  background-image: url(${backgroundImg}); 
  background-size: cover;
  background-position:
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

`;








function LoginPage({setUser}) {
  const navigate = useNavigate();
   const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);
    const [showSignIn, setShowSignIn] = useState(true);
    const [signInError, setSignInError] = useState(null);
    // const [showAlert, setShowAlert] = useState(false);
 
    // const [email, setEmail] = useState(null)
    // const [password, setPassword] = useState(null);

  
    const handleSignIn = async (e) => {
      e.preventDefault();

        
      console.log(emailInputRef.current.value);
      console.log(passwordInputRef.current.value);

      if (emailInputRef.current.value === "") {
        emailInputRef.current.focus();
        setSignInError("Sign-in failed")
       
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
        setUser(response.data.user)
        navigate("/");
      })
      .catch((error) => {
  
        console.error("Sign in error:", error);
        const errorMessage = error.response?.data?.message || "Password must be between 6-50 characters";
        setSignInError(errorMessage);
      });
      
  };
return (
      <> 
       <StyledImgWrapper>
      
      <main>
      <StyledForm> 
        {showSignIn ? (
          <div>
           
            <h1 style={{color: 'white', frontSize:'50px', fontWeight: '700'}}> Sign In</h1>
           
            <Form onSubmit={handleSignIn}>
            <Row> 
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label style={{color: 'white', frontSize:'50px', fontWeight: '700'}}>Email address</Form.Label>
                <Form.Control type="email" placeholder="email" ref={emailInputRef} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label style={{color: 'white', frontSize:'50px', fontWeight: '700'}}>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" ref={passwordInputRef} />
              </Form.Group>
             {/* <button type="submit">Sign In</button> */}
             <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button variant="success" type="submit" style={{textAlign:""}}>Sign in</Button>
        </Col>
      </Form.Group>
      </Row> 
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
            
            {signInError && <div style={{color: 'red'}}>{signInError}</div>
}         
          </div>
        )}
        </StyledForm>
      </main>
      </StyledImgWrapper>
      </>
    );
  
  }
  
  export default LoginPage;
  