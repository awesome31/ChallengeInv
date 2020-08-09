import React from 'react';
import {
  getHeaderData,
  getKeys,
  transformTableData,
} from '../utils/Home.utils';
import Header from './Header';
import Row from './Row';

const Table = ({
  tableHeaders,
  tableData,
  paymentEnabled,
  adjustEnabled,
  setSelectedRow,
  toggleModal,
}) => {
  const tKeys = getKeys(tableHeaders);
  const transfomedData = transformTableData(
    tableData,
    tKeys,
    paymentEnabled,
    setSelectedRow,
    toggleModal
  );

  return (
    <table className="table table-bordered">
      <thead>
        <Header data={getHeaderData(tableHeaders)} />
      </thead>
      <tbody>
        {transfomedData.map((row) => (
          <Row data={row} key={row[2]} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
