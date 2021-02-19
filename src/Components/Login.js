import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
import { auth, signInWithGoogle } from "../firebase";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const signInWithEmailAndPasswordHandler = (event,email, password) => {
            event.preventDefault();
            auth.signInWithEmailAndPassword(email, password).catch(error => {
              setError("Error signing in with password and email!");
              console.error("Error signing in with password and email", error);
            });
    };

      const onChangeHandler = (event) => {
          const {name, value} = event.currentTarget;

          if(name === 'userEmail') {
              setEmail(value);
          }
          else if(name === 'userPassword'){
            setPassword(value);
          }
      };

  return (
    <div className="authentication-page">
      <h1 className="text-center">Sign In</h1>
      <div className="border rounded px-4">
        {error !== null && <div className="text-center">{error}</div>}

        <Form>
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
            <Button variant="primary" size="lg" block onClick = {(event) => 
              {signInWithEmailAndPasswordHandler(event, email, password)}}>
              Submit
            </Button>
        </Form>
        
        <p className="text-center my-3">or</p>

        <Button variant="danger" size="lg" block 
        onClick={() => {
          signInWithGoogle();
        }}>
            Login with google
        </Button>
       
        <p className="text-center text-muted my-3">
          Don't have an account?{" "}
          <NavLink to="/SignUp">Sign up here</NavLink>{" "}
          <br />{" "}
          <NavLink to = "/PasswordReset">Forgot Password?</NavLink>
        </p>
      </div>
    </div>
  );
};
export default Login;