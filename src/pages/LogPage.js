import { Form, FormGroup, Button, Row, Alert, Col } from 'react-bootstrap';
import {  useState } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import backgroundImg from '../images/LogPage.jpeg'


const StyledForm = styled.div` 
  max-width: 50%;
  color: white;
  margin: auto; 
  border: 5px solid #415846;
  padding: 10px; 
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




function LogPage({user}) {
   
 
  const[meal, setMeal] = useState(''); 
  const [timeOfDay, setTimeOfDay] = useState('Breakfeast')
  const [calories, setCalories] = useState('')
  const [date, setDate] = useState('')
  const [showAlert, setShowAlert] = useState(user? null: true); // remove if does not work
  
  
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
       <StyledImgWrapper>
       <div>
         <h2 style={{color: 'white', fontSize:'45px'}}> Log your Meals!</h2>
          {showAlert && !user &&(
          <Alert variant="warning" onClose={() => setShowAlert(false)} dismissible>
            Please sign in to submit a food log.
          </Alert>
        )}
        
     <StyledForm> 
         <Form onSubmit={handleLogSubmission}>
     <Row className="mb-3"> 
     
      <FormGroup controlId="meal">
        <Form.Label style={{color: 'white', frontSize:'50px', fontWeight: '700'}}>Meal</Form.Label>
        <Form.Control  onChange={(e) => setMeal(e.target.value)} type="text"  />
      </FormGroup>
      
     
    <Col> 
     <Form.Label style={{color: 'white', frontSize:'50px', fontWeight: '700'}} htmlFor="timeOfDay">Time of Day</Form.Label>
      <Form.Select  onChange={(e) => setTimeOfDay(e.target.value)} aria-label="Default select example">
      <option value="Snack">Snack</option>
      <option value="Lunch">Lunch</option>
      <option value="Dinner">Dinner</option>
      <option value="Breakfeast">Breakfeast</option>
    </Form.Select>
    </Col>
    
    <Col> 
      <Form.Group controlId="Calories">
        <Form.Label style={{color: 'white', frontSize:'50px', fontWeight: '700'}}>Calories</Form.Label>
        <Form.Control  onChange={(e) => setCalories(e.target.value)} type="Calories" placeholder="100" />
      </Form.Group>
      </Col>
      
       <Form.Group controlId="date">
        <Form.Label style={{color: 'white', frontSize:'50px', fontWeight: '700'}}>Date</Form.Label>
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
        </StyledImgWrapper>
        
        </>
        
    );
}



export default LogPage

