import { orderTotal } from './orderTotal'

const cart = [
    { name: 'Wódka', price: 25 },
    { name: 'Wino', price: 15 },
    { name: 'Denaturat', price: 5 },
    { name: 'Bułka', price: 0.5 }
]

//total 45,5

//test
if (orderTotal(cart) !== 45.5) {
    throw new Error('Cant calculate order total')
}