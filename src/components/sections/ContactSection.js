import React, { useState } from "react";
const ContactSection = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { firstName, lastName, email, message };
    fetch("http://localhost:8080/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log("data submitted");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="contact-section">
      <h2>Contact Us</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="first-row">
          <div className="label-input">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              id="firstName"
              required
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>

          <div className="label-input">
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              id="lastName"
              required
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="label-input">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="label-input">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </div>

        <div className="button" onClick={handleSubmit}>
          Submit
        </div>
      </form>
    </div>
  );
};

export default ContactSection;
