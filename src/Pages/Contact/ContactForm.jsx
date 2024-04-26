import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your EmailJS service ID, template ID, and user ID
    const serviceId = 'service_vrax5td';
    const templateId = 'template_bgk1qjh';
    const userId = '7jQaBcJfpCnb0ji-s'; // Replace 'YOUR_USER_ID' with your actual User ID

    emailjs.send(serviceId, templateId, formData, userId)
      .then((response) => {
        console.log('Email sent successfully!', response);
        // Clear the form after successful submission
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div className="contact-description">
      <div>
        <h1>KEEP IN TOUCH</h1>
        <p>Feel free to contact me with any questions, comments, or concerns!</p>
        <p>github.com/MoraceA</p>
        <p>linkedin.com/in/arianamorace/</p>

      </div>
      <div className="contact-me-section">
        <div>
          <h1>CONTACT ME</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
