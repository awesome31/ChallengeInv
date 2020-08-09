import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import StripeCheckoutButton from './StripeButton';
import {
  getVendorData,
  applyCredit,
  setInvoiceData,
  getInvoiceData,
} from '../utils/Modal.utils';
import { useEffect } from 'react';

const ModalScreen = ({
  selectedRow,
  showModal,
  toggleModal,
  vendors,
  setVendorData,
  tableData,
  setTableRows,
  adjustEnabled,
  paymentEnabled,
}) => {
  const [stepOne, setStepOne] = useState(true);
  const vendor = getVendorData(selectedRow, vendors);
  const invoice = getInvoiceData(selectedRow, tableData);

  return (
    <Modal show={showModal} onHide={toggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>Pay Dues</Modal.Title>
      </Modal.Header>
      {invoice && invoice.amountDue ? (
        <div className="container">
          <p>
            Amount Due:{' '}
            <span className="font-weight-bold">
              {invoice && invoice.amountDue}
            </span>
          </p>
          <p>
            Vendor Name:{' '}
            <span className="font-weight-bold">
              {vendor && vendor.vendorName}
            </span>
          </p>
          <p>
            Credit Balance:{' '}
            <span className="font-weight-bold">
              {vendor && vendor.creditBal}
            </span>
          </p>
        </div>
      ) : (
        <div className="container">
          <h5>Payment Done! Thank you!</h5>
        </div>
      )}
      <Modal.Footer>
        {stepOne && vendor && vendor.creditBal ? (
          <>
            <Button variant="secondary" onClick={() => setStepOne(false)}>
              Do Not Apply
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                setTableRows(
                  setInvoiceData(tableData, vendor, invoice),
                  paymentEnabled,
                  adjustEnabled
                );

                setVendorData(
                  applyCredit(vendors, invoice.vendorId, invoice.amountDue)
                );
                setStepOne(false);
              }}
            >
              Apply
            </Button>
          </>
        ) : (
          invoice &&
          invoice.amountDue !== 0 && (
            <div onClick={() => toggleModal()}>
              <StripeCheckoutButton price={25} />
            </div>
          )
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default ModalScreen;
