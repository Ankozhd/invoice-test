const INVOICE_TOTAL_LIMIT = 500;
const MAX_QUANTITY = 50;

const createInvoices = (products) => {
  let calculatedInvoices = [];
  const currentProducts = [...products];
  if (currentProducts.length === 0) return [];

  const items = [];
  let total = 0;
  let subtotal = 0;
  let totalVat = 0;

  const savedForNextInvoice = [];

  // go through products until invoice is full, or we are out of products
  while (total <= INVOICE_TOTAL_LIMIT && currentProducts.length > 0) {
    const product = currentProducts.pop();
    const {
      desc, price, vat, quantity: allQuantity, discount,
    } = product;

    let quantity = allQuantity;
    let discountedPrice = (price - discount) * quantity;
    let taxedPrice = discountedPrice + discountedPrice * vat;

    // create separate invoice for items > INVOICE_TOTAL_LIMIT
    if (price >= INVOICE_TOTAL_LIMIT) {
      const item = {
        desc,
        quantity,
        price,
        discount,
        vat: `${vat * 100}%`,
        total: `${(discountedPrice).toFixed(2)} + ${(discountedPrice * vat).toFixed(2)} = ${taxedPrice.toFixed(2)}`,
      };

      // create invoice
      calculatedInvoices.push({
        items: [item],
        subtotal: discountedPrice,
        totalVat: vat,
        total: discountedPrice + discountedPrice * vat,
      });
      // eslint-disable-next-line no-continue
      continue;
    }

    // if quantity exceed MAX_QUANTITY, save what left for next invoice
    if (quantity > MAX_QUANTITY) {
      // check if items at max quantity (MAX_QUANTITY)
      // would not exceed the max price (INVOICE_TOTAL_LIMIT)
      discountedPrice = (price - discount) * MAX_QUANTITY;
      taxedPrice = discountedPrice + discountedPrice * vat;

      if (taxedPrice > INVOICE_TOTAL_LIMIT) {
        // find quantity of products that have taxedPrice less than INVOICE_TOTAL_LIMIT
        quantity = Math.round(INVOICE_TOTAL_LIMIT
                    / ((price - discount) + ((price - discount) * vat)));
        discountedPrice = (price - discount) * quantity;
        taxedPrice = discountedPrice + discountedPrice * vat;
      } else {
        quantity = MAX_QUANTITY;
      }

      // There could be possibility  we skip product entirely in case if it won't fit in invoice
      // so no need to save what's left, because we will save all product
      if (total + taxedPrice < INVOICE_TOTAL_LIMIT) {
        savedForNextInvoice.push({
          desc, price, vat, quantity: allQuantity - quantity, discount,
        });
      }
    }

    // if taxed price exceed limit for invoice
    if (taxedPrice >= INVOICE_TOTAL_LIMIT) {
      // find quantity of products that have taxedPrice less than INVOICE_TOTAL_LIMIT
      quantity = Math.floor(INVOICE_TOTAL_LIMIT
                / ((price - discount) + ((price - discount) * vat)));

      // don't forget skipped products
      savedForNextInvoice.push({
        desc, price, vat, quantity: allQuantity - quantity, discount,
      });

      discountedPrice = (price - discount) * quantity;
      taxedPrice = discountedPrice + discountedPrice * vat;

      const item = {
        desc,
        quantity,
        price,
        discount,
        vat: `${vat * 100}%`,
        total: `${discountedPrice.toFixed(2)} + ${(discountedPrice * vat).toFixed(2)} = ${taxedPrice.toFixed(2)}`,
      };

      // put in current invoice if it fits
      if (total + taxedPrice <= 500) {
        items.push(item);
        subtotal += discountedPrice;
        totalVat += discountedPrice * vat;
        total += taxedPrice;
      } else {
        // create invoice
        calculatedInvoices.push({
          items: [item],
          subtotal: discountedPrice,
          totalVat: discountedPrice * vat,
          total: taxedPrice,
        });
      }
      // eslint-disable-next-line no-continue
      continue;
    }

    const item = {
      desc,
      quantity,
      price,
      discount,
      vat: `${vat * 100}%`,
      total: `${discountedPrice.toFixed(2)} + ${(discountedPrice * vat).toFixed(2)} = ${taxedPrice.toFixed(2)}`,
    };

    if (total + taxedPrice > INVOICE_TOTAL_LIMIT) {
      // in case if invoice will exceed INVOICE_TOTAL_LIMIT,
      // save product for next invoice and skip cycle step
      savedForNextInvoice.push(product);
      // eslint-disable-next-line no-continue
      continue;
    }

    items.push(item);
    subtotal += discountedPrice;
    totalVat += discountedPrice * vat;
    total += taxedPrice;
  }

  // create invoice if there are any items to put
  if (items.length > 0) {
    calculatedInvoices.push({
      items, subtotal, totalVat, total,
    });
  }

  const nextProducts = [...currentProducts, ...savedForNextInvoice];
  calculatedInvoices = calculatedInvoices.concat(createInvoices(nextProducts));

  return calculatedInvoices;
};

export default createInvoices;
