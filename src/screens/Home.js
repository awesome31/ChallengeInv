import React from 'react';
import { connect } from 'react-redux';
import {
  getConfigData,
  setSelectedRow,
  setTableRows,
} from '../store/actions/Home.actions';
import { useEffect } from 'react';
import Table from '../components/Table';
import ModalScreen from '../components/Modal';
import { toggleModal } from '../store/actions/Modal.actions';
import { setVendorData } from '../store/actions/Vendor.action';

const Home = (props) => {
  const {
    adjustEnabled,
    paymentEnabled,
    tableHeaders,
    tableRows,
    setSelectedRow,
    toggleModal,
    selectedRow,
    showModal,
    vendors,
    setVendorData,
    setTableRows,
  } = props;
  useEffect(() => {
    props.getConfigData();
  }, []);
  return (
    <div className="container">
      <Table
        adjustEnabled={adjustEnabled}
        paymentEnabled={paymentEnabled}
        tableHeaders={tableHeaders}
        tableData={tableRows}
        setSelectedRow={setSelectedRow}
        toggleModal={toggleModal}
      />
      <ModalScreen
        selectedRow={selectedRow}
        showModal={showModal}
        toggleModal={toggleModal}
        vendors={vendors}
        setVendorData={setVendorData}
        tableData={tableRows}
        setTableRows={setTableRows}
        paymentEnabled={paymentEnabled}
        adjustEnabled={adjustEnabled}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  tableHeaders: state.home.tableHeaders,
  tableRows: state.home.tableRows,
  paymentEnabled: state.home.paymentEnabled,
  adjustEnabled: state.home.adjustEnabled,
  selectedRow: state.home.selectedRow,
  showModal: state.modal.showModal,
  vendors: state.vendor.vendorData,
});

export default connect(mapStateToProps, {
  getConfigData,
  setSelectedRow,
  toggleModal,
  setVendorData,
  setTableRows,
})(Home);
