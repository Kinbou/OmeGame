import React from 'react';
import { Link } from 'react-router-dom';
import './reservations.scss';
import PropTypes from 'prop-types';
import Modal from 'src/frontend/containers/Modal';
import Details from './Details';

const Reservations = ({ showModal, displayModal }) => {

  const handleModal = () => {
    displayModal('reservation');
  };

  return (
    <div className="wrapper reservations">
      {showModal === 'reservation' && (
        <Modal content={<Details />} />
      )}
      <div className="reservations__breadcrumb">
        <Link to="/">Accueil ></Link>
        <Link to="/compte"> Mon compte ></Link>
        <Link to="/compte/reservations"> Mes reservations</Link>
      </div>
      <h1 className="reservations__title">Mes réservations</h1>
      <ul>
        <li className="reservations__container">
          <div className="reservations__container__item">
            <div className="reservations__container__item__left">
              <img className="reservations__container__item__left__picture" src="https://cdn3.trictrac.net/documents/formats/thumb_300_300/documents/originals/29/2c/676d3ba08cf231daf0fc67c709bc0ba8a6468f2fb878061c99c16e6f751d.jpeg" alt="" />
              <div className="reservations__container__item__left__text">
                <h2 className="reservations__container__item__left__text__subtitle">Nom de l'offre <span className="reservations__container__item__left__text__status">Status</span></h2>
                <h3 className="reservations__container__item__left__text__third">Nom du jeu</h3>
              </div>
            </div>
            <div className="reservations__container__item__right">
              <button className="reservations__container__item__right__button global-button global-button--light" type="button" onClick={handleModal}> <i className="far fa-eye" /> Voir plus</button>
              <button className="reservations__container__item__right__button global-button global-button--light" type="button"> <i className="fas fa-times" /> Annuler</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

Reservations.propTypes = {
  showModal: PropTypes.string.isRequired,
  displayModal: PropTypes.func.isRequired,
};
export default Reservations;
