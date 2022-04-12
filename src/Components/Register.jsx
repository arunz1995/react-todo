import React from 'react';
import "./register.css"
import RegisterForm from './RegisterForm';


const Register = () => {
  return (
    <div className="register-container">
    <main>
      <div className="back-button"></div>
      <div className="form-section">
        <RegisterForm/>
        
      </div>
      <div className="illustration-section"></div>
    </main>
    
    </div>
  )
}

export default Register