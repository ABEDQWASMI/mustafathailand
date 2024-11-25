import { Button, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import "../styles/Contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
import mountain from "../assets/mountain.jpg";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const location = useLocation();
  const destination = location.state?.destination;

  const handleSubmit = () => {
    if (email === "" || mobile === "" || message === "" || name === "") {
      toast.error(`Please fill in all required fields.😕`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    // Show success message
    toast.success(`Thank you for your inquiry! We'll contact you soon.`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    // Clear form
    setName("");
    setEmail("");
    setMobile("");
    setMessage("");
  };

  return (
    <div id="contact">
      <div className="contact-container">
        <div className="contact-image"></div>
        <div className="contact-form">
          <Heading size="lg" mb={6}>Contact Us</Heading>
          {destination && (
            <p className="inquiry-destination">
              Inquiry about: {destination}
            </p>
          )}
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              placeholder="Mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
            />
          </div>
          <Button 
            className="contact-button"
            onClick={handleSubmit}
          >
            Send Message
          </Button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
