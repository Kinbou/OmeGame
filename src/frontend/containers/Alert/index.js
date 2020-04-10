import { connect } from 'react-redux';
import Alert from 'src/frontend/components/Alert';
import { displayAlert } from 'src/actions/global';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  message: state.global.alertMessage,
  success: state.global.alertSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  displayAlert: () => {
    dispatch(displayAlert());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Alert);
