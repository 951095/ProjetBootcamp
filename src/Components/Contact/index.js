// ContactForm.js
import React, { useState } from 'react';
import Button from "../UI/Button";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gérer l'envoi du formulaire ici (par exemple, envoyer les données à un serveur)
    console.log(formData);
  };


  const handleRegisterClick = () => {
    // This function is called when the "Register" button is clicked
    // You can log the form data here or perform any other action
    alert('message sent successfully!');
    console.log(formData);
  };
  return (
    <form onSubmit={handleSubmit} className="registration__form">
      <div className="form__group">
        <label htmlFor="firstName">Prénom :</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form__group">
        <label htmlFor="lastName">Nom de famille :</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form__group">
        <label htmlFor="subject">Objet :</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form__group">
        <label htmlFor="message">Message :</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
        ></textarea>
      </div>
      <Button title="Register" onClick={handleRegisterClick} />
    </form>
  );
}

export default ContactForm;
