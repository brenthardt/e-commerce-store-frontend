import cartSlice from "./cartSlice";

export function fetchCart(userId) {
  return {
    type: "apiCall",
    payload: {
      url: `/cart`,
      method: "get",
      params: { userId },
      tool: cartSlice.actions.setCart,
      onError: cartSlice.actions.setCartError,
    },
  };
}

export function addCart(product, userId) {
  return async (dispatch) => {
    dispatch(cartSlice.actions.setCartLoading(true));

    dispatch({
      type: "apiCall",
      payload: {
        url: "/cart",
        method: "post",
        params: {
          title: product.title,
          price: product.price,
          quantity: 1,
          userId: userId,
          productId: product.id,
        },
        tool: (data) => {
          dispatch(cartSlice.actions.addCartThing(data));
          dispatch(fetchCart(userId));
        },
        onError: (error) => {
          console.error("Add to cart error:", error);
          dispatch(cartSlice.actions.setCartError(error.message));
        },
      },
    });
  };
}

export function deleteCartThing(id, userId) {
  console.log("Here is the cart id:  " + id);
  return (dispatch) => {
    dispatch(cartSlice.actions.setCartLoading(true));

    const action = {
      type: "apiCall",
      payload: {
        url: `/cart/${id}`,
        method: "delete",
        tool: (response) => {
          if (response.status === 200 || response.status === 204) {
            dispatch(cartSlice.actions.removeCartThing(id));
            dispatch(fetchCart(userId));
          }
        },
        onError: (error) => {
          console.error("Delete error:", error);
          dispatch(cartSlice.actions.setCartError(error.message));
          dispatch(fetchCart(userId));
        },
      },
    };

    dispatch(action);
  };
}

export function updateCartQuantity(cartId, newQuantity, userId) {
  return async (dispatch) => {
    dispatch(cartSlice.actions.setCartLoading(true));

    dispatch({
      type: "apiCall",
      payload: {
        url: `/cart/${cartId}/quantity`,
        method: "patch",
        params: {
          quantity: newQuantity,
          userId: userId,
        },
        tool: () => {
          dispatch(fetchCart(userId));
        },
        onError: (error) => {
          dispatch(cartSlice.actions.setCartError(error.message));
        },
      },
    });
  };
}

export const cartActions = {
  ...cartSlice.actions,
  fetchCart,
  addCart,
  deleteCartThing,
  updateCartQuantity,
};
