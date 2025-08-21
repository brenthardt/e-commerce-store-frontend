
import wishlistSlice from "./wishlistSlice";

function getDiscountedPrice(product) {
  if (product.discount > 0) {
    return Math.round(product.price * (1 - product.discount / 100));
  }
  return product.price;
}

export function fetchWishlist(userId) {
  return {
    type: "apiCall",
    payload: {
      url: `/wishlist`,
      method: "get",
      params: { userId },
      tool: wishlistSlice.actions.setWishlist,
      onError: wishlistSlice.actions.setWishlistError,
    },
  };
}

export function addToWishlist(product, userId) {
  return async (dispatch) => {
    dispatch(wishlistSlice.actions.setWishlistLoading(true));

    const formData = new FormData();
    formData.append("title", product.title);
    formData.append("price", getDiscountedPrice(product));
    formData.append("userId", userId);
    formData.append("productId", product.id);

    dispatch({
      type: "apiCall",
      payload: {
        url: "/wishlist",
        method: "post",
        data: formData,
        isFormData: true,
        tool: (data) => {
          dispatch(wishlistSlice.actions.addWishlistItem(data));
          dispatch(fetchWishlist(userId));
        },
        onError: wishlistSlice.actions.setWishlistError,
      },
    });
  };
}

export function deleteWishlistItem(id, userId) {
   console.log("Here is the wishlist id:  " + id);
  return (dispatch) => {
    dispatch(wishlistSlice.actions.setWishlistLoading(true));

    const action = {
      type: "apiCall",
      payload: {
        url: `/wishlist/${id}`,
        method: "delete",
        tool: (response) => {
          if (response.status === 200 || response.status === 204) {
            dispatch(wishlistSlice.actions.removeWishlistItem(id));
            dispatch(fetchWishlist(userId));
          }
        },
        onError: (error) => {
          console.error("Delete error:", error);
          dispatch(wishlistSlice.actions.setWishlistError(error.message));
          dispatch(fetchWishlist(userId));
        },
      },
    };

    dispatch(action);
  };
}



export const wishlistActions = {
  ...wishlistSlice.actions,
  fetchWishlist,
  addToWishlist,
  deleteWishlistItem,
};
