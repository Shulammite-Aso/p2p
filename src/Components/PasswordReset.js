import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    }
  };

  const sendResetEmail = event => {
    event.preventDefault();
  };

  return (
    <div className="mt-8">
      <h1 className="text-center mb-3">
        Reset your Password
      </h1>
      <div className="border rounded px-4">

      <Form>
        {emailHasBeenSent && (
            <div className="py-3 text-center mb-3">
              An email has been sent to you!
            </div>
          )}
          {error !== null && (
            <div className="py-3 text-center mb-3">
              {error}
            </div>
          )}
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
               type="email"
               placeholder="Enter email" 
               name="userEmail"
               value = {email}
               id="userEmail"
               onChange = {onChangeHandler}
              />
            </Form.Group>
            
            <Button variant="primary" size="lg" block>
              Send me a reset link
            </Button>
        </Form>

        <p className="my-2 text-center block">
        <NavLink
         to ="/Login"
        >
          &larr; back to sign in page
        </NavLink>
        </p>
      </div>
    </div>
  );
};
export default PasswordReset;