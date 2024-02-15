import { Form, FormGroup, Button, Row, Alert, Col } from 'react-bootstrap';
import {  useState } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import backgroundImg from '../images/LogPage.jpeg'

import {  useAuth } from '../context/AuthContext';



const StyledForm = styled.div` 
  max-width: 300%;
  height: 200%;
  color: white;
    max-width: 300px; 
    margin: auto; 
    border: 5px solid #415846;
    padding: 15px;
  }
`;

// const StyledImg = styled.img`
//   background-image: url(${backgroundImg}); 
//   background-size: cover;
//   width: 100%;
//   height: 200%;

// `;




function LogPage({user}) {
  const { isAuthenticated } = useAuth(); 
 
  const[meal, setMeal] = useState(''); 
  const [timeOfDay, setTimeOfDay] = useState('Breakfeast')
  const [calories, setCalories] = useState('')
  const [date, setDate] = useState('')
  const [showAlert, setShowAlert] = useState(null); // just added
  
  
  const handleLogSubmission = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:4000/api/foodlogs', {
        user_id: user._id,
        meal: meal,
        timeOfDay: timeOfDay,
        calories: calories,
        date: date,
      });
      console.log("Food log submitted successfully:", response.data);
      setMeal('');
      setTimeOfDay('');
      setCalories('');
      setDate('');
    } catch (error) {
      console.error("Food log submission failed:", error.message);
    }
  };
  return (
        <> 
       {/* <StyledImg src={backgroundImg} alt="Background" /> */}
     
        
         <div>
         <h2> Log your Meals!</h2>
          {showAlert && (
          <Alert variant="warning" onClose={() => setShowAlert(false)} dismissible>
            Please sign in to submit a food log.
          </Alert>
        )}
     <StyledForm> 
         <Form onSubmit={handleLogSubmission}>
     <Row className="mb-3"> 
     
      <FormGroup controlId="meal">
        <Form.Label>Meal</Form.Label>
        <Form.Control onChange={(e) => setMeal(e.target.value)} type="text"  />
      </FormGroup>
      
     
    <Col> 
     <Form.Label htmlFor="timeOfDay">Time of Day</Form.Label>
      <Form.Select  onChange={(e) => setTimeOfDay(e.target.value)} aria-label="Default select example">
      <option value="Snack">Snack</option>
      <option value="Lunch">Lunch</option>
      <option value="Dinner">Dinner</option>
      <option value="Breakfeast">Breakfeast</option>
    </Form.Select>
    </Col>
    
    <Col> 
      <Form.Group controlId="Calories">
        <Form.Label>Calories</Form.Label>
        <Form.Control  onChange={(e) => setCalories(e.target.value)} type="Calories" placeholder="100" />
      </Form.Group>
      </Col>
      
       <Form.Group controlId="date">
        <Form.Label>Date</Form.Label>
        <Form.Control onChange={(e) => setDate(e.target.value)} type="Date" placeholder="MM/DD/YYYY" />
      </Form.Group>
      
       <Col> 
      <Button variant="success" type="submit">
        Submit
      </Button>
       </Col>
      
      </Row>
    
    </Form>
    </StyledForm>
   
        </div>
        
        </>
        
    );
}



export default LogPage

