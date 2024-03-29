/* eslint-disable */
import createInvoices from './createInvoices';
import {
  testProducts,
  expectedInvoices,
  product500,
  expectedInvoice500,
  products256,
  expectedInvoices256,
  products389,
  expectedInvoices389,
  multipleProductsWithDifferentPrices,
  expectedInvoicesMultipleProducts,
  multipleDifferentProducts,
  expectedInvoicesMultipleDifferentProducts,
} from './testData';

test('create invoices with data from task', () => {
  const invoices = createInvoices(testProducts);
  expect(invoices).toMatchObject(expectedInvoices);
});

test('create invoice for one product with price = 500', () => {
  const invoices = createInvoices(product500);
  expect(invoices).toMatchObject(expectedInvoice500);
});

test('create invoices for two products with price = 256', () => {
  const invoices = createInvoices(products256);
  expect(invoices).toMatchObject(expectedInvoices256);
});

test('create invoices for 389 products with price = 1', () => {
  const invoices = createInvoices(products389);
  expect(invoices).toMatchObject(expectedInvoices389);
});

test('create invoices for one product with price 256 ant qty = 2 and product with price 1', () => {
  const invoices = createInvoices(multipleProductsWithDifferentPrices);
  expect(invoices).toMatchObject(expectedInvoicesMultipleProducts);
});

test('create invoices for multiple different products', () => {
  const invoices = createInvoices(multipleDifferentProducts);
  expect(invoices).toMatchObject(expectedInvoicesMultipleDifferentProducts);
});

