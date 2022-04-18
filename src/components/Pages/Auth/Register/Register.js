import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../../../Firebase/firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css'
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const navigateLogin = () =>{
        navigate('/login')
    }
    if(user){
        navigate('/home')
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password)
    }

    return (
        
        <div className='register-form'>
           <h2 className='text-center'> Register </h2>
              
               <form onSubmit={handleRegister}>
                    <input type="text" name="name" id="" placeholder='Name' /> 
                    <input type="email" name="email" id="" placeholder='Eamil' required /> 
                    <input type="password" name="password" id="" placeholder='Password' required />
                    <input className='w-50 mx-auto btn btn-primary' type="submit" value="Register" />
                </form>
                <p>Already have an account? <Link to='/login' className="text-danger text-decoration-none" onClick={navigateLogin}> Login</Link></p>
                <SocialLogin> </SocialLogin>
           
        </div>
    );
};

export default Register;