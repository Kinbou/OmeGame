import { GET_OFFER_ID, SAVE_OFFERS, SAVE_ONE_OFFER } from 'src/actions/offers';

const initialState = {
  allOffers: [],
  offer: {
    id: 0,
    status: '',
    type: '',
    is_available: true,
    title: '',
    price: 0,
    description: '',
    postal_code: '',
    city: '',
    latitude: '',
    longitude: '',
    createdAt: '',
    updatedAt: '',
    userId: 0,
    gameId: 0,
    game: {
      id: 0,
      status: '',
      name: '',
      nb_players_min: 0,
      nb_players_max: 0,
      age_min: 0,
      duration: null,
      description: '',
      year: null,
      image: null,
      createdAt: '',
      updatedAt: '',
      gameCategoryId: 0,
      game_category: {
        id: 0,
        name: '',
        createdAt: '',
        updatedAt: '',
      },
    },
  },
  urlId: '',
};

const offersReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_OFFER_ID:
      return {
        ...state,
        urlId: action.offerId,
      };

    case SAVE_OFFERS:
      return {
        ...state,
        allOffers: action.data,
        // loading: false,
      };
    case SAVE_ONE_OFFER:
      return {
        ...state,
        offer: action.offer,
      };
    default: return state;
  }
};

export default offersReducer;