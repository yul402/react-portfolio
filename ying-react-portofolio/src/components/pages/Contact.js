import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

const Contact = () => {
  // Create state variables to track input from users
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    message: ''
  });

  // Create state variables to track error message
  const [errorMessage, setErrorMessage] = useState({
    email: '',
    username: '', 
    message: ''
  });


  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Update username, email and message based on user's input
    setUserInfo({
      ...userInfo,
      [name]: value
    })

    // Reset error message to make sure it it empty before moving to validation stage
    setErrorMessage({
      ...errorMessage,
      [name]: ''
    })

  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Clear both userInfo and errorMessage after successful submition
    if(userInfo.message && userInfo.email && userInfo.username && !errorMessage){
      setUserInfo({
        username: '',
        email: '',
        message: ''
      })
      setErrorMessage({
        username: '',
        email: '',
        message: ''
      })
    }
  };

  const validateField = (e) => {

    // Get the target information
    const targetName = e.target.name;
    const targetVal = e.target.value;

    // Initiate an variable to store information
    let currentError = errorMessage;

    // Check for empty email & assign error message
    if (targetName === 'email' && targetVal === '' ) {
      currentError = {...currentError, 'email': 'Please eneter your email.'}
    } 
    
    // Check for email validation & assign error message
    if (targetName === 'email' && !validateEmail(targetVal)) {
      currentError = {...currentError, 'email': 'Please eneter a valid email address.'}
    } 

    // Check for empty username & assign error message
    if(targetName === 'username' && targetVal === ''){
      currentError = {...currentError, 'username': 'Please enter your name.'}
    }
    
    // Check for empty message & assign error message
    if (targetName === 'message' && targetVal === '') {
      currentError = {...currentError, 'message': 'Please enter a message.'}
    }
    
    // Update error message with setErrorMessage function
    setErrorMessage(currentError);


    // Successfully submission: clear user input and error message
    if(userInfo.message && userInfo.email && userInfo.username){
      setUserInfo({
        username: '',
        email: '',
        message: ''
      })
      setErrorMessage({
        username: '',
        email: '',
        message: ''
      })
    }
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <label>Name</label>
        <input
          value={userInfo.username}
          name="username"
          onChange={handleInputChange}
          onBlur={validateField}
          type="text"
          placeholder="name"
          className = {errorMessage.username ? 'error' : '' }
        />
        <label>Email</label>
        <input
          value={userInfo.email}
          name="email"
          onChange={handleInputChange}
          onBlur={validateField}
          type="email"
          placeholder="email"
          className = {errorMessage.email ? 'error' : '' }
        />
        <label>Message</label>
        <textarea
          type="text"
          name="message"
          onChange={handleInputChange}
          onBlur={validateField}
          rows="4"
          cols="50"
          form="usrform"
          placeholder='Message'
          value={userInfo.message}
          className = {errorMessage.message ? 'error' : '' }
        ></textarea>

        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage.username}</p>
          <p className="error-text">{errorMessage.email}</p>
          <p className="error-text">{errorMessage.message}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;