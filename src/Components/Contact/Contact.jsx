import React, { useState } from "react";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt, FaAddressBook } from "react-icons/fa";
import contact_bg from "../../images/contact-bg-img1.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setError("All fields are required.");
      return;
    }
    setError("");
    setSubmitted(true);
    console.log("Form Data:", formData);
  };

  return (
    <div className="contact-section" id="contact">
      <div className="contact_bg">
        <img src={contact_bg} alt="" />
      </div>
      <div className="container">
        <h2 className="text-center">Contact Me</h2>

        <div className="row align-items-start position-relative z-2">
          <div className="col-lg-6">
            <h3 className="mt-5 ms-3 mb-3">Let's work together!</h3>
            <div className="d-flex align-items-center mt-5">
              <IoIosMail className="me-4 icon" />
              <div>
                <h4 className="mb-2">Email</h4>
                <a href="mailto:akashtharmaraj@gmail.com">akashtharmaraj@gmail.com</a>
              </div>
            </div>
            <div className="d-flex align-items-center mt-5">
              <FaPhoneAlt className="icon me-4" />
              <div>
                <h4 className="mb-2">Phone</h4>
                <a href="tel:9361880362">9361880362</a>
              </div>
            </div>
            <div className="d-flex align-items-center mt-5">
              <FaAddressBook className="icon me-4" />
              <div>
                <h4 className="mb-2">Address</h4>
                <p>Alangudi, Pudukkottai, Tamilnadu</p>{" "}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-box">
              {submitted ? (
                <div className="success-message">
                  <p className="mt-5 text-center h2 text-success">
                    Thank you, {formData.name}! <br /> Your message has been sent.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group mt-5">
                    <label htmlFor="name" className="mb-2 ps-4">
                      Name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mt-4">
                    <label htmlFor="email" className="mb-2 ps-4">
                      Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mt-4">
                    <label htmlFor="message" className="mb-2 ps-4">
                      Message:
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here"
                      className="form-control"
                    />
                  </div>
                  {error && <p className="error mt-4 ps-4 text-danger">{error}</p>}
                  <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-warning mt-3">
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
