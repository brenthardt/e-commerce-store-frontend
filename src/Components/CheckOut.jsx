import { Link, useLocation } from "react-router-dom";
// import car from "../assets/car.svg";
// import speaker from "../assets/speaker.svg";
import visa from "../assets/visa.svg";
import mcard from "../assets/mcard.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCheckout, placeOrder } from "../Armory/checkoutActions";

const CheckOut = () => {

  const dispatch = useDispatch();
  const [orderSuccess, setOrderSuccess] = useState(false);
 const location = useLocation();
 const productFromDetails = location.state?.product;
  const checkoutOrders = useSelector((state) => state.checkout.orders);
  const userId = localStorage.getItem("id");

 const [userInfo, setUserInfo] = useState({
   fullName: "",
   companyName: "",
   address: "",
   apartment: "",
   city: "",
   phone: "",
   email: "",
 });

 useEffect(() => {
   setUserInfo({
     fullName: localStorage.getItem("fullName") || "",
     companyName: localStorage.getItem("companyName") || "",
     address: localStorage.getItem("address") || "",
     apartment: localStorage.getItem("apartment") || "",
     city: localStorage.getItem("city") || "",
     phone: localStorage.getItem("phone") || "",
     email:
       localStorage.getItem("email") || localStorage.getItem("email") || "",
   });

   if (userId) {
     dispatch(fetchCheckout(userId));
   }
 }, [dispatch, userId]);

 const productsToShow = productFromDetails ? [productFromDetails] : [];

 const alreadyOrdered = checkoutOrders.some(
   (order) =>
     order.productId === productsToShow[0]?.id && order.userId === userId
 );


 const subtotal = productsToShow.reduce(
   (sum, item) => sum + item.price * (item.quantity || 1),
   0
 );

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!productsToShow.length) return;

    const checkoutData = {
      name: userInfo.fullName,
      company: userInfo.companyName,
      streetAddress: userInfo.address,
      apartment: userInfo.apartment,
      city: userInfo.city,
      phone: userInfo.phone,
      email: userInfo.email,
      userId: localStorage.getItem("id"),
      productId: productsToShow[0].id,
      quantity: productsToShow[0].quantity,
    };

    dispatch(placeOrder(checkoutData));
    setOrderSuccess(true);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-start gap-1 mt-20 mb-10 text-sm sm:text-base">
        <Link to="/" className="text-gray-500">
          Account /
        </Link>
        <Link to="/" className="text-gray-500">
          My Account /
        </Link>
        <Link to="/" className="text-gray-500">
          Product /
        </Link>
        <Link to="/" className="text-gray-500">
          View Cart /
        </Link>
        <Link to="/">CheckOut</Link>
      </div>

      <h1 className="mt-10 font-semibold text-2xl">Billing Details</h1>

      <div className="flex flex-col lg:flex-row justify-center gap-[100px] mt-10">
        <div className="w-full lg:w-[30%] ">
          {[
            { label: "Full Name", name: "fullName" },
            { label: "Company Name", name: "companyName" },
            { label: "Street Address", name: "address" },
            { label: "Apartment, floor, etc. (optional)", name: "apartment" },
            { label: "Town / City", name: "city" },
            { label: "Phone Number", name: "phone" },
            { label: "Email Address", name: "email" },
          ].map((field, idx) => (
            <div key={idx}>
              <label className="text-gray-400 block mb-1">{field.label}</label>
              <input
                type="text"
                className="outline-none text-center h-[50px] bg-gray-100 w-full rounded"
                value={userInfo[field.name]}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, [field.name]: e.target.value })
                }
              />
            </div>
          ))}

          <div className="flex items-center gap-3 mt-6">
            <input type="checkbox" className="accent-red-500 w-5 h-5" />
            <span>Save this information for faster check-out next time</span>
          </div>
        </div>

        <div className="w-full lg:w-[30%] mt-8  lg:mt-0">
          <div className="space-y-6">
            <div className="space-y-4">
              {productsToShow.length === 0 ? (
                <div className="text-gray-500">No product selected.</div>
              ) : (
                productsToShow.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <div className="flex items-center gap-4">
                      {item.images && item.images[0] && (
                        <img
                          src={`http://localhost:9980/${item.images[0].path}`}
                          className="w-12 h-10"
                          alt={item.title}
                        />
                      )}
                      <p>{item.title}</p>
                    </div>
                    <p>
                      <span className="text-green-500"> ${item.price}</span> x
                      {item.quantity || 1}
                    </p>
                  </div>
                ))
              )}
            </div>

            <div className="space-y-4 border-t border-gray-300 pt-4">
              <div className="flex justify-between">
                <p>Subtotal:</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p>Shipping:</p>
                <p>Free</p>
              </div>
              <div className="flex justify-between">
                <p>Total:</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <input type="radio" className="w-5 h-5 accent-red-500" />
                  <label>Bank</label>
                </div>
                <div className="flex gap-3">
                  <img src={visa} className="w-10 h-7" alt="Visa" />
                  <img src={mcard} className="w-10 h-7" alt="MasterCard" />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input type="radio" className="w-5 h-5 accent-red-500" />
                <label>Cash on Delivery</label>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <input
                type="text"
                placeholder="Coupon Code"
                className="border-2 outline-none text-center border-gray-300 w-full sm:w-[50%] h-[56px] rounded"
              />
              <button className="bg-red-500 text-white w-full sm:w-[50%] h-[56px] rounded">
                Apply Coupon
              </button>
            </div>

            <button
              onClick={handlePlaceOrder}
              disabled={orderSuccess || alreadyOrdered}
              className="bg-red-500 text-white w-full sm:w-48 h-[56px] rounded mt-4"
            >
              {alreadyOrdered
                ? "Already Ordered" 
                : orderSuccess
                ? "Order Placed!"
                : "Place Order"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
