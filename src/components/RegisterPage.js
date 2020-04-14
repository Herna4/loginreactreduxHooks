import React, { useState } from "react";
// import "./styles.css";
import { Button, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


const RegistrationPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  return (
    <Form className="form">
      <h2>Sign up</h2>
      <Form.Field>
        <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Name"
        type="text"
        name="name"
        required
        />
      </Form.Field>
      
      <Form.Field>
         <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email address"
        type="email"
        name="email"
        required
       />
      </Form.Field>
     
      <Form.Field>
        <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        name="password"
        required
       />
      </Form.Field>
     
      <Form.Field>
        <input
        value={password_confirmation}
        onChange={e => setPasswordConfirmation(e.target.value)}
        placeholder="Password Confirmation"
        type="password"
        name="password"
        required
        />
      </Form.Field>
      
      <Button type="submit">Signup</Button>
      <br/> <br/>
      <small>Don't have an account ? Login  <Link to="/login"> here </Link> </small>
    </Form>
  );
}
export default RegistrationPage;