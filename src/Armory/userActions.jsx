import userSlice from "./userSlice";

function loadUsers() {
  return {
    type: "apiCall",
    payload: {
      url: "/users",
      method: "get",
      tool: userSlice.actions.setUsers,
      onError: userSlice.actions.setError,
    },
  };
}

function saveUser(userData, editingId) {
  return (dispatch, getState) => {
    const { currentRole } = getState().user;
    console.log(currentRole);

    if (currentRole !== "ROLE_ADMIN") {
      dispatch(userSlice.actions.setWarning("Only ADMIN can add/update user."));
      dispatch(userSlice.actions.resetForm());
      return;
    }

    dispatch(userSlice.actions.setLoading(true));

    const action = {
      type: "apiCall",
      payload: {
        url: editingId ? `/users/${editingId}` : "/users",
        method: editingId ? "put" : "post",
        data: userData,
        tool: loadUsers,
        onSuccess: userSlice.actions.resetForm,
        onError: userSlice.actions.setError,
      },
    };

    dispatch(action);
  };
}

function deleteUser(id) {
  return (dispatch, getState) => {
    const { currentRole } = getState().user;
    console.log(currentRole);

    if (currentRole !== "ROLE_ADMIN") {
      dispatch(userSlice.actions.setWarning("Only ADMIN can delete user."));
      return;
    }

    dispatch(userSlice.actions.setLoading(true));

    const action = {
      type: "apiCall",
      payload: {
        url: `/users/${id}`,
        method: "delete",
        tool: loadUsers,
        onError: userSlice.actions.setError,
      },
    };

    dispatch(action);
  };
}

export const userActions = {
  ...userSlice.actions,
  loadUsers,
  saveUser,
  deleteUser,
};
