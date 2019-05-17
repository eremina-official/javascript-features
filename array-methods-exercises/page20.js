const orders = [
  {
    status: 'confirmed',
    details: [
      {
        item: 'milk',
        units_sold: 2,
        unit_price: 0.5
      },
      {
        item: 'jogurt',
        units_sold: 3,
        unit_price: 2
      }
    ]
  },
  {
    status: 'not-confirmed',
    details: [
      {
        item: 'milk',
        units_sold: 2,
        unit_price: 0.5
      },
      {
        item: 'jogurt',
        units_sold: 3,
        unit_price: 2
      }
    ]
  },
  {
    status: 'confirmed',
    details: [
      {
        item: 'milk',
        units_sold: 7,
        unit_price: 0.5
      },
      {
        item: 'butter',
        units_sold: 3,
        unit_price: 3
      }
    ]
  }
];

function iterateArray() {
  const result = [];

  orders.forEach(order => {
    if (order.status === 'confirmed') {

      order.details.forEach(detail => {
        const uniqueItem = result.find(element => {
          if (detail.item === element.item) {
            return element;
          }
        });

        if (!uniqueItem) {
          result.push({item: detail.item, price: detail.unit_price * detail.units_sold});
        }

        if (uniqueItem) {
          uniqueItem.price += detail.unit_price * detail.units_sold
        }
      });
    }
  });

  return result;
}


function mapArray(orders) {
  orders = orders.filter(order => order.status === 'confirmed');

  let concatItems = orders.reduce(function(acc, currentValue) {
    return [...acc, ...currentValue.details];
  }, []);
  
  //sum up the values with same item.name
  //change values to item and price objects
  const result = concatItems
    .map(value => {
      const sumedItem = {};
      sumedItem.item = value.item;
      sumedItem.price = value.unit_price * value.units_sold;
      return sumedItem;
    })
    .reduce(function(acc, currentValue) {
      const uniqueItem = acc.find(obj => {
        return obj.item === currentValue.item;
      });

      if (!uniqueItem) {
        acc.push(currentValue);
      }

      if (uniqueItem) {
        uniqueItem.price += currentValue.price;
      }

    return acc;
  }, []);

  return result;
}

export { iterateArray, mapArray };
