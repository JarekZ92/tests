export const orderTotal = (cart) => (
    cart.reduce((r, el) => r + el.price, 0)
)