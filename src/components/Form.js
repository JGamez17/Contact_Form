import { useState } from 'react';
import React from 'react';
import styled from 'styled-components';


const FormContainer = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns */
  gap: 20px; /* Adjust the gap as needed */
  font-family: 'Arial', sans-serif; /* Change 'Arial' to your preferred sans-serif font */
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const Form = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform any action with the form data, such as submitting it to an API
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="access_key" value="b43d4a41-c59a-4480-ab29-535e307535e6" />

      <h1>Request Form</h1>
      <h5>Feel free to get in touch with me with anything related to CODE.</h5>

      <label>Name:</label>
      <input onChange={handleChange} type="text" name="Name" value={formData.Name} />
      <br />

      <label>Email:</label>
      <input onChange={handleChange} type="text" name="Email" value={formData.Email} />
      <br />

      <label>Subject:</label>
      <input onChange={handleChange} type="text" name="Subject" value={formData.Subject} />
      <br />

      <label>Message:</label>
      <textarea onChange={handleChange} name="Message" value={formData.Message} />
      <br />

      <button type="submit">Send</button>
    </form>
  );
};

export default Form;