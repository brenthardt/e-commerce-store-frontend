import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../Armory/userActions";

const AUser = () => {
  const dispatch = useDispatch();
  const { users, form, editingId, warning, currentRole, isLoading, error } =
    useSelector((state) => state.user);

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  useEffect(() => {
    dispatch(userActions.loadUsers());
  }, [dispatch]);

  useEffect(() => {
    if (warning) {
      const timer = setTimeout(
        () => dispatch(userActions.clearWarning()),
        3000
      );
      return () => clearTimeout(timer);
    }
  }, [warning, dispatch]);

  const change = (e) => {
    dispatch(
      userActions.setFormField({
        field: e.target.name,
        value: e.target.value,
      })
    );
  };

  const save = () => {
    const requiredFields = ["name", "phone", "address", "email", "password"];
    const emptyFields = requiredFields.filter((field) => !form[field]?.trim());

    if (emptyFields.length > 0) {
      dispatch(
        userActions.setWarning(
          `Please fill in all fields. Missing: ${emptyFields.join(", ")}`
        )
      );
      return;
    }

    dispatch(userActions.saveUser(form, editingId));
    dispatch(userActions.loadUsers());
  };

  const edit = (user) => {
    if (currentRole !== "ROLE_ADMIN") {
      dispatch(userActions.setWarning("Only ADMINs can edit user."));
      return;
    }
    dispatch(userActions.setEditingUser(user));
  };

  const eliminate = (id) => {
    dispatch(userActions.deleteUser(id));
    dispatch(userActions.loadUsers());
  };

  // PAGINATION
  const filteredUsers = users.filter((u) => u.name.toLowerCase() !== "admin");
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      {warning && (
        <div className="text-red-600 mb-4 text-center">{warning}</div>
      )}
      {error && <div className="text-red-600 mb-4 text-center">{error}</div>}
      {isLoading && <div className="text-center mb-4">Loading...</div>}

      {/* Form */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:gap-4 gap-2 mb-8 justify-center">
        {["name", "phone", "address", "email", "password"].map((field) => {
          let type = "text";
          if (field === "email") type = "email";
          if (field === "password") type = "password";

          return (
            <input
              key={field}
              type={type}
              name={field}
              required
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={form[field]}
              onChange={change}
              className="border-2 outline-none border-gray-300 w-full sm:w-[250px] h-[56px] rounded px-4"
            />
          );
        })}

        <button
          onClick={save}
          disabled={isLoading}
          className="bg-red-500 text-white w-full sm:w-[200px] h-[56px] rounded"
        >
          {editingId ? "Update User" : "Add User"}
        </button>
      </div>

      {/* Desktop Table */}
      <div className="hidden sm:block overflow-x-auto text-center">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th className="px-6 py-3">№</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Phone</th>
              <th className="px-6 py-3">Address</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((u, i) => (
              <tr key={u.id} className="border-t">
                <td className="px-6 py-4">{indexOfFirstUser + i + 1}</td>
                <td className="px-6 py-4">{u.name}</td>
                <td className="px-6 py-4">{u.phone}</td>
                <td className="px-6 py-4">{u.address}</td>
                <td className="px-6 py-4">{u.email}</td>
                <td className="px-6 py-4 flex gap-2 justify-center">
                  <button
                    onClick={() => edit(u)}
                    disabled={isLoading}
                    className="bg-red-500 text-white w-[60px] h-[36px] rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => eliminate(u.id)}
                    disabled={isLoading}
                    className="bg-red-500 text-white w-[60px] h-[36px] rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-center mt-4 space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-gray-200 text-gray-700 px-3 py-1 rounded disabled:opacity-50"
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="bg-gray-200 text-gray-700 px-3 py-1 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="sm:hidden space-y-4">
        {currentUsers.map((u, i) => (
          <div key={u.id} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-lg">{u.name}</span>
              <span className="text-sm text-gray-500">
                #{indexOfFirstUser + i + 1}
              </span>
            </div>
            <p className="text-gray-700 mb-1">Phone: {u.phone}</p>
            <p className="text-gray-700 mb-1">Address: {u.address}</p>
            <p className="text-gray-700 mb-3">Email: {u.email}</p>
            <div className="flex gap-2">
              <button
                onClick={() => edit(u)}
                disabled={isLoading}
                className="bg-red-500 text-white w-full h-[40px] rounded"
              >
                Edit
              </button>
              <button
                onClick={() => eliminate(u.id)}
                disabled={isLoading}
                className="bg-red-500 text-white w-full h-[40px] rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {/* Mobile Pagination */}
        <div className="flex justify-center mt-4 space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-gray-200 text-gray-700 px-3 py-1 rounded disabled:opacity-50"
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="bg-gray-200 text-gray-700 px-3 py-1 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AUser;
