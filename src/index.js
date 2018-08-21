const cart = [
    { name: 'wódka', price: 25 },
    { name: 'wino', price: 15 },
    { name: 'Denaturat', price: 5 },
    { name: 'Bułka', price: 0.5 }
]

//total 45,5

const orderTotal = (cart) => { }

//test
if (orderTotal(cart) !== 45.5) {
    throw new Error('Cant calculate order total')
}