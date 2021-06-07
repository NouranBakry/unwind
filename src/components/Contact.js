import React from "react";
import "./Contact.css";
import Nav from "./Nav";


const Contact = () => {
  return(
    <div className="Contact-Page">
        <Nav/>
        <div className="contact-page-container">
            {/* <div className="email-container">Email: <a className="email-link"href="mailto:nouranaymanbakry@gmail.com">nouranaymanbakry@gmail.com</a>
            </div> */}
        </div>
    </div>
  );
};

export default Contact;