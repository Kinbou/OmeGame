import {
  CHANGE_INPUT_OF_LOGIN, LOG_USER, SUBMIT_LOGIN, CHANGE_LOGIN_ERROR, CLEAR_LOGIN_ERROR, LOG_OUT,
} from 'src/actions/user';

const initialState = {
  email: '',
  password: '',
  isLogged: false,
  userData: null,
  loginError: '',
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_OF_LOGIN:
      if (action.inputIdentifier === 'email') {
        return {
          ...state,
          email: action.newValue,
        };
      }
      if (action.inputIdentifier === 'password') {
        return {
          ...state,
          password: action.newValue,
        };
      }
      break;
    case LOG_USER:
      return {
        ...state,
        isLogged: true,
        userData: action.userData,
        password: '',
        email: '',
      };
    case SUBMIT_LOGIN:
      return {
        ...state,
      };
    case CHANGE_LOGIN_ERROR:
      return {
        ...state,
        loginError: action.message,
        password: '',
      };
    case CLEAR_LOGIN_ERROR:
      return {
        ...state,
        loginError: '',
      };
    case LOG_OUT:
      return {
        ...state,
        isLogged: false,
        userData: '',
      };
    default:
      return state;
  }
};

export default userReducer;
