import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);
  const createUserWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
    setDisplayName("");
  };
  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };
  return (
    <div className="">
      <h1 className="text-center">Sign Up</h1>
      <div className="border rounded px-4">
        {error !== null && (
          <div className="text-center">
            {error}
          </div>
        )}

        <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
               type="email"
               placeholder="Enter email" 
               name="userEmail"
               value = {email}
               id="userEmail"
               onChange = {(event) => onChangeHandler(event)}
              />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
               type="password" 
               placeholder="Password" 
               name="userPassword"
               value = {password}
               placeholder="Enter Password"
               id="userPassword"
               onChange = {(event) => onChangeHandler(event)}
               />
            </Form.Group>
            <Button variant="primary" size="lg" block onClick={event => {
              createUserWithEmailAndPasswordHandler(event, email, password);
            }}>
              Submit
            </Button>
        </Form>

        <p className="text-center">or</p>
        <Button variant="danger" size="lg" block>
            Sign in with google
        </Button>
        <p className="text-center text-muted my-3">
          Already have an account?{" "}
          <NavLink to="/Login">
            Sign in here
          </NavLink>
        </p>
      </div>
    </div>
  );
};
export default SignUp;
