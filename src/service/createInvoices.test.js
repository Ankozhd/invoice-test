/* eslint-disable */
import createInvoices from './createInvoices';
import { testProducts, expectedInvoices } from './testData';

test('create invoices', () => {
  const invoices = createInvoices(testProducts);
  expect(invoices).toMatchObject(expectedInvoices);
});
