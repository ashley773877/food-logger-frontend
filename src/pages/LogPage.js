import { Form, FormGroup, Button, Row, Alert } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios'

import {  useAuth } from '../context/AuthContext';




function LogPage({user}) {
  const { isAuthenticated } = useAuth(); 
 
  const[meal, setMeal] = useState(''); 
  const [timeOfDay, setTimeOfDay] = useState('Breakfeast')
  const [calories, setCalories] = useState('')
  const [date, setDate] = useState('')
  const [showAlert, setShowAlert] = useState(false); // just added
  useEffect(() => {
    console.log('isAuthenticated: changed', isAuthenticated);
  }, [isAuthenticated]); 
  const handleLogSubmission = async (e) => {
    e.preventDefault();

    if(!isAuthenticated) {
      console.log('not authenticated. alert will be shown');
      setShowAlert(true);
      return;
    }
    
    try {
      const response = await axios.post("http://localhost:4000/api/foodlogs", {
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
        <h2> Log your Meals!</h2>
        
        <div>
        {showAlert && (
          <Alert variant="warning" onClose={() => setShowAlert(false)} dismissible>
            Please sign in to submit a food log.
          </Alert>
        )}
        
        
        
        <Form onSubmit={handleLogSubmission}>
     <Row className="mb-3"> 
      <FormGroup controlId="meal">
        <Form.Label>Meal</Form.Label>
        <Form.Control onChange={(e) => setMeal(e.target.value)} type="text"  />
      </FormGroup>
   
      <Form.Label htmlFor="timeOfDay">Time of Day</Form.Label>
      
      <Form.Select  onChange={(e) => setTimeOfDay(e.target.value)} aria-label="Default select example">
      <option value="Breakfeast">Breakfeast</option>
      <option value="Lunch">Lunch</option>
      <option value="Dinner">Dinner</option>
      <option value="Snack">Snack</option>
    </Form.Select>
    

      <Form.Group controlId="Calories">
        <Form.Label>Calories</Form.Label>
        <Form.Control  onChange={(e) => setCalories(e.target.value)} type="Calories" placeholder="100" />
      </Form.Group>

      <Form.Group controlId="date">
        <Form.Label>Date</Form.Label>
        <Form.Control onChange={(e) => setDate(e.target.value)} type="Date" placeholder="MM/DD/YYYY" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Row>
    </Form>



        </div>
        </>
    );
}



export default LogPage

