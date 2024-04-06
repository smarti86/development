
// origiinally functions in my App.js file, I decided to break them out and make the cart its own component
// decided to export each function instead of housing them under on global cart function after discussion from hours
export const addToCart = (cart, setCart, cartTotal, setCartTotal, item) => {
    const updatedCart = [...cart];
    const oldItem = updatedCart.find((tee) => tee.name === item.name);

    if (!oldItem) {
        let newItem = { ...item, count: 1 };
        updatedCart.push(newItem);
    } else {
        oldItem.count++;
    }
    setCartTotal(cartTotal + item.price);
    setCart(updatedCart);
};

export const resetCart = (setCart, setCartTotal) => {
    setCart([]);
    setCartTotal(0);
};