import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    form: {
      name: "",
      email: "",
      password: "",
      address: "",
      phone: "",
    },
    user: null,
    editingId: null,
    warning: "",
    currentRole: localStorage.getItem("role") || "",
    isLoading: false,
    error: null,
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setFormField: (state, action) => {
      state.form = {
        ...state.form,
        [action.payload.field]: action.payload.value,
      };
    },
    setEditingUser: (state, action) => {
      state.editingId = action.payload.id;
      state.form = {
        name: action.payload.name,
        email: action.payload.email,
        address: action.payload.address,
        phone: action.payload.phone,
      };
    },
    resetForm: (state) => {
      state.form = {
        name: "",
        email: "",
        password: "",
        address: "",
        phone: "",
      };
      state.editingId = null;
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
    setCurrentRole: (state, action) => {
      state.currentRole = action.payload;
    },
  },
});

export default userSlice;
