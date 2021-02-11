import React from 'react';
import { connect } from 'react-redux'
import { closeModal } from '../../redux/modal/modal.actions';

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";


import './modal.styles.scss';

const Modal = ({ modal, closeModal }) => {
  if(!modal) {
    return null;
  };
  
  return (
    <div className="modal-background" onClick={closeModal} >
      <div className="modal-child" onClick={e => e.stopPropagation()} >
        <SignIn />
        <SignUp />
      </div>
    </div>
  )
};

const mapSTP = (state) => {
  if(!state.modal) {
    return {
      modal: null
    }
  } else {
    return {
      modal: state.modal
    }
  }
};

const mapDTP = (dispatch) => {
  return ({
    closeModal: () => dispatch(closeModal())
  });
};

export default connect(
  mapSTP,
  mapDTP
)(Modal);