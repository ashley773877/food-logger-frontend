import React, { useEffect, useState} from 'react';
import { Form, Button, Table, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios'
import backgroundImg from '../images/LogPage.jpeg'
import styled from 'styled-components'




const StyledForm = styled.div` 
  max-width: 300%;
  color: white;
  margin: auto; 
  border: 5px solid #415846;
  padding: 100px; 
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



function HistoryPage({user}) { 
  const [showAlert, setShowAlert] = useState(false); // remove this if it does not work
  const [date, setDate] = useState('');
  const [foodLogs, setFoodLogs] = useState([]); 
  
  useEffect(() => { // remove lines 38-44 if does not work
 
    if (!user) {

      setShowAlert(true);
    }
  }, [user]);


  const handleDateSubmit = async (e) => {
    e.preventDefault();
    console.log(date);

    try {
    const res = await axios.post(`http://localhost:4000/api/foodlogs/by-date/${user._id}` ,{
      date: date,
     })
      setFoodLogs(res.data);
      e.target.reset()
    } catch (error) {
      console.log("error fetching logs", error.message)
    }
  }; 
  
  return (
    <> 
       <StyledImgWrapper> 
   <div> 
      <h2> History</h2>
    
       {showAlert && ( 
    <Alert variant="warning" onClose={() => setShowAlert(false)} dismissible>
  Please sign in or sign up to view history.
   </Alert>
 )  }  
<h2 style={{color: 'white', frontSize:'60px', fontWeight: '700'}}> History</h2>
<div> 
<StyledForm> 
  <Row>
      <Form onSubmit={handleDateSubmit}>
      <Col> 
        <Form.Group className="mb-3">
          <Form.Label style={{color: 'white', frontSize:'50px', fontWeight: '700'}}>Date</Form.Label>
          <Form.Control
         
          
            type="date"
            value={date}
          onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>
        </Col>

        <Col> 
        <Button variant="success" type="submit">
          Get History
        </Button>
        </Col>
     
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
      </Row>
      <div/>
      </StyledForm> 
 </div> 
    
    </div> 
    </StyledImgWrapper>
    </>
  );
  
  }


export default HistoryPage;
