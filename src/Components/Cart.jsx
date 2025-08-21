import { useDispatch, useSelector } from "react-redux";
import iconcancel from "../assets/iconcancel.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  deleteCartThing,
  fetchCart,
  updateCartQuantity,
} from "../Armory/cartActions";

const Cart = () => {
  const dispatch = useDispatch();
  const userId = localStorage.getItem("id");
  const cartThings = useSelector((state) => state.cart.things);
  const isLoading = useSelector((state) => state.cart.isLoading);
  const products = useSelector((state) => state.product.products);
  const [updatingItems, setUpdatingItems] = useState({});

  useEffect(() => {
    if (userId) {
      dispatch(fetchCart(userId));
    }
  }, [dispatch, userId]);

  const Del = (id) => {
    dispatch(deleteCartThing(id, userId));
  };

const quantityChange = async (item, change) => {
  const newQuantity = item.quantity + change;

  const product = products.find((p) => p.id === item.productId);
  if (!product) return;

  const availableStock = product.quantity + item.quantity;
  if (newQuantity < 1) return;
  if (newQuantity > availableStock) {
    alert(`Only ${availableStock} items available in stock`);
    return;
  }

  setUpdatingItems((prev) => ({ ...prev, [item.id]: true }));

  try {
    await dispatch(updateCartQuantity(item.id, newQuantity, userId));
   
    dispatch(fetchCart(userId));
  } catch (error) {
    console.error("Error updating quantity:", error);
  } finally {
    setUpdatingItems((prev) => ({ ...prev, [item.id]: false }));
  }
};

  const subtotal = cartThings.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-start gap-1 mt-20 mb-10">
        <Link to="/" className="text-gray-500">
          Home /
        </Link>
        <Link to="/cart">Cart</Link>
      </div>

      {/* Desktop Table */}
      <div className="hidden sm:block overflow-x-auto">
        <div className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-5 text-lg font-semibold text-gray-900">
            Our products
            <p className="mt-1 text-sm font-normal text-gray-500">
              Browse more by adding products to your cart, research and have
              variety of choices across market. You can remove products any time
              you want.
            </p>
          </div>
          {isLoading ? (
            <div className="p-5">Loading...</div>
          ) : cartThings.length === 0 ? (
            <div className="p-5">Your cart is empty</div>
          ) : (
            <table className="min-w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                <tr>
                  <th className="px-6 py-3">Product</th>
                  <th className="px-6 py-3">Price</th>
                  <th className="px-6 py-3">Quantity</th>
                  <th className="px-6 py-3">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartThings.map((item) => (
                  <tr key={item.id} className="border-t">
                    <td className="px-6 py-4 flex items-center gap-4 text-gray-900">
                      <button onClick={() => Del(item.id)}>
                        <img
                          className="w-5 h-5 cursor-pointer"
                          src={iconcancel}
                          alt="cancel"
                        />
                      </button>
                      {item.images?.length > 0 && (
                        <img
                          className="w-[50px] h-[39px]"
                          src={`http://localhost:9980/${item.images[0].path}`}
                          alt={item.title}
                        />
                      )}
                      {item.title}
                    </td>
                    <td className="px-6 py-4">${item.price}</td>
                    <td className="px-6 py-4">
                      <div className="w-[72px] h-[44px] border-2 border-gray-500 rounded flex items-center justify-center gap-4">
                        {updatingItems[item.id] ? (
                          <span>...</span>
                        ) : (
                          <>
                            {item.quantity.toString().padStart(2, "0")}
                            <div className="flex flex-col gap-0">
                              <button
                                onClick={() => quantityChange(item, 1)}
                                disabled={updatingItems[item.id]}
                              >
                                ∧
                              </button>
                              <button
                                onClick={() => quantityChange(item, -1)}
                                disabled={updatingItems[item.id]}
                              >
                                ∨
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="sm:hidden space-y-4">
        {isLoading ? (
          <div className="p-5">Loading...</div>
        ) : cartThings.length === 0 ? (
          <div className="p-5">Your cart is empty</div>
        ) : (
          cartThings.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <button onClick={() => Del(item.id)}>
                    <img
                      className="w-5 h-5 cursor-pointer"
                      src={iconcancel}
                      alt="cancel"
                    />
                  </button>
                  {item.images?.length > 0 && (
                    <img
                      className="w-[50px] h-[39px]"
                      src={`http://localhost:9980/${item.images[0].path}`}
                      alt={item.title}
                    />
                  )}
                  <span className="font-medium">{item.title}</span>
                </div>
                <span className="text-sm font-semibold">${item.price}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">
                  Subtotal: ${(item.price * item.quantity).toFixed(2)}
                </span>
                <div className="flex items-center border border-gray-500 rounded px-3 py-2">
                  {updatingItems[item.id] ? (
                    <span>...</span>
                  ) : (
                    <>
                      <span className="mr-2">
                        {item.quantity.toString().padStart(2, "0")}
                      </span>
                      <div className="flex flex-col gap-0">
                        <button
                          onClick={() => quantityChange(item, 1)}
                          disabled={updatingItems[item.id]}
                        >
                          ∧
                        </button>
                        <button
                          onClick={() => quantityChange(item, -1)}
                          disabled={updatingItems[item.id]}
                        >
                          ∨
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="flex flex-col md:flex-row justify-between mt-6 gap-4">
        <Link
          to="/"
          className="border-2 border-gray-300 w-full md:w-[218px] h-[56px] rounded flex items-center justify-center"
        >
          Return to Shop
        </Link>
        <button className="border-2 border-gray-300 w-full md:w-[195px] h-[56px] rounded">
          Update Cart
        </button>
      </div>

      <div className="mt-20 flex flex-col lg:flex-row justify-between gap-6">
        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-1/2">
          <input
            type="text"
            placeholder="Coupon Code "
            className="border-2 outline-none text-center border-gray-300 w-full sm:w-[300px] h-[56px] rounded"
          />
          <button className="bg-red-500 text-white w-full sm:w-[211px] h-[56px] rounded">
            Apply Coupon
          </button>
        </div>

        <div className="w-full lg:w-[470px] border-2 border-gray-300 h-[324px] rounded text-black">
          <div className="px-6 py-6">
            <h1 className="text-xl font-semibold">Cart Total</h1>
            <div className="flex justify-between mt-6">
              <p>Subtotal:</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <div className="bg-gray-300 w-full h-0.5 mt-4"></div>
            <div className="flex justify-between mt-4">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <div className="bg-gray-300 w-full h-0.5 mt-4"></div>
            <div className="flex justify-between mt-4">
              <p>Total:</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
          </div>
          <button className="bg-red-500 text-white w-[260px] mx-auto block mt-4 h-[56px] rounded">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
