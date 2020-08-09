import { combineReducers } from 'redux';
import HomeReducer from './reducers/Home.reducer';
import VendorReducer from './reducers/Vendor.reducer';
import ModalReducer from './reducers/Modal.reducer';

const rootReducer = combineReducers({
  home: HomeReducer,
  vendor: VendorReducer,
  modal: ModalReducer,
});

export default rootReducer;
