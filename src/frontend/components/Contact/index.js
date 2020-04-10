import React from 'react';
import { Link } from 'react-router-dom';
import './contact.scss';

const Contact = () => (
  <div className="wrapper contact">
    <h1 className="contact__title">Contact</h1>
    <form className="contact__form">
      <input className="contact__form__input global-input" placeholder="Nom" />
      <input className="contact__form__input global-input" placeholder="Prénom" />
      <input className="contact__form__input global-input" type="email" placeholder="Adresse email" />
      <textarea className="contact__form__textarea global-input" type="text" placeholder="Message" />
      <div className="contact__form__checkbox">
        <label htmlFor>
          <input type="checkbox" className="contact__form__checkbox__input" /> Accepter <Link target="_blank" to="/mentions-legales" className="contact__form__checkbox__input__link">les mentions légales</Link>
        </label>
      </div>
      <button className="contact__form__button global-button" type="submit">Envoyer</button>
    </form>
  </div>

);

export default Contact;