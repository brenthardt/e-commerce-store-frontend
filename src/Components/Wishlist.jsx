import eyeicon from "../assets/eyeicon.svg";
import fullstar from "../assets/fullstar.svg";
import jacket2 from "../assets/jacket2.svg";
import cleats from "../assets/cleats.svg";
import dogfood from "../assets/dogfood.svg";
import car from "../assets/car.svg";
import bin from "../assets/bin.svg";
import cart from "../assets/cart.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteWishlistItem, fetchWishlist } from "../Armory/wishlistActions";
import { addCart, fetchCart } from "../Armory/cartActions";

const Wishlist = () => {
  const dispatch = useDispatch();
  const userId = localStorage.getItem("id");
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const cartThings = useSelector((state) => state.cart.things);

  useEffect(() => {
    if (userId) {
      dispatch(fetchWishlist(userId));
      dispatch(fetchCart(userId));
    }
  }, [dispatch, userId]);

  const Del = (id) => {
    dispatch(deleteWishlistItem(id, userId));
  };

  const handleAddToCart = (product) => {
    if (!userId) {
      alert("Please login to add items to cart");
      return;
    }

    dispatch(
      addCart(
        {
          id: product.productId || product.id,
          title: product.title,
          price: product.price,
          quantity: 1,
        },
        userId
      )
    );
  };

  const isInCart = (productId) =>
    cartThings.some(
      (cartItem) => String(cartItem.productId) === String(productId)
    );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mt-10">
        <div className="flex items-center gap-5">
          <h1 className="text-lg">Wishlist ({wishlistItems.length})</h1>
          <div className="mx-auto">
            <button
              onClick={() => {
                wishlistItems.forEach((item) => handleAddToCart(item));
              }}
              className="w-[223px] h-[56px] border-2 rounded hover:bg-gray-100 transition"
            >
              Move All to Cart
            </button>
          </div>
        </div>

        {/* Wishlist items */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="flex justify-center">
              <div className="bg-white w-full max-w-[300px] h-[350px] rounded-lg shadow hover:shadow-2xl transition-all duration-300">
                <div className="w-full h-[250px] bg-slate-100 relative rounded-t-lg overflow-hidden">
                  <div className="absolute top-3 right-3 z-10">
                    <img
                      className="w-8 h-8 bg-white rounded-full p-1 shadow hover:scale-105 transition"
                      src={bin}
                      alt="remove"
                      onClick={() => Del(item.id)}
                    />
                  </div>
                  <div className="flex justify-center pt-10">
                    {item.images && item.images.length > 0 ? (
                      <img
                        className="w-[172px] h-[152px] object-contain"
                        src={`http://localhost:9980/${item.images[0].path}`}
                        alt={item.title}
                      />
                    ) : (
                      <div className="w-[172px] h-[152px] bg-gray-200 flex items-center justify-center">
                        <span>No Image</span>
                      </div>
                    )}
                  </div>
                  <div
                    onClick={() =>
                      !isInCart(item.productId || item.id) &&
                      handleAddToCart(item)
                    }
                    className={`absolute bottom-0 left-0 right-0 flex justify-center items-center gap-2 text-white text-sm font-medium h-[41px] ${
                      isInCart(item.productId || item.id)
                        ? "bg-green-800"
                        : "bg-black"
                    }`}
                    style={
                      isInCart(item.productId || item.id)
                        ? { cursor: "not-allowed", opacity: 0.9 }
                        : {}
                    }
                  >
                    <img className="w-6 h-6" src={cart} alt="cart" />
                    <button disabled={isInCart(item.productId || item.id)}>
                      {isInCart(item.productId || item.id)
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-gray-900">
                    {item.title}
                  </p>
                  <p className="text-red-500 font-semibold mt-2">
                    ${item.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="h-[0.3px] bg-gray-300 w-full mt-10"></div>

        {/* Related section */}
        <div className="mt-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="bg-red-500 w-5 h-10 rounded"></div>
            <h2 className="text-lg">Related</h2>
            <div className="mx-auto">
              <button className="w-[159px] h-[56px] rounded border-2">
                View All
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[jacket2, dogfood, cleats, car].map((item, index) => (
              <div key={index} className="flex justify-center">
                <div className="bg-white w-full max-w-[300px] h-[350px] rounded-lg shadow hover:shadow-2xl transition-all duration-300">
                  <div className="w-full h-[250px] bg-slate-100 relative rounded-t-lg overflow-hidden">
                    <div className="absolute top-3 right-3 z-10">
                      <img
                        className="w-8 h-8 bg-white rounded-full p-1 shadow hover:scale-105 transition"
                        src={eyeicon}
                        alt="view"
                      />
                    </div>
                    <div className="flex justify-center pt-10">
                      <img
                        className="w-[172px] h-[152px] object-contain"
                        src={item}
                        alt="related"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center gap-2 bg-black text-white text-sm font-medium h-[41px]">
                      <img className="w-6 h-6" src={cart} alt="cart" />
                      <button>Add to Cart</button>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-medium text-gray-900">
                      Related Product
                    </p>
                    <p className="text-red-500 font-semibold mt-2">
                      ${index === 1 ? 10 : index === 2 ? 30 : 500}
                    </p>
                    <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                      {[...Array(5)].map((_, i) => (
                        <img
                          key={i}
                          className="w-4 h-4"
                          src={fullstar}
                          alt="star"
                        />
                      ))}
                      <span>({[56, 34, 23, 245][index]})</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
