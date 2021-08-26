//add item to shopping cart state

export const addToShoppingCartState = ({
  product: { id, category, image, price, title },
  qty,
  setShoppingCart,
  shoppingCart,
}) => {
  setShoppingCart([
    ...shoppingCart,
    { id, category, image, price, title, qty },
  ]);
};

export default {};
