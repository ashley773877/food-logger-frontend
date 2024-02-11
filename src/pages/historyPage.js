import React, { useState } from 'react';
import { Form, Button, Table } from 'react-bootstrap';

function HistoryPage() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [foodLogs, setFoodLogs] = useState([]); // Assuming you have a state for food logs

  const handleDateRangeSubmit = (e) => {
    e.preventDefault();
    // Handle the date range submission logic here
  };

  return (
    <div>
      <h2>History</h2>

      <Form onSubmit={handleDateRangeSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Start Date</Form.Label>
          <Form.Control
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>End Date</Form.Label>
          <Form.Control
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Get History
        </Button>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Meal</th>
            <th>Time of Day</th>
            <th>Calories</th>
            {/* Add other columns as needed */}
          </tr>
        </thead>
        <tbody>
          {foodLogs.map((log) => (
            <tr key={log._id}>
              <td>{log.date}</td>
              <td>{log.meal}</td>
              <td>{log.timeOfDay}</td>
              <td>{log.calories}</td>
              {/* Add other columns as needed */}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default HistoryPage;
