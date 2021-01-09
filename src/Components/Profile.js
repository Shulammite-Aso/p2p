import React from "react";

const Profile = () => {
    return (
        <>
        <div className="bio">
            <h4>Hi there. I'm</h4>
            <h1 id="name">Shula.</h1>
            <h3 id="skill" className="sub-header-style">A Photographer.</h3>
            <p className="bio">I take breath taking photos. Freezing time, and creating lasting memories.</p>
            <button className="contact-btn">Contact me</button>
        </div>
        <div className="works">
            <h2>Event photography</h2>
            <img src='samuel-pereira-uf2nnANWa8Q-unsplash.jpgs' alt='item' />
            <p>We give the best service in town.</p>
        </div>
        <div className="gallary">

        </div>
        <div className="contact">
            <h2>Get in touch.</h2>
            <p>Email: myemail@gmail.com</p>
            <p>phone: 081xxxx000</p>
        </div>
        </>
    )
};

export default Profile;