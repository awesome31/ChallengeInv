const getVendorData = (selectedRow, vendors) => {
  const vendor = vendors.find(
    (vendor) => vendor.vendorId === selectedRow.vendorId
  );
  return vendor;
};

const getInvoiceData = (selectedRow, invoices) => {
  const invoice = invoices.find(
    (invoice) => invoice.invoiceId === selectedRow.invoiceId
  );
  return invoice;
};

const applyCredit = (vendors, vendorId, amountDue) =>
  vendors.map((vendor) => {
    if (vendor.vendorId === vendorId) {
      return { ...vendor, creditBal: vendor.creditBal - amountDue };
    }
    return vendor;
  });

const setInvoiceData = (invoices, vendor, inv) =>
  invoices.map((invoice) => {
    if (invoice.invoiceId === inv.invoiceId) {
      return {
        ...invoice,
        amountDue:
          invoice.amountDue - vendor.creditBal <= 0
            ? 0
            : invoice.amountDue - vendor.creditBal <= 0,
      };
    }
    return invoice;
  });

export { getVendorData, applyCredit, setInvoiceData, getInvoiceData };
