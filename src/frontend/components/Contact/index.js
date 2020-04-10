/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './contact.scss';
import Alert from 'src/frontend/containers/Alert';

const Contact = ({ displayAlert, showAlert }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    displayAlert();
  };
  return (
    <div className="wrapper contact">
      {showAlert && (<Alert />)}
      <h1 className="contact__title">Contact</h1>
      <form className="contact__form">
        <input className="contact__form__input global-input" placeholder="Nom" />
        <input className="contact__form__input global-input" placeholder="Prénom" />
        <input className="contact__form__input global-input" type="email" placeholder="Adresse email" />
        <textarea className="contact__form__textarea global-input" type="text" placeholder="Message" />
        <div className="contact__form__checkbox">
          <label>
            <input type="checkbox" className="contact__form__checkbox__input" /> Accepter <Link target="_blank" to="/mentions-legales" className="contact__form__checkbox__input__link">les mentions légales</Link>
          </label>
        </div>
        <button className="contact__form__button global-button" type="submit" onClick={handleSubmit}>Envoyer</button>
      </form>
    </div>
  );
};

Contact.propTypes = {
  displayAlert: PropTypes.func.isRequired,
  showAlert: PropTypes.bool.isRequired,
};

export default Contact;
