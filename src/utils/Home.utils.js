import React from 'react';

const getTableMeta = (columns) =>
  columns.reduce(
    (acc, column) => ({
      ...acc,
      [column.fieldName]: column.display ? column.displayName : '',
    }),
    {}
  );

const getTableHeaders = (columns) =>
  Object.keys(columns).reduce((acc, col) => {
    return acc.concat({
      displayName: columns[col],
      display: columns[col] !== '',
      key: col,
    });
  }, []);

const getHeaderData = (tableHeaders) => {
  const tHeaders = tableHeaders.reduce((acc, header) => {
    if (header.display) {
      return acc.concat(header.displayName);
    } else {
      return acc;
    }
  }, []);

  return tHeaders.concat('');
};

const getKeys = (tableHeaders) =>
  tableHeaders.reduce((acc, header) => {
    return { ...acc, [header.key]: header.display };
  }, {});

const transformTableData = (
  tableData,
  tableKeys,
  paymentEnabled,
  setSelectedRow,
  toggleModal
) =>
  tableData.map((data) => {
    const valArr = Object.keys(tableKeys).reduce((acc, d) => {
      if (tableKeys[d] && data[d] !== undefined) {
        return acc.concat(data[d]);
      }
      return acc;
    }, []);

    return valArr.concat(
      <button
        type="button"
        className="btn btn-primary"
        disabled={!paymentEnabled || data.amountDue <= 0}
        onClick={() => {
          setSelectedRow(data);
          toggleModal();
        }}
      >
        Payment
      </button>
    );
  });

export {
  getTableMeta,
  getTableHeaders,
  getHeaderData,
  getKeys,
  transformTableData,
};
