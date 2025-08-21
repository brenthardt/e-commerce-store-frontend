import searchicon from "../assets/searchicon.svg";
import carticon from "../assets/carticon.svg";
import hearticon from "../assets/hearticon.svg";
import user from "../assets/user.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { fetchCart } from "../Armory/cartActions";
import { fetchWishlist } from "../Armory/wishlistActions";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = localStorage.getItem("id");
  const wishlistCount = useSelector((state) => state.wishlist.items.length);
  const cartCount = useSelector((state) => state.cart.things.length);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();
  const products = useSelector((state) => state.product.products);
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
 const searchRef = useRef();

 const filteredProducts = search
   ? products.filter((p) =>
       p.title.toLowerCase().includes(search.toLowerCase())
     )
   : [];

    useEffect(() => {
      function handleClickOutside(event) {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
          setShowDropdown(false);
        }
      }
      if (showDropdown) {
        document.addEventListener("mousedown", handleClickOutside);
      }
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [showDropdown]);


  useEffect(() => {
    if (userId) {
      dispatch(fetchCart(userId));
      dispatch(fetchWishlist(userId));
    }
  }, [dispatch, userId]);

  
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  const logout = () => {
    localStorage.clear();
    setDropdownOpen(false);
    navigate("/login");
  };

  return (
    <div className="container mx-auto px-8">
      <div className="flex flex-col lg:flex-row items-center justify-between mt-4 gap-4 lg:gap-24">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-24">
          <Link to={"/"}>
            <h1 className="text-lg font-semibold">Exclusive</h1>
          </Link>
          <ul className="flex flex-wrap justify-center gap-4 lg:gap-[48px] text-sm lg:text-base">
            <Link to={"/"}>Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to={"/about"}>About us</Link>
            <Link to={"/signup"}>Sign up</Link>
          </ul>
        </div>

        <div className="flex items-center gap-2 lg:gap-4 w-full lg:w-auto">
          <div className="relative flex-grow lg:flex-grow-0" ref={searchRef}>
            <input
              className="w-full outline-none lg:w-[243px] h-[33px] pl-2 pr-8 rounded"
              type="text"
              placeholder="What are you looking for?"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setShowDropdown(true);
              }}
              onFocus={() => setShowDropdown(true)}
            />
            <img
              src={searchicon}
              alt="search"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-[20px] h-[20px]"
            />
            {/* Dropdown */}
            {showDropdown && search && (
              <div className="absolute left-0 right-0 mt-1 bg-white border rounded shadow-lg z-50 max-h-60 overflow-y-auto">
                {filteredProducts.length === 0 ? (
                  <div className="px-4 py-2 text-gray-500">
                    No products found
                  </div>
                ) : (
                  filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setShowDropdown(false);
                        setSearch("");
                        navigate(`/details/${product.id}`);
                      }}
                    >
                      {product.images?.[0] && (
                        <img
                          src={`http://localhost:9980/${product.images[0].path}`}
                          alt={product.title}
                          className="w-8 h-8 object-contain rounded"
                        />
                      )}
                      <span>{product.title}</span>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>

          <div className="flex gap-2 h-[33px] items-center">
            <Link to={"/wishlist"} className="relative">
              <img className="w-[28px] h-[28px]" src={hearticon} alt="heart" />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link to={"/cart"} className="relative">
              <img className="w-[28px] h-[28px]" src={carticon} alt="cart" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow">
                  {cartCount}
                </span>
              )}
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="focus:outline-none"
              >
                <img className="w-[28px] h-[28px]" src={user} alt="user" />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-50">
                  <Link
                    to="/account"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    My Account
                  </Link>
                  <Link
                    to="/wishlist"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    My Wishlist
                  </Link>
                  <Link
                    to="/cart"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    My Cart
                  </Link>
                  
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="h-[0.3px] bg-gray-300 w-full mt-4"></div>
    </div>
  );
};

export default Navbar;
