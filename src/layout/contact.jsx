import React from 'react';
import '../style/contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faPhone} from '@fortawesome/free-solid-svg-icons'
import{faLink} from '@fortawesome/free-solid-svg-icons'
import{faEnvelope} from '@fortawesome/free-solid-svg-icons'
import{faLocationDot} from '@fortawesome/free-solid-svg-icons'

const ContactLayout = () => {
    return (
        <div>
            <div className="container">
               
                <div className="">
                    <div className="col-md-6 ">
                        <div className="contact-info">
                        <label className="form-label">Contact Me</label>
                        <p>
                        <FontAwesomeIcon icon={faPhone} className="contact-icon " />
                        <a href="tel:0919161845" className="contact-link">0919161845</a>
                        </p>
                        <p> 
                            <FontAwesomeIcon icon={faLink} className="contact-icon" />
                            <a href="https://github.com/trung761" target="_blank" rel="noopener noreferrer" className="contact-link">
                            https://github.com/trung761
                            </a>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                            <a href="mailto:nmtrung761@gmail.com" className="contact-link">nmtrung761@gmail.com</a>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faLocationDot} className="contact-icon" />
                            <span className="contact-text">Ninh Kieu District, Can Tho City</span>
                        </p>
                        </div>

                        
                    </div>
                    <div className="col-md-6 ">
                        {/* <label className="contact-title">Email</label>
                        <input type="text" name="email" id="email" /> */}
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default ContactLayout;
