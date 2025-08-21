import productSlice from "./productSlice";

function loadProducts() {
  return {
    type: "apiCall",
    payload: {
      url: "/product",
      method: "get",
      tool: productSlice.actions.setProducts,
      onError: productSlice.actions.setError,
    },
  };
}

function saveProduct(editingProduct, images) {
  return (dispatch, getState) => {
    const { form } = getState().product;
    const currentRole = localStorage.getItem("role");
    if (currentRole !== "ROLE_ADMIN") {
      dispatch(
        productSlice.actions.setWarning("Only ADMINs can add/update product.")
      );
      dispatch(productSlice.actions.resetForm());
      dispatch(loadProducts());
      return;
    }
    dispatch(productSlice.actions.setLoading(true));
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("price", form.price);
    formData.append("description", form.description);
    formData.append("color", form.color);
    formData.append("size", form.size);
    formData.append("quantity", form.quantity);
    formData.append("discount", form.discount);
    formData.append("category", form.category);
    images.forEach((img) => formData.append("images", img));

    const action = {
      type: "apiCall",
      payload: {
        url: editingProduct ? `/product/${editingProduct.id}` : "/product",
        method: editingProduct ? "put" : "post",
        data: formData,
        isFormData: true,
        tool: loadProducts(),
        onSuccess: productSlice.actions.resetForm,
        onError: productSlice.actions.setError,
      },
    };
    dispatch(action);
  };
}

function deleteProduct(id) {
  return (dispatch) => {
    const currentRole = localStorage.getItem("role");
    if (currentRole !== "ROLE_ADMIN") {
      dispatch(
        productSlice.actions.setWarning("Only ADMINs can delete product.")
      );
      return;
    }
    dispatch(productSlice.actions.setLoading(true));
    const action = {
      type: "apiCall",
      payload: {
        url: `/product/${id}`,
        method: "delete",
        tool: loadProducts(),
        onError: productSlice.actions.setError,
      },
    };
    dispatch(action);
  };
}

function editProduct(product) {
  return (dispatch) => {
    const currentRole = localStorage.getItem("role");
    if (currentRole !== "ROLE_ADMIN") {
      dispatch(
        productSlice.actions.setWarning("Only ADMINs can edit product.")
      );
      return;
    }
    dispatch(productSlice.actions.setEditingProduct(product));
  };
}

function addRating(productId, userId, stars) {
  return {
    type: "apiCall",
    payload: {
      url: `/product/products/${productId}/ratings`,
      method: "post",
      params: { userId, stars },
     
      tool: productSlice.actions.setProductRatings,
      onSuccess: (dispatch, response) => {
        dispatch(
          productSlice.actions.setProductRatings({
            productId,
            ratings: response.data, 
          })
        );
      },
      onError: productSlice.actions.setError,
    },
  };
}

function fetchProductRatings(productId) {
  return {
    type: "apiCall",
    payload: {
      url: `/product/products/${productId}/ratings`,
      method: "get",
      tool: productSlice.actions.setProductRatings, 
      onError: productSlice.actions.setError,
    },
  };
}

export function updateProductQuantity(productId, newQuantity) {
  return {
    type: "apiCall",
    payload: {
      url: `/product/${productId}/quantity`,
      method: "patch",
      data: { quantity: newQuantity },
      onError: (error) => {
        console.error("Failed to update product quantity:", error);
      },
    },
  };
}

export const productActions = {
  ...productSlice.actions,
  loadProducts,
  saveProduct,
  deleteProduct,
  editProduct,
  fetchProductRatings,
  addRating,
  updateProductQuantity
};
