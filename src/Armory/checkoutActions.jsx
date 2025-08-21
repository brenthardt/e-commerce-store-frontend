import checkoutSlice from "./checkoutSlice";

export const fetchCheckout = (userId) => {
  return {
    type: "apiCall",
    payload: {
      url: "/checkout",
      method: "get",
      params: { userId },
      tool: checkoutSlice.actions.setCheckout,
      onError: checkoutSlice.actions.setCheckoutError,
    },
  };
};

export function placeOrder(checkoutData) {
  return {
    type: "apiCall",
    payload: {
      url: "/checkout",
      method: "post",
      data: checkoutData,
      tool: checkoutSlice.actions.setCheckout,
      onError: checkoutSlice.actions.setCheckoutError,
    },
  };
};

export function deleteCheckoutOrder(id, userId) {
  console.log("Here is the checkout id:  " + id);
  return (dispatch) => {
    dispatch(checkoutSlice.actions.setCheckoutLoading(true));

    const action = {
      type: "apiCall",
      payload: {
        url: `/checkout/${id}`,
        method: "delete",
        tool: (response) => {
          if (response.status === 200 || response.status === 204) {
            dispatch(checkoutSlice.actions.removeCheckoutOrder(id));
            dispatch(fetchCheckout(userId));
          }
        },
        onError: (error) => {
          console.error("Delete error:", error);
          dispatch(checkoutSlice.actions.setCheckoutError(error.message));
          dispatch(fetchCheckout(userId));
        },
      },
    };

    dispatch(action);
  };
}


export const checkoutActions = {
    ...checkoutSlice.actions,
    fetchCheckout,
    placeOrder,
    deleteCheckoutOrder,
}
