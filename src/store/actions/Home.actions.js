import {
  getConfig,
  getInvoice,
  getVendors,
} from '../../configuration/dummyConfigRes';
import { getTableMeta, getTableHeaders } from '../../utils/Home.utils';
import { setVendorData } from './Vendor.action';
const { AppActionTypes } = require('../actionTypes');

const setTableHeaders = (headers) => ({
  type: AppActionTypes.SET_TABLE_HEADERS,
  payload: {
    headers,
  },
});

const setTableRows = (data, paymentEnabled, adjustEnabled) => ({
  type: AppActionTypes.SET_TABLE_DATA,
  payload: {
    data,
    paymentEnabled,
    adjustEnabled,
  },
});

const setSelectedRow = (row) => ({
  type: AppActionTypes.SET_SELECTED_ROW,
  payload: {
    row,
  },
});

const getConfigData = () => (dispatch) => {
  let tableMeta = {};
  let paymentEnabled;
  let adjustEnabled;

  getConfig()
    .then((res) => {
      return {
        tableMeta: getTableMeta(res.tableConfig.columns),
        paymentEnabled: res.tableConfig.paymentEnabled,
        adjustEnabled: res.tableConfig.adjustEnabled,
        call2: res.dataEndPoints.call2,
        call3: res.dataEndPoints.call3,
      };
    })
    .then((res) => {
      dispatch(setTableHeaders(getTableHeaders(res.tableMeta)));
      getInvoice(res.call2.method, res.call2.endpoint)
        .then((inRes) => {
          dispatch(setTableRows(inRes, res.paymentEnabled, res.adjustEnabled));
          return getVendors(res.call3.method, res.call3.endpoint);
        })
        .then((venRes) => {
          dispatch(setVendorData(venRes));
        });
    });
};

export { setTableHeaders, setTableRows, getConfigData, setSelectedRow };
