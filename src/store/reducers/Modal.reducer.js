import { AppActionTypes } from '../actionTypes';
const initialState = {
  showModal: false,
};

const ModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case AppActionTypes.TOGGLE_MODAL:
      return { showModal: !state.showModal };
    default:
      return state;
  }
};

export default ModalReducer;
