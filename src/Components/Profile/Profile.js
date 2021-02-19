import React, { useContext, useState } from "react";
import {auth} from "../../firebase";
import Button from "react-bootstrap/Button";
import Image from 'react-bootstrap/Image';
import { UserContext } from "../../providers/UserProvider";
import WorksCard from './worksCard';
import placeholder from "../../images/square.png";
import weddingPhoto from "../../images/gabriel-tovar-bS73y7WoNVE-unsplash.jpg";
import preWedding from "../../images/briona-baker-2CnZ19gQgak-unsplash.jpg";

const Profile = (props) => {

  const user = useContext(UserContext);
  const {displayName} = user;
  console.log(user);

    const [UserDisplayName, setUserDisplayName] = useState(displayName);
    const [bio, setBio] = useState('I take breath taking photos. Freezing time, and creating lasting memories.');
    const [profilePic, setprofilePic] = useState(placeholder);
    const [worksSectionTitle, setWorksSectionTitle] = useState("My works");
    const [cardTitle, setCardTitle] = useState("Wedding photography");
    const [cardText, setCardText] = useState("Some quick example text to build on the card title and make up the bulk of the card's content.");

    return (
        <div className="body">
        <div className="profile-page">
        <section className="bio">
            <div className="bio-summary" contentEditable>
                <h1 id="name">{UserDisplayName}.</h1>
                <p>{bio}</p>
                <div className="socials">
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-linkedin"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                </div>
                 
            </div>
            <div>
                <Image src={profilePic} roundedCircle />
            </div>
            
        </section>
        <div className="hr"></div>
        <div className="works">
            <h2>{worksSectionTitle}</h2>
            <WorksCard
              cardPhoto={weddingPhoto}
              cardTitle={cardTitle}
              cardText={cardText}
            />

            <WorksCard 
              cardPhoto={preWedding}
              cardTitle={cardTitle}
              cardText={cardText}
            />
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