import React, { useState } from 'react';
import { Form, Button, Table } from 'react-bootstrap';
import axios from 'axios'

function HistoryPage() {
  const [date, setDate] = useState('');
  // const [endDate, setEndDate] = useState('');
  const [foodLogs, setFoodLogs] = useState([]); 
  const[meal, setMeal] = useState(''); // could be null
  const [timeOfDay, setTimeOfDay] = useState('')
  const [calories, setCalories] = useState('')

  const handleDateRangeSubmit = async (e) => {
    e.preventDefault();
   
    try{
      const res = await axios.post("http://localhost:4000/api/foodlogs/by-date", {
        meal: meal,
        timeOfDay: timeOfDay,
        calories: calories,
        date: date,
      })
      setFoodLogs(res.data.logs);
    } catch (error) {
      console.log("error fetching logs", error.message)
    }
  };

  return (
    <div>
      <h2>History</h2>

      <Form onSubmit={handleDateRangeSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Start Date</Form.Label>
          <Form.Control
            type="date"
            value={date}
          
          />
        </Form.Group>

        {/* <Form.Group className="mb-3">
          <Form.Label>End Date</Form.Label>
          <Form.Control
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </Form.Group> */}

        <Button variant="primary" type="submit">
          Get History
        </Button>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th onChange={(e) => setDate(e.target.value)}>Date</th>
            <th onChange={(e) => setMeal(e.target.value)}>Meal</th>
            <th onChange={(e) => setTimeOfDay(e.target.value)}>Time of Day</th>
            <th onChange={(e) => setCalories(e.target.value)}> Calories</th>
          
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
