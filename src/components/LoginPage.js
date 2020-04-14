import React, { useState } from "react";
import { Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';



const LoginPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <div className="container">
      <Form className="form">
        <h2>Login</h2>
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
      
      
        <Button type="submit">Login</Button>
        <br/> <br/>
        <small>Don't have an account ? signup <Link to="/signup"> here </Link> </small>
      </Form>
    </div>
   
  );
}
export default LoginPage;