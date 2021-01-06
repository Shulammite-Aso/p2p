import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const signInWithEmailAndPasswordHandler = 
            (event,email, password) => {
                event.preventDefault();
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
    <div className="">
      <h1 className="text-center">Sign In</h1>
      <div className="border rounded px-4">
        {error !== null && <div className="text-center">{error}</div>}

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
            <Button variant="primary" size="lg" block onClick = {(event) => 
              {signInWithEmailAndPasswordHandler(event, email, password)}}>
              Submit
            </Button>
        </Form>
        
        <p className="text-center my-3">or</p>

        <Button variant="danger" size="lg" block>
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