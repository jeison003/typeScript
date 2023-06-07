import { Product, taxCalculation } from './06-function-destructuring';

const shoppingCart: Product[] = [{
    description: 'Nokia',
    price: 100
    },
    {
        description: 'Ipad',
        price: 400
    }
];

//tax = 0.15%
const [total, taxTotal] = taxCalculation({ 
    products: shoppingCart,
    tax: 0.15
});

console.log('Total: ' ,total,'Impuesto; ' ,taxTotal);