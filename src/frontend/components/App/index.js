// == Import npm
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  Route, Switch, useLocation,
} from 'react-router-dom';
import Header from 'src/frontend/containers/Header';
import Footer from 'src/frontend/components/Footer';
import Home from 'src/frontend/containers/Home';
import About from 'src/frontend/components/About';
import Offer from 'src/frontend/containers/Offer';
import AccountProfil from 'src/frontend/components/Account/Profil';
import AccountOffers from 'src/frontend/containers/Account/Offers';
import AccountOffersAdd from 'src/frontend/containers/Account/Offers/Form';
import LegalMentions from 'src/frontend/components/Legal-mentions';
import Contact from 'src/frontend/containers/Contact';
import Account from 'src/frontend/containers/Account';
import Details from 'src/frontend/containers/Offer/Details';
import Reservations from 'src/frontend/containers/Account/Reservations';

import NotFound from 'src/frontend/containers/NotFound';

import Alert from 'src/frontend/containers/Alert';
// TODO : créer un menu lorsqu'on est connecté

// == Composant
const App = ({ isLogged, showAlert, isError }) => {
  const location = useLocation();
  // return the current pathname
  const currentPath = location.pathname;
  const isHome = currentPath === '/';

  const appClass = classNames('app', {
    'app--light': isHome,
    'app--error': isError,
  });

  return (
    <div className={appClass}>
      <Header />
      <main>
        {showAlert && <Alert />}
        <Switch>
          {isLogged && (
          <Route exact path="/compte">
            <Account />
          </Route>
          )}
          {isLogged && (
          <Route exact path="/compte/profil">
            <AccountProfil />
          </Route>
          )}
          {isLogged && (
          <Route exact path="/compte/reservations">
            <Reservations />
          </Route>
          )}
          {isLogged && (
          <Route exact path="/compte/offres">
            <AccountOffers />
          </Route>
          )}
          {isLogged && (
          <Route exact path="/compte/offres/ajouter">
            <AccountOffersAdd />
          </Route>
          )}
          {isLogged && (
          <Route exact path="/compte/offre/:slug">
            <AccountOffersAdd />
          </Route>
          )}
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/a-propos">
            <About />
          </Route>
          <Route exact path="/recherche/jeux">
            <Offer />
          </Route>
          <Route exact path="/mentions-legales">
            <LegalMentions />
          </Route>
          <Route exact path="/recherche/jeux/:id/:slug">
            <Details />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </main>
      <Footer isHome={isHome} />
    </div>
  );
};

App.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  showAlert: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
};
// == Export
export default App;
