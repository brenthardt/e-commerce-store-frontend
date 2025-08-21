import registerimage from "../assets/registerimage.svg";
import google from "../assets/google.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../Protected/AuthContext";
import { useEffect } from "react";
import { userActions } from "../Armory/userActions";

const SignUp = () => {
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

  const submitter = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:9980/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const errorText = await res.text();
        dispatch(userActions.setError(errorText || "Sign up failed"));
        return;
      }

      const data = await res.json();
      authLogin(data.token, data.role, data.refreshToken);
      localStorage.setItem("name", data.name);
      localStorage.setItem("email", data.email);
      localStorage.setItem("id", data.id);
      navigate("/");
    } catch (err) {
      dispatch(userActions.setError(err.message || "An error occurred"));
      console.error("Signup error:", err);
    }
  };

  const googleSU = (e) => {
    e.preventDefault();
    dispatch(
      userActions.setError(
        "Google sign-up is currently not working. Please sign up manually."
      )
    );
  };

  return (
    <div className="container mx-auto px-4 sm:px-8">
      {error && <div className="text-red-500 text-center">{error}</div>}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 py-10">
        <img
          className="w-full max-w-md h-auto rounded"
          src={registerimage}
          alt="Register"
        />
        <form onSubmit={submitter}>
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-semibold text-center lg:text-left">
              Create an Account
            </h1>
            <p className="mt-4 text-center lg:text-left text-sm text-gray-600">
              Enter your details below
            </p>

            <div className="mt-6 space-y-6">
              <input
                className="w-full outline-none border-b-2 h-10 px-2"
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={change}
                required
              />
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
                Create Account
              </button>

              <div className="w-full h-12 border-2 rounded flex items-center justify-center gap-2">
                <img className="w-5 h-5" src={google} alt="Google" />
                <button onClick={googleSU} className="text-sm" type="button">
                  Sign up with Google
                </button>
              </div>

              <div className="flex justify-center gap-2 mt-6 text-sm">
                <p className="text-gray-500">Already have an account?</p>
                <Link
                  to={"/login"}
                  className="border-b border-gray-400 text-black "
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
