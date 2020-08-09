// TODO: Need to define how the config API should be structured.

const dummyConfigRes = {
  //We should have an array of all the endpoints, and the data that those endpoints will give.
  tableConfig: {
    //This will be an object of the ations that the users can perform on a particular column.
    paymentEnabled: true,
    adjustEnabled: false,
    columns: [
      {
        fieldName: 'vendorId',
        displayName: 'Vendor ID',
        display: false,
        filteringEnabled: false,
        sortingEnabled: true,
      },
      {
        fieldName: 'quantity',
        displayName: 'Quantity',
        display: false,
        filteringEnabled: false,
        sortingEnabled: false,
      },
      {
        fieldName: 'product',
        displayName: 'Product Name',
        display: false,
        filteringEnabled: false,
        sortingEnabled: false,
      },
      {
        fieldName: 'amountBal',
        displayName: 'Amount Balance',
        display: true,
        filteringEnabled: false,
        sortingEnabled: true,
      },
      {
        fieldName: 'amountDue',
        displayName: 'Amount Due',
        display: true,
        filteringEnabled: false,
        sortingEnabled: true,
      },
      {
        fieldName: 'invoiceDate',
        displayName: 'Invoice Date',
        display: true,
        filteringEnabled: false,
        sortingEnabled: true,
      },
    ],
  },

  dataEndPoints: {
    call2: {
      endpoint: '/invoices',
      method: 'GET',
    },
    call3: {
      endpoint: '/vendors',
      method: 'GET',
    },
    creditPost: {
      endpoint: '/credit/apply',
      method: 'POST',
    },
    paymentPost: {
      endpoint: '/payment',
      method: 'POST',
    },
  },
};

/**
 * {
	//Table Configuration
	tableConfig:{
		//Define config for All columns
		paymentEnabled: false //if action enabled is true, then there will be a last column with Button, which when clicked will open the modal - that either shows Adjust / Payment or Both
		adjustEnabled : true // if payment is enabled and Adjustment is enabled, then the user can use Credit. else he can only do payment (using credit card)
		columns:[
			{
				"fieldName": "vendorId",
				"displayName" : "Vendor ID"
				"display" : false,
				"filteringEnabled" : false
				"sortingEnabled" : true

			},

		],
	},
	"dataEndPoints" :{
		"call2" : {

		},
		"call3" : {

		},
		"creditPost" : {

		},
		"paymentPost" : {

		}
	},

}
 */

const invoiceApiRes = [
  {
    invoiceId: 1234,
    vendorId: 'G1',
    quantity: 20,
    product: 'Apple',
    amountBal: 129.92,
    amountDue: 25.5,
    invoiceDate: '04 / 01 / 2020',
  },
  {
    invoiceId: 4578,
    vendorId: 'D1',
    product: 'Sauce',
    quantity: 500,
    amountBal: 1024.12,
    amountDue: 512.5,
    invoiceDate: '03 / 31 / 2020',
  },
  {
    invoiceId: 9999,
    vendorId: 'W1',
    quantity: 1000,
    product: 'Napkin',
    amountBal: 12.25,
    amountDue: 12.25,
    invoiceDate: '03 / 31 / 2020',
  },
  {
    invoiceId: 1000,
    vendorId: 'W1',
    quantity: 25,
    product: 'Sanitizer',
    amountBal: 25.0,
    amountDue: 12.25,
    invoiceDate: '03 / 31 / 2020',
  },
  {
    invoiceId: 1025,
    vendorId: 'W1',
    quantity: 1000,
    product: 'Napkin',
    amountBal: 0,
    amountDue: 0,
    invoiceDate: '03 / 31 / 2020',
  },
];

const vendorApiRes = [
  {
    vendorId: 'D1',
    vendorName: 'Delmonte',
    creditBal: 600.0,
  },
  {
    vendorId: 'T1',
    vednorName: 'Target',
  },
  {
    vendorId: 'W1',
    vendorName: 'Walmart',
    creditBal: 12.25,
  },
  {
    vendorId: 'G1',
    creditBal: 0.0,
    vendorName: 'Girlo',
  },
];

const getConfig = () => Promise.resolve(dummyConfigRes);
const getInvoice = () => Promise.resolve(invoiceApiRes);
const getVendors = () => Promise.resolve(vendorApiRes);

export { getConfig, getInvoice, getVendors };
