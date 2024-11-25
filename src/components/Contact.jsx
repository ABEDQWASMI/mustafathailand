import { Button, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import "../styles/Contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";

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

    // Here you would typically send this to your backend
    const payload = {
      name,
      email,
      mobile,
      message,
      destination
    };

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
      <div className="contactForm">
        <Heading>Contact Us</Heading>
        {destination && (
          <p className="inquiry-destination">
            Inquiry about: {destination}
          </p>
        )}
        <div className="formInputs">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="row">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <Button id="btn" onClick={handleSubmit}>
          Send
        </Button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Contact;
