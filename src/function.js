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

// function that take the state ( redux store ) and save it to local store
export const storeToLocalStorage = (state) => {
  try {
    window.localStorage.setItem("shoppingCart", JSON.stringify(state));
  } catch (e) {
    console.error(e);
  }
};

// function that  check if there is info's name that we looking for
// and if there is grab it if not return undefined
export const storeFromLocalStorage = () => {
  const stateStr = localStorage.getItem("shoppingCart");
  if (stateStr === null) {
    return undefined;
  }
  return JSON.parse(stateStr);
};
