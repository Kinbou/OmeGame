import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTitle } from 'src/hooks/useTitle';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './offers.scss';

const AccountOffers = ({ data, fetchOffers }) => {
  useTitle('Mes offres');
  useEffect(() => {
    fetchOffers();
  }, []);

  return (
    <div className="wrapper accountOffers">
      <div className="reservations__breadcrumb">
        <Link to="/">Accueil ></Link>
        <Link to="/compte"> Mon compte > </Link>
        Offres
      </div>
      <div className="accountOffers__global">
        <h1 className="accountOffers__global__title">Mes Offres</h1>
        <Link
          className="global-button accountOffers__global__createOffer"
          to="/compte/offres/ajouter"
        >
          Créer une offre
        </Link>
      </div>
      <ul className="accountOffers__listOffers">
        {data.map((offer) => (
          <li className="accountOffers__listOffers__offer" key={offer.id}>
            <div className="accountOffers__listOffers__offer__left">
              <img className="accountOffers__listOffers__offer__left__picture" src="https://cdn3.trictrac.net/documents/formats/thumb_300_300/documents/originals/29/2c/676d3ba08cf231daf0fc67c709bc0ba8a6468f2fb878061c99c16e6f751d.jpeg" alt="" />
              <div className="accountOffers__listOffers__offer__left__content">
                <h2 className="accountOffers__listOffers__offer__left__content__subtitle">{offer.title}<span className="accountOffers__listOffers__offer__left__content__subtitle__euro"> ({offer.price} €)</span></h2>
                <h3 className="">Nom du jeu : {offer.game.name}</h3>
                <h3>Client : {offer.userId}</h3>
                <h3>Date : {offer.createdAt}</h3>
              </div>
              <div
                className={offer.is_available ? 'accountOffers__listOffers__offer__left__status' : 'accountOffers__listOffers__offer__left__status accountOffers__listOffers__offer__left__status--off'}
              >{offer.is_available ? 'disponible' : 'indisponible'}
              </div>
            </div>
            <div className="accountOffers__listOffers__offer__right">
              <Link to="" className="global-button global-button--light"><i className="fas fa-pencil-alt accountOffers__listOffers__offer__right__pencil" /> Modifier</Link>
              <Link to="" className="global-button global-button--light"><i className="fas fa-trash-alt accountOffers__listOffers__offer__right__trash" /> Supprimer</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

AccountOffers.propTypes = {
  fetchOffers: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default AccountOffers;
