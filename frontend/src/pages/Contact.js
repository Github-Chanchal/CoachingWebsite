import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function App() {
  return (
    <div style={{ display: "block", width: 700, padding: 30 , marginLeft:400}}>
      <h4>Contact form</h4>
      <Form action="https://formsubmit.co/mvsr1303@gmail.com" method="POST">
        <Form.Group>
          <Form.Label>Enter your full name:</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter your full name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your email address:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your your email address"
          />
          <input type="hidden" name="_next" value="http://localhost:3000/" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your query:</Form.Label>
          <Form.Control type="text" name="query" placeholder="Ask your query" />
        </Form.Group> 
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
