import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
import { auth, generateUserDocument } from "../firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);

  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, {displayName});
    }
    catch(error){
      setError('Error Signing up with email and password');
    }

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
    } else if (name === "userDisplayName") {
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
        <Form.Group controlId="formGroupName">
              <Form.Label>Display name:</Form.Label>
              <Form.Control autoComplete="true"
               type="text"
               placeholder="Enter display name" 
               name="userDisplayName"
               value = {displayName}
               onChange = {(event) => onChangeHandler(event)}
              />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control autoComplete="true"
               type="email"
               placeholder="Enter email" 
               name="userEmail"
               value = {email}
               onChange = {(event) => onChangeHandler(event)}
              />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control autoComplete="true"
               type="password"
               name="userPassword"
               value = {password}
               placeholder="Enter Password"
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
        <Button type="submit" variant="danger" size="lg" block>
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
