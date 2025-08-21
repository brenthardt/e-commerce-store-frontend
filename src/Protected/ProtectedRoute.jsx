import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import PropTypes from "prop-types";
import { userActions } from "../Armory/userActions";
import { useDispatch } from "react-redux";

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { auth, loading } = useAuth();
  const dispatch = useDispatch();
  
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!auth.isLoggedIn) {
    return <Navigate to="/login" />;
  }

  if (adminOnly && auth.role !== "ROLE_ADMIN") {
    dispatch(
      userActions.setWarning("You don't have permission to access this page")
    );
    return <Navigate to="/" />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  adminOnly: PropTypes.bool,
};

export default ProtectedRoute;
