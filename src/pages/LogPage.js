import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';




function LogPage() {
   
    return (
        <>
        <h2> Food Logs</h2>
        
        <div>
        <Form>
      <FormGroup controlId="meal">
        <Form.Label>Meal</Form.Label>
        <FormControl type="meal"  />
      </FormGroup>

      <Form.Select aria-label="Default select example">
      <option>Time of Day</option>
      <option value="1">Breakfeast</option>
      <option value="2">Lunch</option>
      <option value="3">Dinner</option>
      <option value="4">Snack</option>
    </Form.Select>

      <FormGroup controlId="Calories">
        <Form.Label>Calories</Form.Label>
        <FormControl type="Calories" placeholder="100" />
      </FormGroup>

      <FormGroup controlId="date">
        <Form.Label>Date</Form.Label>
        <FormControl type="Date" placeholder="MM/DD/YYYY" />
      </FormGroup>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>



        </div>
        </>
    );
}


export default LogPage

