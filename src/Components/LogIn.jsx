import { Link, useNavigate } from "react-router-dom";
import registerimage from "../assets/registerimage.svg";
import { userActions } from "../Armory/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useAuth } from "../Protected/AuthContext";

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, form } = useSelector((state) => state.user);
  const { auth, login: authLogin } = useAuth();

  useEffect(() => {
    if (auth.isLoggedIn) {
      navigate("/");
    }
  }, [auth.isLoggedIn, navigate]);

  const change = (e) => {
    dispatch(
      userActions.setFormField({ field: e.target.name, value: e.target.value })
    );
  };

  const sub = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:9980/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        dispatch(userActions.setError(data.message || "Login failed"));
        return;
      }
      const data = await res.json();
      authLogin(data.token, data.role, data.refreshToken);
      localStorage.setItem("id", data.id);
      localStorage.setItem("email", data.email);
      
      navigate("/");
    } catch (err) {
      dispatch(userActions.setError(err.message));
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-8">
      {error && <div className="text-danger text-center">{error}</div>}

      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 py-10">
        <img
          className="w-full max-w-md h-auto rounded border-dashed"
          src={registerimage}
          alt="Register"
        />

        <form onSubmit={sub}>
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-semibold text-center lg:text-left">
              Log in to your Account
            </h1>
            <p className="mt-4 text-center lg:text-left text-sm text-gray-600">
              Enter your details below
            </p>

            <div className="mt-6 space-y-6">
              <input
                className="w-full outline-none border-b-2 h-10 px-2"
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={change}
                required
              />
              <input
                className="w-full outline-none border-b-2 h-10 px-2"
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={change}
                required
              />
            </div>

            <div className="mt-8 space-y-4">
              <button className="w-full h-12 bg-red-500 text-white rounded">
                Log In
              </button>

              <div className="flex justify-center gap-2 mt-6 text-sm">
                <p className="text-gray-500">Don&apos;t have an account?</p>
                <Link
                  to={"/signup"}
                  className="border-b border-gray-400 text-black"
                >
                  Sign Up
                </Link>
              </div>
              <button className="text-red-500  mx-auto block">
                Forgot Password?
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
