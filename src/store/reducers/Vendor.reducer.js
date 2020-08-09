const { AppActionTypes } = require('../actionTypes');

const initialState = {
  vendorData: [],
};

const VendorReducer = (state = initialState, action) => {
  switch (action.type) {
    case AppActionTypes.SET_VENDOR_DATA:
      return { ...state, vendorData: action.payload.vendors };
    case AppActionTypes.CLEAR_VENDOR_DATA:
      return { ...state, vendorData: [] };
    default:
      return state;
  }
};

export default VendorReducer;
