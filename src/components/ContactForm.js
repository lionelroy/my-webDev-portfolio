import React, { useState } from 'react';
import styled from 'styled-components';

const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 1rem;
  }
  label {
    font-size: 1rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 0.8rem;
    padding: 0.7rem;
    color: #2a2a2a;
    background-color: #fff;
    outline: none;
    border: none;
    border-radius: 6px;
    margin-top: 0.5rem;
  }
  textarea {
    min-height: 120px;
    resize: vertical;
  }
  button[type='submit'] {
  white-space: nowrap;
  outline: none;
  border-radius: 16px;  
  min-width: 100px;
  max-width: 180px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: moccasin;
  padding: ${({ big }) => (big ? '16px 48px' : '10px 14px')};
  color: ${({ primary }) => (primary ? '#2a2a2a' : '#000d1a')};
  font-size: ${({ big }) => (big ? '16px' : '12px')};

  &:hover {
    background-color: lightSteelBlue;
    color: #2a2a2a;   
    border-radius: 0px;
  }
}

@media only screen and (max-width: 968px) {
  label {
    font-size: 1.1rem;
  }
}
`;

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <>
      <FormStyle
        name="contact"
        method="post"
        data-netlify="true"
        onSubmit="Submit"
        data-aos='fade-left'
        data-aos-duration='1200'
        data-aos-once='true'
        data-aos-anchor-placement='center bottom'>
        <input type="hidden" name="form-name" value="contact" />
        <div 
        className="form-group">
          <label htmlFor="name">
            Name:
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Message:
            <textarea
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <button   style={{fontWeight:"bold"}} type="submit">Send</button>
      </FormStyle>
    </>
  );
}

export default ContactForm;