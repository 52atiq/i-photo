import React from "react";
import { Button, Form } from "react-bootstrap";
import{ Link }from 'react-router-dom'

const Login = () => {
  return (
    <div className="w-25 mx-auto mt-5">
        <h2 className="text-center mb-3">Login</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          
          <Form.Control type="email" placeholder="Enter email" />
         
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
         
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        
        <div className="d-flex justify-content-between">
            {/* <Link> New member?</Link> */}
            <p className="" to='/registration'>New member? </p>
            <Button variant="primary" type="submit"> Login </Button>
        </div>
    
      </Form>
      
    </div>
  );
};

export default Login;
