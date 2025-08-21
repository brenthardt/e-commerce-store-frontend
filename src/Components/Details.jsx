import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import truck2 from "../assets/truck2.svg";
import return2 from "../assets/return.svg";
import fullstar from "../assets/fullstar.svg";
import emptystar from "../assets/emptystar.svg";
import hearticon from "../assets/hearticon.svg";
import eyeicon from "../assets/eyeicon.svg";
import cart from "../assets/cart.svg";
import redhearticon from "../assets/redhearticon.svg";
import { productActions } from "../Armory/productActions";
import { addToWishlist, fetchWishlist } from "../Armory/wishlistActions";
import { addCart, fetchCart } from "../Armory/cartActions";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
   const navigate = useNavigate();
  const products = useSelector((state) => state.product.products);
  const { user } = useSelector((state) => state.user);
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const cartThings = useSelector((state) => state.cart.things);
  const [product, setProduct] = useState(null);
  const [displayImages, setDisplayImages] = useState([]);
  const [mainImage, setMainImage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [userRating, setUserRating] = useState(0);

  const isInWishlist = wishlistItems.some(
    (item) => String(item.productId) === String(id)
  );

  useEffect(() => {
    const userId = user?.id || localStorage.getItem("id");
    if (userId) {
      dispatch(fetchWishlist(userId));
    }

    const foundProduct = products.find((p) => p.id === id);
    setProduct(foundProduct);

    if (foundProduct?.images) {
      const availableImages = foundProduct.images;
      const imagesToDisplay = [];

      setMainImage(availableImages[0]);

      for (let i = 0; i < 4; i++) {
        imagesToDisplay.push({
          ...availableImages[0],
          isDuplicate: true,
        });
      }

      setDisplayImages(imagesToDisplay);
    }

    if (id && !foundProduct?.ratings) {
      dispatch(productActions.fetchProductRatings(id));
    }
  }, [id, products, dispatch, user]);

  const tClick = (img) => {
    if (!img.isDuplicate) {
      setMainImage(img);
    }
  };

  const qChange = (amount) => {
    setQuantity((prev) => {
      const next = prev + amount;
      if (next < 1) return 1;
      if (product.quantity && next > product.quantity) return product.quantity;
      return next;
    });
  };

  if (!product) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">Loading...</div>
    );
  }

  const getImageUrl = (imageObj) => {
    if (!imageObj) return "";
    return `http://localhost:9980/${imageObj.path}`;
  };

  const calculatePrice = () => {
    if (product.discount > 0) {
      return (product.price * (1 - product.discount / 100)).toFixed(2);
    }
    return product.price.toFixed(2);
  };

  const startClick = (star) => {
    const userId = user?.id || localStorage.getItem("id");
    if (!userId) {
      alert("Please login to rate products");
      return;
    }
    setUserRating(star);
    dispatch(productActions.addRating(id, userId, star));
  };

  const renderStars = () => {
    const averageRating = product?.averageStars || 0;

    const userRatingForProduct = user?.id
      ? product?.ratings?.find((r) => r.userId === user.id)?.stars
      : 0;

    return (
      <div className="flex items-center gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <img
            key={star}
            src={
              star <= (userRating || userRatingForProduct || averageRating)
                ? fullstar
                : emptystar
            }
            alt={`${star} star`}
            className="w-6 h-6 cursor-pointer"
            onClick={() => startClick(star)}
          />
        ))}
        <span className="ml-2 text-yellow-600 font-semibold text-base">
          {averageRating.toFixed(1)}
        </span>
      </div>
    );
  };

  const wc = () => {
    const userId = user?.id || localStorage.getItem("id");
    if (!isInWishlist) {
      dispatch(addToWishlist(product, userId));
    }
  };

  const handleAddToCart = (item) => {
    const userId = user?.id || localStorage.getItem("id");
    if (!userId) {
      alert("Please login to add items to cart");
      return;
    }
    if (!isInCart(item.id)) {
      dispatch(
        addCart(
          {
            id: item.id,
            title: item.title,
            price: item.price,
            quantity: 1,
          },
          userId
        )
      );
      dispatch(fetchCart(userId));
    }
  };

  const isInCart = (productId) =>
    cartThings.some(
      (cartItem) => String(cartItem.productId) === String(productId)
    );

     const handleBuyNow = () => {
    navigate("/checkout", {
      state: {
        product: {
          ...product,
          quantity: quantity,
        },
      },
    });
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col xl:flex-row justify-center gap-8 xl:gap-[70px] items-center">
        <div className="w-full xl:w-[700px] h-auto xl:h-[600px] mt-10 xl:mt-44 flex flex-col xl:flex-row justify-between items-center">
          <div className="flex flex-row xl:flex-col gap-4 md:gap-4 xl:gap-4 w-full xl:w-auto xl:h-[600px]">
            {displayImages.map((img, index) => (
              <div
                key={index}
                className={`w-1/4 xl:w-[170px] h-[70px] sm:h-[100px] md:h-[120px] xl:h-[138px] mt-0 bg-gray-200 flex items-center justify-center relative
                  ${img.isDuplicate ? "cursor-not-allowed" : "cursor-pointer"}`}
                onClick={() => tClick(img)}
              >
                <img
                  className={`border-2 w-[60px] sm:w-[80px] md:w-[100px] xl:w-[121px] h-[50px] sm:h-[70px] md:h-[90px] xl:h-[114px] object-contain
                    ${
                      img.isDuplicate ? "filter blur-[5px] brightness-90" : ""
                    }`}
                  src={getImageUrl(img)}
                  alt={
                    img.isDuplicate
                      ? "Image not available"
                      : `Thumbnail ${index + 1}`
                  }
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/100";
                  }}
                />
                {img.isDuplicate && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                    <span className="text-white text-xs sm:text-sm font-medium px-1 text-center">
                      Not Available
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="w-full xl:w-[500px] h-[180px] sm:h-[250px] md:h-[350px] xl:h-[600px] bg-gray-200 flex items-center justify-center mt-6 xl:mt-0">
            {mainImage && (
              <img
                className="border-2 w-full max-w-[446px] h-[120px] sm:h-[180px] md:h-[250px] xl:h-[315px] object-contain"
                src={getImageUrl(mainImage)}
                alt={product.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/400";
                }}
              />
            )}
          </div>
        </div>

        <div
          className={`w-full max-w-xl xl:w-[400px] h-auto xl:h-[600px] mt-10 xl:mt-44 ${
            product.quantity === 0 ? "pointer-events-none opacity-50" : ""
          }`}
        >
          <div className="mx-auto">
            <h1 className="text-xl xl:text-2xl font-semibold">
              {product.title}
            </h1>
            <div className="flex mt-4">
              <div className="flex justify-between gap-2 items-center">
                {renderStars()}
                <p className="text-gray-400">
                  ({product?.ratings?.length || 0} Reviews)
                </p>{" "}
                |{" "}
                <p className="text-green-500">
                  {product.quantity > 0 ? "In Stock" : "Out of Stock"}
                </p>
              </div>
            </div>

            <h1 className="text-lg xl:text-xl font-semibold mt-4">
              ${calculatePrice()}
              {product.discount > 0 && (
                <span className="ml-2 text-gray-400 line-through">
                  ${product.price.toFixed(2)}
                </span>
              )}
            </h1>

            <p className="w-full xl:w-[373px] h-auto xl:h-[63px] mt-6">
              {product.description}
            </p>
            <div className="h-[1px] bg-gray-400 w-full mx-auto mt-8"></div>

            {product.color && (
              <div className="flex gap-3 items-center mt-6">
                <h1>Colors:</h1>
                <input
                  type="radio"
                  className="w-5 h-5"
                  style={{ backgroundColor: product.color }}
                  checked
                  readOnly
                />
              </div>
            )}

            {product.size && (
              <div className="flex gap-3 items-center mt-6">
                <h1>Size:</h1>
                <button className="border-2 rounded-md w-8 h-8">
                  {product.size}
                </button>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 items-center mt-6">
              <div className="flex">
                <button
                  className="border-2 rounded-l-md w-10 h-11"
                  onClick={() => qChange(-1)}
                  disabled={product.quantity === 0}
                >
                  -
                </button>
                <div className="border-2 w-20 h-11 flex items-center">
                  <p className="mx-auto">
                    {" "}
                    {product.quantity === 0 ? 0 : quantity}
                  </p>
                </div>
                <button
                  className="border-2 rounded-r-md w-10 h-11 bg-red-500 text-white"
                  onClick={() => qChange(1)}
                  disabled={product.quantity === 0}
                >
                  +
                </button>
              </div>
              <div className="flex gap-2 items-center">
                <button
                  disabled={product.quantity === 0}
                  onClick={handleBuyNow}
                  className="rounded-md w-full sm:w-[165px] h-11 bg-red-500 text-white"
                >
                  Buy Now
                </button>

                <button
                  className="border-2 rounded-md w-10 h-10"
                  onClick={wc}
                  disabled={isInWishlist}
                >
                  <img
                    className="mx-auto w-7 h-7"
                    src={isInWishlist ? redhearticon : hearticon}
                    alt="Wishlist"
                  />
                </button>
              </div>
            </div>

            <div className="w-full mt-10 rounded-md">
              <div className="flex border-2 gap-4 items-center w-full p-2">
                <img
                  className="w-10 h-10 rounded-full"
                  src={truck2}
                  alt="Delivery"
                />
                <div className="items-center">
                  <h3 className="font-semibold">Free Delivery</h3>
                  <p className="underline mt-2">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>

              <div className="flex border-2 gap-4 items-center w-full p-2">
                <img
                  className="w-10 h-10 rounded-full"
                  src={return2}
                  alt="Return"
                />
                <div className="items-center">
                  <h3 className="font-semibold">Return Policy</h3>
                  <p className="underline mt-2">
                    Free 30 Days Delivery Returns. Details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related section */}
      <div className="mt-32">
        <div className="flex items-center gap-3 mb-5">
          <div className="bg-red-500 w-5 h-10 rounded"></div>
          <h2 className="text-lg">Related Items</h2>
          <div className="mx-auto">
            <button className="w-[159px] h-[56px] rounded border-2">
              View All
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((item) => (
            <div key={item.id} className="flex justify-center">
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
                    {item.images.length > 0 && (
                      <img
                        className="w-[172px] h-[152px] object-contain"
                        src={`http://localhost:9980/${item.images[0].path}`}
                        alt={item.title}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://via.placeholder.com/200";
                        }}
                      />
                    )}
                  </div>
                  <div
                    className={`absolute bottom-0 left-0 right-0 flex justify-center items-center gap-2 text-white text-sm font-medium h-[41px] ${
                      isInCart(item.id) ? "bg-green-800" : "bg-black"
                    }`}
                    style={
                      isInCart(item.id)
                        ? { cursor: "not-allowed", opacity: 0.9 }
                        : {}
                    }
                  >
                    <img className="w-6 h-6" src={cart} alt="cart" />
                    <button
                      disabled={isInCart(item.id)}
                      onClick={() => handleAddToCart(item)}
                    >
                      {isInCart(item.id) ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-gray-900">
                    {item.title}
                  </p>
                  <p className="text-red-500 font-semibold mt-2">
                    ${item.price.toFixed(2)}
                  </p>
                  <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                    {[...Array(5)].map((_, i) => (
                      <img
                        key={i}
                        className="w-4 h-4"
                        src={i < 4 ? fullstar : emptystar}
                        alt="star"
                      />
                    ))}
                    <span>(150)</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
