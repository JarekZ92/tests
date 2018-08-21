import { orderTotal } from './orderTotal'

const cart0 = []

const cart1 = [
    { name: 'Wódka', price: 25 },
    { name: 'Wino', price: 15 },
    { name: 'Denaturat', price: 5 },
    { name: 'Bułka', price: 0.5 }
]

const cart2 = [
    { name: 'Wódka', price: 25, quantity: 1 },
    { name: 'Wino', price: 15, quantity: 2}
]

const cart3 = [
    { name: 'Wódka', price: 25, quantity: 1 },
    { name: 'Wino', price: 15, quantity: 2}
]
//test in JEST

test('can calculate order total', () => {
    expect(orderTotal(cart0)).toBe(0)
})

test('Cant calculate order total', () => {
    expect(orderTotal(cart1)).toBe(45.5)
})

test('Cant calculate order total with quantity', () => {
    expect(orderTotal(cart2)).toBe(55)
})
