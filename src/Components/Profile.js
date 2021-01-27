import React from "react";
import {auth} from "../firebase";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import placeholder from "../images/square.png";
import weddingPhoto from "../images/gabriel-tovar-bS73y7WoNVE-unsplash.jpg";
import preWedding from "../images/briona-baker-2CnZ19gQgak-unsplash.jpg";

const Profile = () => {
    return (
        <div className="body">
        <div className="profile-page">
        <section className="bio">
            <div className="bio-summary">
                <h1 id="name">Shula.</h1>
                <p>I take breath taking photos. Freezing time, and creating lasting memories.</p>
                <div className="socials">
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-linkedin"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                </div>
                 
            </div>
            <div>
                <Image src={placeholder} roundedCircle />
            </div>
            
        </section>
        <div className="hr"></div>
        <div className="works">
            <h2>My works</h2>
            <Card style={{ alignSelf: 'center', color: 'black', border: 'none', borderRadius: '8px', width: '60%', margin: "2.8em auto" }}>
              <Card.Img variant="top" src={weddingPhoto} style={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }} />
              <Card.Body>
                <Card.Title style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '1.2em' }}>Wedding photography</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ alignSelf: 'center', color: 'black', border: 'none', borderRadius: '8px', width: '60%', margin: "2.8em auto" }}>
              <Card.Img variant="top" src={preWedding} style={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }} />
              <Card.Body>
                <Card.Title style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '1.2em' }}>Pre weddings</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
        </div>
        <div className="gallary">
        <Button variant="primary" onClick = {() => {auth.signOut()}}>
              Sign Out
            </Button>
        
        </div>
        <div className="footer">
            <h2>Get in touch.</h2>
            <div className="contact">
              <div>
                <p>Email:</p>
                <p>myemail@gmail.com</p>
              </div>
              <div>
                <p>phone:</p>
                <p>081xxxx000</p>
              </div>
            </div>
        </div>
        </div>
        </div>
    )
};

export default Profile;