import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate,useLocation } from "react-router-dom";
import { auth } from "../../../../Firebase/firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation();
  let errorElement;
  let from = location.state?.from?.pathname || "/";
  
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  if(user){
    // navigate('/home')
    navigate(from, { replace: true });
  }
  if (error ) {
      
    errorElement  =   <p className="text-danger">Error: {error?.message} </p>
     
   
  }

  const handleSubmit = (event) =>{
   event.preventDefault();
   const email = emailRef.current.value;
   const password = passwordRef.current.value;
  //  console.log(email, password);
  signInWithEmailAndPassword(email, password)
  }

  const navigateRegister = event =>{
    navigate('/register');
  }

  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-center mt-3">Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={emailRef} type="email" placeholder="Email"  required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
        </Form.Group>

        <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
         Login
        </Button>
      </Form>
   {errorElement}
      <p>New to I-PHOTO? <Link to='/register' className="text-danger text-decoration-none" onClick={navigateRegister}>Please Register </Link></p>
      <SocialLogin> </SocialLogin>
    </div>
  );
};

export default Login;
