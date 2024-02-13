import React, { useState } from 'react';
import { Form, Button, Table } from 'react-bootstrap';
import axios from 'axios'

function HistoryPage() {
  const [date, setDate] = useState('');
 
  const [foodLogs, setFoodLogs] = useState([]); 
 

  const handleDateSubmit = async (e) => {
    e.preventDefault();
   console.log(date);
    try{
      const res = await axios.post("http://localhost:4000/api/foodlogs/by-date", {
        date: date,
     
      })
      setFoodLogs(res.data);
    } catch (error) {
      console.log("error fetching logs", error.message)
    }
  };

  // const handleDate = async (e) => {
  //   e.preventDefault();
  //   setDate(e.target.value)
  // }
  
  
  return (
    <div>
      <h2>History</h2>

      <Form onSubmit={handleDateSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Start Date</Form.Label>
          <Form.Control
            type="date"
            value={date}
          onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>


        <Button variant="primary" type="submit">
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
      </Table>
    </div>
  );
}

export default HistoryPage;
