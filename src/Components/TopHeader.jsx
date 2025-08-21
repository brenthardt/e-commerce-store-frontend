import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { productActions } from "../Armory/productActions";
import { useNavigate } from "react-router-dom";

const TopHeader = () => {
  const products = useSelector((state) => state.product.products);
  const [discountedProducts, setDiscountedProducts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    dispatch(productActions.loadProducts());
  }, [dispatch]);

  useEffect(() => {
    const filtered = products.filter((product) => {
      const hasDiscount = Number(product.discount) > 0;
      const hasTitle = Boolean(product.title);
      return hasDiscount && hasTitle;
    });

    setDiscountedProducts(filtered);
  }, [products]);

  const fallbackContent = (
    <div className="flex flex-col sm:flex-row items-center justify-center text-white px-8 text-xs sm:text-sm md:text-base text-center gap-1 sm:gap-4">
      <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4">
        <p className="font-light max-w-xs sm:max-w-full leading-snug">
          Order PlayStation 5 and earn free delivery on your purchase!
        </p>
        <p className="font-light underline cursor-pointer">ShopNow</p>
      </div>
    </div>
  );

  return (
    <div className="bg-black w-full py-2 relative">
      <div className="max-w-screen-xl mx-auto">
        {discountedProducts.length > 0 ? (
          <Carousel
            autoPlay
            infiniteLoop
            interval={7000}
            transitionTime={5000}
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            stopOnHover={false}
            key={discountedProducts.length}
          >
            {discountedProducts.map((product) => (
              <div
                key={product.id}
                className="flex flex-col sm:flex-row items-center justify-center text-white px-8 text-xs sm:text-sm md:text-base text-center gap-1 sm:gap-4"
              >
                <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4">
                  <p className="font-light max-w-xs sm:max-w-full leading-snug">
                    {product.title} - {product.discount}% OFF! Limited Time
                    Offer
                  </p>
                  <button
                    className="font-light underline cursor-pointer"
                    onClick={() => navigate(`/details/${product.id}`)}
                  >
                    ShopNow
                  </button>
                </div>
              </div>
            ))}
          </Carousel>
        ) : (
          fallbackContent
        )}
      </div>
      <p className="absolute right-4 top-1/2 -translate-y-1/2 font-light text-xs sm:text-sm">
        English
      </p>
    </div>
  );
};

export default TopHeader;
