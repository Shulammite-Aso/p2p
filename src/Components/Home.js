import React from "react";
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../images/p-logo (2).png";
import heroImg from "../images/info.svg";
import placeholder from "../images/Rectangle 5.png";

const Home = () => {

return (
    <>
    <Navbar variant="dark" className="navbar-dak">
    <Navbar.Brand href="home">
      <img
        alt=""
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Portfolia
    </Navbar.Brand>
  </Navbar>

<section className="hero">

  <Container fluid>
    <Row>
      <Col xs={12} md={6}>
      <h1>Showcase Your Work</h1>
    <h5>With portfolia, quickly create a one page portfolio space in munites. Then go on to show the world what you do.
    </h5>

    <div className="authenticate">
          <NavLink to="/SignUp" className="navlink"><button className="signup-btn">Sign up</button></NavLink>
          <NavLink to="/Login" className="navlink"><button className="login-btn">Log in</button></NavLink>
        </div>
      </Col>
      <Col xs={12} md={6}>
      <Image src={heroImg} className="image"/>
      
      </Col>
    </Row>
  </Container>
</section>

<Container fluid>
  <Row>
    <div className="explainer-1">
    <Container>
      <Row>
        <Col>
          <Image src={placeholder} rounded />
        </Col>
        <Col>
          <h2>The How</h2>
          <p>Create an account</p>
          <p>Edit your your portfolio</p>
          <p>Add or remove sections you need or don't need</p>
          <p>Save your changes and make public</p>
        </Col>
      </Row>
    </Container>


    </div>
  </Row>
  
  <Row>
    <div className="explainer-2">
    <Container>
      <Row>
      <Col>
          <h2>The Use</h2>
          <p>Create an account</p>
          <p>Edit your your profile</p>
          <p>Add or remove sections you need or don't need</p>
          <p>Save your changes and make public</p>
        </Col>
        <Col>
          <Image src={placeholder} rounded />
        </Col>
      </Row>
    </Container>
    </div>
  </Row>
</Container>
    <footer className="">
      <p><small>© 2021. Made with ❤ by shula</small></p>
    </footer>
    </>
);
};

export default Home;