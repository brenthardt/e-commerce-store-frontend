import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    form: {
      title: "",
      price: "",
      description: "",
      color: "",
      size: "",
      quantity: 0,
      discount: 0,
      category: "",
      images: [],
    },
    imagePreviews: [],
    editingProduct: null,
    warning: "",
    isLoading: false,
    error: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setFormField: (state, action) => {
      state.form = {
        ...state.form,
        [action.payload.field]: action.payload.value,
      };
    },
    setImages: (state, action) => {
      state.form.images = action.payload;
      state.imagePreviews = action.payload.map((file) =>
        URL.createObjectURL(file)
      );
    },
    setEditingProduct: (state, action) => {
      state.editingProduct = action.payload;
      state.form = {
        title: action.payload.title,
        price: action.payload.price,
        description: action.payload.description,
        color: action.payload.color,
        size: action.payload.size,
        quantity: action.payload.quantity,
        discount: action.payload.discount,
        category: action.payload.category,
        images: action.payload.images || [],
        // images: [],
      };
      state.imagePreviews = [];
    },
    resetForm: (state) => {
      state.form = {
        title: "",
        price: "",
        description: "",
        color: "#000000",
        size: "",
        quantity: 0,
        discount: 0,
        category: "",
        images: [],
      };
      state.editingProduct = null;
      state.imagePreviews = [];
    },
    setWarning: (state, action) => {
      state.warning = action.payload;
    },
    clearWarning: (state) => {
      state.warning = "";
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    setProductRatings: (state, action) => {
      const { productId, ratings } = action.payload;
      const productIndex = state.products.findIndex((p) => p.id === productId);
      if (productIndex >= 0) {
        state.products[productIndex].ratings = ratings;
        // Calculate average stars
        const avgStars =
          ratings.length > 0
            ? ratings.reduce((sum, r) => sum + r.stars, 0) / ratings.length
            : 0;
        state.products[productIndex].averageStars = avgStars;
      }
    },

    setProductsWithRatings: (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
      state.error = null;
    },
  },
});

export default productSlice;
