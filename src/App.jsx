import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Components/HomePage";
import TopHeader from "./Components/TopHeader";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SignUp from "./Components/SignUp";
import LogIn from "./Components/LogIn";
import NotFound from "./Components/NotFound";
import Wishlist from "./Components/Wishlist";
import Cart from "./Components/Cart";
import CheckOut from "./Components/CheckOut";
import Account from "./Components/Account";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Details from "./Components/Details";
import ProtectedRoute from "./Protected/ProtectedRoute";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { userActions } from "./Armory/userActions";
import AUser from "./AdminPages/AUser";
import Dashboard from "./AdminPages/Dashboard";
import AProduct from "./AdminPages/AProduct";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role) {
      dispatch(userActions.setCurrentRole(role));
    }
  }, [dispatch]);

  return (
    <div className="min-h-screen flex flex-col">
      <TopHeader />
      <Navbar />

      <div className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/*" element={<NotFound />} />
          <Route
            path="/wishlist"
            element={
              <ProtectedRoute>
                <Wishlist />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <CheckOut />
              </ProtectedRoute>
            }
          />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
            }
          />
          <Route
            path="/details/:id"
            element={
              <ProtectedRoute>
                <Details />
              </ProtectedRoute>
            }
          />

          <Route
            path="/auser"
            element={
              localStorage.getItem("token") &&
              localStorage.getItem("role") === "ROLE_ADMIN" ? (
                <AUser />
              ) : localStorage.getItem("token") ? (
                <Navigate to="/" state={{ from: "admin-only" }} replace />
              ) : (
                <Navigate to="/login" state={{ from: location }} replace />
              )
            }
          />

          <Route
            path="/dashboard"
            element={
              localStorage.getItem("token") &&
              localStorage.getItem("role") === "ROLE_ADMIN" ? (
                <Dashboard />
              ) : localStorage.getItem("token") ? (
                <Navigate to="/" state={{ from: "admin-only" }} replace />
              ) : (
                <Navigate to="/login" state={{ from: location }} replace />
              )
            }
          />
          <Route
            path="/aproduct"
            element={
              localStorage.getItem("token") &&
              localStorage.getItem("role") === "ROLE_ADMIN" ? (
                <AProduct />
              ) : localStorage.getItem("token") ? (
                <Navigate to="/" state={{ from: "admin-only" }} replace />
              ) : (
                <Navigate to="/login" state={{ from: location }} replace />
              )
            }
          />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
