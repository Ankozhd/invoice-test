export const testProducts = [
  {
    desc: 'water', price: 0.25, vat: 0.08, quantity: 240, discount: 0,
  },
  {
    desc: 'chips', price: 2.4, vat: 0.08, quantity: 38, discount: 0,
  },
  {
    desc: 'TV', price: 760, vat: 0.22, quantity: 1, discount: 0,
  },
  {
    desc: 'coca cola', price: 0.5, vat: 0.18, quantity: 77, discount: 0.1,
  },
  {
    desc: 'chocolate bar', price: 1.25, vat: 0.22, quantity: 38, discount: 0,
  },
  {
    desc: 'hand soap', price: 3.78, vat: 0.08, quantity: 92, discount: 0,
  },
  {
    desc: 'fish meat', price: 8.3, vat: 0.18, quantity: 49, discount: 0,
  },
  {
    desc: 'humus', price: 2.66, vat: 0.18, quantity: 16, discount: 0,
  },
  {
    desc: 'white wine', price: 9.2, vat: 0.18, quantity: 18, discount: 0.02,
  },
  {
    desc: 'bananas', price: 1.25, vat: 0.22, quantity: 8, discount: 0,
  },
  {
    desc: 'wine', price: 9.78, vat: 0.22, quantity: 22, discount: 0,
  },
  {
    desc: 'oil', price: 8.3, vat: 0.18, quantity: 10, discount: 0,
  },
  {
    desc: 'cigarettes', price: 5.46, vat: 0.22, quantity: 89, discount: 0,
  },
  {
    desc: 'cookies', price: 1.34, vat: 0.08, quantity: 33, discount: 0,
  }, // 33
  {
    desc: 'yogurts', price: 0.66, vat: 0.18, quantity: 14, discount: 0,
  }, // 14
  {
    desc: 'bleach', price: 1.23, vat: 0.22, quantity: 11, discount: 0,
  }, // 11
  {
    desc: 'napkins', price: 0.21, vat: 0.08, quantity: 85, discount: 0,
  },
  {
    desc: 'eggs', price: 0.16, vat: 0.18, quantity: 104, discount: 0,
  },
  {
    desc: 'plastic bags', price: 0.05, vat: 0.18, quantity: 398, discount: 0,
  },
  {
    desc: 'aluminum foils', price: 1.12, vat: 0.08, quantity: 21, discount: 0,
  },
  {
    desc: 'razors', price: 8.1, vat: 0.08, quantity: 51, discount: 0,
  },
  {
    desc: 'lotions', price: 12, vat: 0.22, quantity: 205, discount: 0,
  },
];
export const expectedInvoices = [
  {
    items: [{
      desc: 'TV', quantity: 1, price: 760, discount: 0, vat: '22%', total: '760.00 + 167.20 = 927.20',
    }],
    subtotal: 760,
    totalVat: 0.22,
    total: 927.2,
  }, {
    items: [{
      desc: 'lotions', quantity: 34, price: 12, discount: 0, vat: '22%', total: '408.00 + 89.76 = 497.76',
    }],
    subtotal: 408,
    totalVat: 89.76,
    total: 497.76,
  }, {
    items: [{
      desc: 'water', quantity: 50, price: 0.25, discount: 0, vat: '8%', total: '12.50 + 1.00 = 13.50',
    }, {
      desc: 'chips', quantity: 38, price: 2.4, discount: 0, vat: '8%', total: '91.20 + 7.30 = 98.50',
    }, {
      desc: 'coca cola', quantity: 50, price: 0.5, discount: 0.1, vat: '18%', total: '20.00 + 3.60 = 23.60',
    }, {
      desc: 'chocolate bar', quantity: 38, price: 1.25, discount: 0, vat: '22%', total: '47.50 + 10.45 = 57.95',
    }, {
      desc: 'hand soap', quantity: 50, price: 3.78, discount: 0, vat: '8%', total: '189.00 + 15.12 = 204.12',
    }, {
      desc: 'humus', quantity: 16, price: 2.66, discount: 0, vat: '18%', total: '42.56 + 7.66 = 50.22',
    }, {
      desc: 'bananas', quantity: 8, price: 1.25, discount: 0, vat: '22%', total: '10.00 + 2.20 = 12.20',
    }, {
      desc: 'yogurts', quantity: 14, price: 0.66, discount: 0, vat: '18%', total: '9.24 + 1.66 = 10.90',
    }, {
      desc: 'bleach', quantity: 11, price: 1.23, discount: 0, vat: '22%', total: '13.53 + 2.98 = 16.51',
    }, {
      desc: 'napkins', quantity: 50, price: 0.21, discount: 0, vat: '8%', total: '10.50 + 0.84 = 11.34',
    }],
    subtotal: 446.03,
    totalVat: 52.8066,
    total: 498.8366,
  }, {
    items: [{
      desc: 'lotions', quantity: 34, price: 12, discount: 0, vat: '22%', total: '408.00 + 89.76 = 497.76',
    }],
    subtotal: 408,
    totalVat: 89.76,
    total: 497.76,
  }, {
    items: [{
      desc: 'water', quantity: 50, price: 0.25, discount: 0, vat: '8%', total: '12.50 + 1.00 = 13.50',
    }, {
      desc: 'coca cola', quantity: 27, price: 0.5, discount: 0.1, vat: '18%', total: '10.80 + 1.94 = 12.74',
    }, {
      desc: 'hand soap', quantity: 42, price: 3.78, discount: 0, vat: '8%', total: '158.76 + 12.70 = 171.46',
    }, {
      desc: 'white wine', quantity: 18, price: 9.2, discount: 0.02, vat: '18%', total: '165.24 + 29.74 = 194.98',
    }, {
      desc: 'oil', quantity: 10, price: 8.3, discount: 0, vat: '18%', total: '83.00 + 14.94 = 97.94',
    }, {
      desc: 'napkins', quantity: 35, price: 0.21, discount: 0, vat: '8%', total: '7.35 + 0.59 = 7.94',
    }],
    subtotal: 437.65000000000003,
    totalVat: 60.916000000000004,
    total: 498.566,
  }, {
    items: [{
      desc: 'lotions', quantity: 34, price: 12, discount: 0, vat: '22%', total: '408.00 + 89.76 = 497.76',
    }],
    subtotal: 408,
    totalVat: 89.76,
    total: 497.76,
  }, {
    items: [{
      desc: 'water', quantity: 50, price: 0.25, discount: 0, vat: '8%', total: '12.50 + 1.00 = 13.50',
    }, {
      desc: 'fish meat', quantity: 49, price: 8.3, discount: 0, vat: '18%', total: '406.70 + 73.21 = 479.91',
    }, {
      desc: 'plastic bags', quantity: 50, price: 0.05, discount: 0, vat: '18%', total: '2.50 + 0.45 = 2.95',
    }],
    subtotal: 421.70000000000005,
    totalVat: 74.656,
    total: 496.35600000000005,
  }, {
    items: [{
      desc: 'lotions', quantity: 34, price: 12, discount: 0, vat: '22%', total: '408.00 + 89.76 = 497.76',
    }],
    subtotal: 408,
    totalVat: 89.76,
    total: 497.76,
  }, {
    items: [{
      desc: 'water', quantity: 50, price: 0.25, discount: 0, vat: '8%', total: '12.50 + 1.00 = 13.50',
    }, {
      desc: 'wine', quantity: 22, price: 9.78, discount: 0, vat: '22%', total: '215.16 + 47.34 = 262.50',
    }, {
      desc: 'cookies', quantity: 33, price: 1.34, discount: 0, vat: '8%', total: '44.22 + 3.54 = 47.76',
    }, {
      desc: 'eggs', quantity: 50, price: 0.16, discount: 0, vat: '18%', total: '8.00 + 1.44 = 9.44',
    }, {
      desc: 'plastic bags', quantity: 50, price: 0.05, discount: 0, vat: '18%', total: '2.50 + 0.45 = 2.95',
    }, {
      desc: 'aluminum foils', quantity: 21, price: 1.12, discount: 0, vat: '8%', total: '23.52 + 1.88 = 25.40',
    }],
    subtotal: 305.9,
    totalVat: 55.6444,
    total: 361.5444,
  }, {
    items: [{
      desc: 'lotions', quantity: 34, price: 12, discount: 0, vat: '22%', total: '408.00 + 89.76 = 497.76',
    }],
    subtotal: 408,
    totalVat: 89.76,
    total: 497.76,
  }, {
    items: [{
      desc: 'lotions', quantity: 34, price: 12, discount: 0, vat: '22%', total: '408.00 + 89.76 = 497.76',
    }],
    subtotal: 408,
    totalVat: 89.76,
    total: 497.76,
  }, {
    items: [{
      desc: 'water', quantity: 40, price: 0.25, discount: 0, vat: '8%', total: '10.00 + 0.80 = 10.80',
    }, {
      desc: 'cigarettes', quantity: 50, price: 5.46, discount: 0, vat: '22%', total: '273.00 + 60.06 = 333.06',
    }, {
      desc: 'eggs', quantity: 50, price: 0.16, discount: 0, vat: '18%', total: '8.00 + 1.44 = 9.44',
    }, {
      desc: 'plastic bags', quantity: 50, price: 0.05, discount: 0, vat: '18%', total: '2.50 + 0.45 = 2.95',
    }],
    subtotal: 293.5,
    totalVat: 62.75,
    total: 356.25,
  }, {
    items: [{
      desc: 'lotions', quantity: 1, price: 12, discount: 0, vat: '22%', total: '12.00 + 2.64 = 14.64',
    }, {
      desc: 'razors', quantity: 50, price: 8.1, discount: 0, vat: '8%', total: '405.00 + 32.40 = 437.40',
    }, {
      desc: 'plastic bags', quantity: 50, price: 0.05, discount: 0, vat: '18%', total: '2.50 + 0.45 = 2.95',
    }, {
      desc: 'eggs', quantity: 4, price: 0.16, discount: 0, vat: '18%', total: '0.64 + 0.12 = 0.76',
    }],
    subtotal: 420.14,
    totalVat: 35.6052,
    total: 455.74519999999995,
  }, {
    items: [{
      desc: 'cigarettes', quantity: 39, price: 5.46, discount: 0, vat: '22%', total: '212.94 + 46.85 = 259.79',
    }, {
      desc: 'plastic bags', quantity: 50, price: 0.05, discount: 0, vat: '18%', total: '2.50 + 0.45 = 2.95',
    }, {
      desc: 'razors', quantity: 1, price: 8.1, discount: 0, vat: '8%', total: '8.10 + 0.65 = 8.75',
    }],
    subtotal: 223.54,
    totalVat: 47.94480000000001,
    total: 271.48479999999995,
  }, {
    items: [{
      desc: 'plastic bags', quantity: 50, price: 0.05, discount: 0, vat: '18%', total: '2.50 + 0.45 = 2.95',
    }],
    subtotal: 2.5,
    totalVat: 0.44999999999999996,
    total: 2.95,
  }, {
    items: [{
      desc: 'plastic bags', quantity: 50, price: 0.05, discount: 0, vat: '18%', total: '2.50 + 0.45 = 2.95',
    }],
    subtotal: 2.5,
    totalVat: 0.44999999999999996,
    total: 2.95,
  }, {
    items: [{
      desc: 'plastic bags', quantity: 48, price: 0.05, discount: 0, vat: '18%', total: '2.40 + 0.43 = 2.83',
    }],
    subtotal: 2.4000000000000004,
    totalVat: 0.43200000000000005,
    total: 2.8320000000000003,
  }];
export const product500 = [
  {
    desc: 'something', price: 500, vat: 0.08, quantity: 1, discount: 0,
  },
];
export const expectedInvoice500 = [{
  items: [{
    desc: 'something', quantity: 1, price: 500, discount: 0, vat: '8%', total: '500.00 + 40.00 = 540.00',
  }],
  subtotal: 500,
  totalVat: 0.08,
  total: 540,
}];
export const products256 = [
  {
    desc: 'something1', price: 256, vat: 0.08, quantity: 1, discount: 0,
  },
  {
    desc: 'something2', price: 256, vat: 0.08, quantity: 1, discount: 0,
  },
];
export const expectedInvoices256 = [
  {
    items: [{
      desc: 'something2', quantity: 1, price: 256, discount: 0, vat: '8%', total: '256.00 + 20.48 = 276.48',
    }],
    subtotal: 256,
    totalVat: 20.48,
    total: 276.48,
  }, {
    items: [{
      desc: 'something1', quantity: 1, price: 256, discount: 0, vat: '8%', total: '256.00 + 20.48 = 276.48',
    }],
    subtotal: 256,
    totalVat: 20.48,
    total: 276.48,
  }];
export const products389 = [
  {
    desc: 'something', price: 1, vat: 0.08, quantity: 389, discount: 0,
  },
];
export const expectedInvoices389 = [
  {
    items: [{
      desc: 'something', quantity: 50, price: 1, discount: 0, vat: '8%', total: '50.00 + 4.00 = 54.00',
    }],
    subtotal: 50,
    totalVat: 4,
    total: 54,
  }, {
    items: [{
      desc: 'something', quantity: 50, price: 1, discount: 0, vat: '8%', total: '50.00 + 4.00 = 54.00',
    }],
    subtotal: 50,
    totalVat: 4,
    total: 54,
  }, {
    items: [{
      desc: 'something', quantity: 50, price: 1, discount: 0, vat: '8%', total: '50.00 + 4.00 = 54.00',
    }],
    subtotal: 50,
    totalVat: 4,
    total: 54,
  }, {
    items: [{
      desc: 'something', quantity: 50, price: 1, discount: 0, vat: '8%', total: '50.00 + 4.00 = 54.00',
    }],
    subtotal: 50,
    totalVat: 4,
    total: 54,
  }, {
    items: [{
      desc: 'something', quantity: 50, price: 1, discount: 0, vat: '8%', total: '50.00 + 4.00 = 54.00',
    }],
    subtotal: 50,
    totalVat: 4,
    total: 54,
  }, {
    items: [{
      desc: 'something', quantity: 50, price: 1, discount: 0, vat: '8%', total: '50.00 + 4.00 = 54.00',
    }],
    subtotal: 50,
    totalVat: 4,
    total: 54,
  }, {
    items: [{
      desc: 'something', quantity: 50, price: 1, discount: 0, vat: '8%', total: '50.00 + 4.00 = 54.00',
    }],
    subtotal: 50,
    totalVat: 4,
    total: 54,
  }, {
    items: [{
      desc: 'something', quantity: 39, price: 1, discount: 0, vat: '8%', total: '39.00 + 3.12 = 42.12',
    }],
    subtotal: 39,
    totalVat: 3.12,
    total: 42.12,
  }];
