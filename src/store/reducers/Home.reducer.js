import { AppActionTypes } from '../actionTypes';

const initialState = {
  tableHeaders: [],
  tableRows: [],
  paymentEnabled: false,
  adjustEnabled: false,
  selectedRow: {},
};

//In this reducer we have the ability to get the table headers.
const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case AppActionTypes.SET_TABLE_HEADERS:
      return { ...state, tableHeaders: action.payload.headers };
    case AppActionTypes.SET_TABLE_DATA:
      return {
        ...state,
        tableRows: action.payload.data,
        paymentEnabled: action.payload.paymentEnabled,
        adjustEnabled: action.payload.adjustEnabled,
      };
    case AppActionTypes.CLEAR_TABLE_DATA:
      return {
        ...state,
        tableHeaders: [],
        tableRows: [],
        paymentEnabled: false,
        adjustEnabled: false,
        selectedRow: {},
      };
    case AppActionTypes.SET_SELECTED_ROW:
      return {
        ...state,
        selectedRow: action.payload.row,
      };
    default:
      return state;
  }
};

export default HomeReducer;
