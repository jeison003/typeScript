
export interface Product{
    description: string;
    price: number;
}

const phone: Product={
    description: 'Nokia Air',
    price: 250.0
}

const tablet: Product={
    description: 'iPad Air',
    price: 250.0
}

export interface TaxCalculationOptions{
    tax: number;
    products: Product[];
}
// function taxCalculation(options: TaxCalculationOptions): [number, number]{ //number[]
//     let total: number = 0;

//     options.products.forEach(({price}) =>{
//         total += price;
//     });

//     return [total, total * options.tax];

// }

export function taxCalculation(options: TaxCalculationOptions): [number, number]{ //number[]
    
    const {tax, products} = options;
    let total: number = 0;

    products.forEach(({price}) =>{
        total += price;
    });

    return [total, total * tax];

}

const shoppingCart =[phone, tablet];
const tax = 0.15;

const [total, taxAplicado] = taxCalculation({
    products: shoppingCart,
    tax: tax
})

console.log('Total: ' ,total,'Impuesto; ' ,taxAplicado)
// export{};