import "./Testimonials/contact.css";
import {FaFacebook} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaPhone} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaDiscord} from "react-icons/fa";
const Contact = () => {
  return (
    <div className ="contactp">
      <section className="contactsection">
        <div className="contactsectionmap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8477556938956!2d36.79959500860465!3d-1.2638109355926066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f176abd83a485%3A0xbdebfa0dbd561b41!2sWestlands%20Square%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1717856179286!5m2!1sen!2ske"
            width="600"
            height="450"
            loading="lazy"
    
          ></iframe>
          <div className="contactlinks">
          <p>reach us at our headquaters</p>
          <h3> follow us on our socials</h3>
          <a href ="www.meta.com">{<FaFacebook/>}facebook </a>
          <a href ="www.meta.com">{<FaTwitter/>}twitter </a>
          <a href ="www.meta.com">{<FaInstagram/>}instagram </a>
          <a href ="www.meta.com">{<FaLinkedin/>}linkedin </a>
          <a href ="www.meta.com">{<FaDiscord/>}discord </a>
          <a href ="07112233445">{<FaPhone/>} 07112233445</a>
          </div>
        </div>

        <div className="contactsection">
          <form className="contact-form">
            <h2>contact us</h2>
            <div className="contactform">
              <label htmlFor="fullName">full name</label>
              <input
                type="text"
                id="fullName"
                className="contactforminput"
                placeholder="full name"
              />
            </div>
            <div className="contactform">
              <label htmlFor="email">email address</label>
              <input
                type="email"
                id="email"
                className="contactforminput"
                placeholder="email address"
              />
            </div>
            <div className="contactform">
              <label htmlFor="phone">phone number</label>
              <input
                type="number"
                id="phone"
                className="contactforminput"
                placeholder="phone number"
              />
            </div>
            <div className="contactform">
              <label htmlFor="message">message</label>
              <textarea
                id="message"
                placeholder="tellus about your expirience"
                className="message-input"
              ></textarea>
            </div>
            <button className="submit-btn">send</button>
          </form>
        </div>
      </section>
    </div>
  );
};
export default Contact;
