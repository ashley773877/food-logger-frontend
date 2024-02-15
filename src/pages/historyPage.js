import React, {  useState } from 'react';
import { Form, Button, Table, Alert, Row, FormControl, FormGroup } from 'react-bootstrap';
import axios from 'axios'








function HistoryPage() {
 
 
  
  const [showAlert, setShowAlert] = useState(false); // just added
  const [date, setDate] = useState('');
  const [foodLogs, setFoodLogs] = useState([]); 

  
  const handleDateSubmit = async (e) => {
    e.preventDefault();
    console.log(date);

    try {
    const res = await axios.post("http://localhost:4000/api/foodlogs/by-date" ,{
        date: date,
     })
      setFoodLogs(res.data);
      e.target.reset() // might have to remove
    } catch (error) {
      console.log("error fetching logs", error.message)
    }
  }; 
  
  //   await signIn({});
    //   console.log('user after signIn' ,user)
    // } catch (error) {
    //   console.error('Sign in error:', error);
    // return;
  return (
    
   <div> 
      <h2> History</h2>
    {/* might have to comment alert out */}
       {showAlert && (
  <Alert variant="warning" onClose={() => setShowAlert(false)} dismissible>
    Please sign in to view history.
  </Alert>
)}  

<div> 
      <Form onSubmit={handleDateSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Start Date</Form.Label>
          <Form.Control
            type="date"
            value={date}
          onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>


        <Button variant="success" type="submit">
          Get History
        </Button>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th >Date</th>
            <th >Meal</th>
            <th >Time of Day</th>
            <th > Calories</th>
          
          </tr>
        </thead>
        <tbody>
          {foodLogs.map((log) => (
            <tr key={log._id}>
              <td>{log.date}</td>
              <td>{log.meal}</td>
              <td>{log.timeOfDay}</td>
              <td>{log.calories}</td>
           
            </tr>
          ))}
        </tbody>
      </Table> <div/>
 </div> 
    
    </div> 
  );
  
  }


export default HistoryPage;
