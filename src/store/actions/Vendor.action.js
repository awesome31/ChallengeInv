const { AppActionTypes } = require('../actionTypes');

const setVendorData = (vendors) => ({
  type: AppActionTypes.SET_VENDOR_DATA,
  payload: {
    vendors,
  },
});

export { setVendorData };
