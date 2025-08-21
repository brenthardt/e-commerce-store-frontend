import hearticon from "../assets/hearticon.svg";
import eyeicon from "../assets/eyeicon.svg";
import fullstar from "../assets/fullstar.svg";
import jacket2 from "../assets/jacket2.svg"
import cleats from "../assets/cleats.svg"
import dogfood from "../assets/dogfood.svg"
import car from "../assets/car.svg"
const Sixth = () => {
  return (
    <div className="container mx-auto px-8">
      <div className="mt-[120px]">
        <div className="flex items-center gap-5">
          <div className="bg-red-500 w-5 h-10 rounded"></div>
          <h1 className="text-lg font-bold text-red-500">Products</h1>
        </div>

        <div className="mt-5">
          <div className="flex flex-col sm:flex-row items-center sm:items-end sm:justify-between text-center sm:text-left gap-2 sm:gap-10">
            <h1 className="text-4xl sm:text-5xl font-semibold">
              Explore the Market
            </h1>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            <button className="w-[46px] h-[46px] bg-gray-100 rounded-full">
              ⇠
            </button>
            <button className="w-[46px] h-[46px] bg-gray-100 rounded-full">
              ⇢
            </button>
          </div>
        </div>

        <div className="w-full mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className=" h-[350px] bg-white rounded-lg shadow hover:shadow-2xl transition-all duration-300">
            <div className="w-full h-[250px] bg-slate-100 relative rounded-t-lg overflow-hidden">
              <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
                <img
                  className="w-8 h-8 bg-white rounded-full p-1 shadow hover:scale-105 transition"
                  src={hearticon}
                  alt="heart"
                />
                <img
                  className="w-8 h-8 bg-white rounded-full p-1 shadow hover:scale-105 transition"
                  src={eyeicon}
                  alt="eye"
                />
              </div>

              <div className="flex justify-center pt-10">
                <img
                  className="w-[172px] h-[152px] object-contain"
                  src={jacket2}
                  alt="jacket2"
                />
              </div>

              <button className="absolute bottom-0 left-0 right-0 bg-black text-white text-sm font-medium h-[41px]">
                Add to Cart
              </button>
            </div>

            <div className="p-4">
              <p className="text-sm font-medium text-gray-900">jacket</p>

              <div className="flex items-center gap-3 mt-2">
                <p className="text-red-500 font-semibold">$120</p>
              </div>

              <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                {[...Array(5)].map((_, i) => (
                  <img key={i} className="w-4 h-4" src={fullstar} alt="star" />
                ))}
                <span>(56)</span>
              </div>
            </div>
          </div>

          <div className=" h-[350px] bg-white rounded-lg shadow hover:shadow-2xl transition-all duration-300">
            <div className="w-full h-[250px] bg-slate-100 relative rounded-t-lg overflow-hidden">
              <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
                <img
                  className="w-8 h-8 bg-white rounded-full p-1 shadow hover:scale-105 transition"
                  src={hearticon}
                  alt="heart"
                />
                <img
                  className="w-8 h-8 bg-white rounded-full p-1 shadow hover:scale-105 transition"
                  src={eyeicon}
                  alt="eye"
                />
              </div>

              <div className="flex justify-center pt-10">
                <img
                  className="w-[172px] h-[152px] object-contain"
                  src={dogfood}
                  alt="dogfood"
                />
              </div>

              <button className="absolute bottom-0 left-0 right-0 bg-black text-white text-sm font-medium h-[41px]">
                Add to Cart
              </button>
            </div>

            <div className="p-4">
              <p className="text-sm font-medium text-gray-900">dog food</p>

              <div className="flex items-center gap-3 mt-2">
                <p className="text-red-500 font-semibold">$10</p>
              </div>

              <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                {[...Array(5)].map((_, i) => (
                  <img key={i} className="w-4 h-4" src={fullstar} alt="star" />
                ))}
                <span>(34)</span>
              </div>
            </div>
          </div>

          <div className=" h-[350px] bg-white rounded-lg shadow hover:shadow-2xl transition-all duration-300">
            <div className="w-full h-[250px] bg-slate-100 relative rounded-t-lg overflow-hidden">
              <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
                <img
                  className="w-8 h-8 bg-white rounded-full p-1 shadow hover:scale-105 transition"
                  src={hearticon}
                  alt="heart"
                />
                <img
                  className="w-8 h-8 bg-white rounded-full p-1 shadow hover:scale-105 transition"
                  src={eyeicon}
                  alt="eye"
                />
              </div>

              <div className="flex justify-center pt-10">
                <img
                  className="w-[172px] h-[152px] object-contain"
                  src={cleats}
                  alt="cleats"
                />
              </div>

              <button className="absolute bottom-0 left-0 right-0 bg-black text-white text-sm font-medium h-[41px]">
                Add to Cart
              </button>
            </div>

            <div className="p-4">
              <p className="text-sm font-medium text-gray-900">
                Football cleats
              </p>

              <div className="flex items-center gap-3 mt-2">
                <p className="text-red-500 font-semibold">$30</p>
              </div>

              <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                {[...Array(5)].map((_, i) => (
                  <img key={i} className="w-4 h-4" src={fullstar} alt="star" />
                ))}
                <span>(23)</span>
              </div>
            </div>
          </div>

          <div className=" h-[350px] bg-white rounded-lg shadow hover:shadow-2xl transition-all duration-300">
            <div className="w-full h-[250px] bg-slate-100 relative rounded-t-lg overflow-hidden">
              <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
                <img
                  className="w-8 h-8 bg-white rounded-full p-1 shadow hover:scale-105 transition"
                  src={hearticon}
                  alt="heart"
                />
                <img
                  className="w-8 h-8 bg-white rounded-full p-1 shadow hover:scale-105 transition"
                  src={eyeicon}
                  alt="eye"
                />
              </div>

              <div className="flex justify-center pt-10">
                <img
                  className="w-[172px] h-[152px] object-contain"
                  src={car}
                  alt="car"
                />
              </div>

              <button className="absolute bottom-0 left-0 right-0 bg-black text-white text-sm font-medium h-[41px]">
                Add to Cart
              </button>
            </div>

            <div className="p-4">
              <p className="text-sm font-medium text-gray-900">
                Kid&apos;s Electric toy car
              </p>

              <div className="flex items-center gap-3 mt-2">
                <p className="text-red-500 font-semibold">$500</p>
              </div>

              <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                {[...Array(5)].map((_, i) => (
                  <img key={i} className="w-4 h-4" src={fullstar} alt="star" />
                ))}
                <span>(245)</span>
              </div>
            </div>
          </div>

          <div className=" h-[350px] bg-white rounded-lg shadow hover:shadow-2xl transition-all duration-300">
            <div className="w-full h-[250px] bg-slate-100 relative rounded-t-lg overflow-hidden">
              <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
                <img
                  className="w-8 h-8 bg-white rounded-full p-1 shadow hover:scale-105 transition"
                  src={hearticon}
                  alt="heart"
                />
                <img
                  className="w-8 h-8 bg-white rounded-full p-1 shadow hover:scale-105 transition"
                  src={eyeicon}
                  alt="eye"
                />
              </div>

              <div className="flex justify-center pt-10">
                <img
                  className="w-[172px] h-[152px] object-contain"
                  src={jacket2}
                  alt="jacket2"
                />
              </div>

              <button className="absolute bottom-0 left-0 right-0 bg-black text-white text-sm font-medium h-[41px]">
                Add to Cart
              </button>
            </div>

            <div className="p-4">
              <p className="text-sm font-medium text-gray-900">jacket</p>

              <div className="flex items-center gap-3 mt-2">
                <p className="text-red-500 font-semibold">$120</p>
              </div>

              <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                {[...Array(5)].map((_, i) => (
                  <img key={i} className="w-4 h-4" src={fullstar} alt="star" />
                ))}
                <span>(56)</span>
              </div>
            </div>
          </div>

          <div className=" h-[350px] bg-white rounded-lg shadow hover:shadow-2xl transition-all duration-300">
            <div className="w-full h-[250px] bg-slate-100 relative rounded-t-lg overflow-hidden">
              <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
                <img
                  className="w-8 h-8 bg-white rounded-full p-1 shadow hover:scale-105 transition"
                  src={hearticon}
                  alt="heart"
                />
                <img
                  className="w-8 h-8 bg-white rounded-full p-1 shadow hover:scale-105 transition"
                  src={eyeicon}
                  alt="eye"
                />
              </div>

              <div className="flex justify-center pt-10">
                <img
                  className="w-[172px] h-[152px] object-contain"
                  src={dogfood}
                  alt="dogfood"
                />
              </div>

              <button className="absolute bottom-0 left-0 right-0 bg-black text-white text-sm font-medium h-[41px]">
                Add to Cart
              </button>
            </div>

            <div className="p-4">
              <p className="text-sm font-medium text-gray-900">dog food</p>

              <div className="flex items-center gap-3 mt-2">
                <p className="text-red-500 font-semibold">$10</p>
              </div>

              <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                {[...Array(5)].map((_, i) => (
                  <img key={i} className="w-4 h-4" src={fullstar} alt="star" />
                ))}
                <span>(34)</span>
              </div>
            </div>
          </div>

          <div className=" h-[350px] bg-white rounded-lg shadow hover:shadow-2xl transition-all duration-300">
            <div className="w-full h-[250px] bg-slate-100 relative rounded-t-lg overflow-hidden">
              <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
                <img
                  className="w-8 h-8 bg-white rounded-full p-1 shadow hover:scale-105 transition"
                  src={hearticon}
                  alt="heart"
                />
                <img
                  className="w-8 h-8 bg-white rounded-full p-1 shadow hover:scale-105 transition"
                  src={eyeicon}
                  alt="eye"
                />
              </div>

              <div className="flex justify-center pt-10">
                <img
                  className="w-[172px] h-[152px] object-contain"
                  src={cleats}
                  alt="cleats"
                />
              </div>

              <button className="absolute bottom-0 left-0 right-0 bg-black text-white text-sm font-medium h-[41px]">
                Add to Cart
              </button>
            </div>

            <div className="p-4">
              <p className="text-sm font-medium text-gray-900">
                Football cleats
              </p>

              <div className="flex items-center gap-3 mt-2">
                <p className="text-red-500 font-semibold">$30</p>
              </div>

              <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                {[...Array(5)].map((_, i) => (
                  <img key={i} className="w-4 h-4" src={fullstar} alt="star" />
                ))}
                <span>(23)</span>
              </div>
            </div>
          </div>

          <div className=" h-[350px] bg-white rounded-lg shadow hover:shadow-2xl transition-all duration-300">
            <div className="w-full h-[250px] bg-slate-100 relative rounded-t-lg overflow-hidden">
              <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
                <img
                  className="w-8 h-8 bg-white rounded-full p-1 shadow hover:scale-105 transition"
                  src={hearticon}
                  alt="heart"
                />
                <img
                  className="w-8 h-8 bg-white rounded-full p-1 shadow hover:scale-105 transition"
                  src={eyeicon}
                  alt="eye"
                />
              </div>

              <div className="flex justify-center pt-10">
                <img
                  className="w-[172px] h-[152px] object-contain"
                  src={car}
                  alt="car"
                />
              </div>

              <button className="absolute bottom-0 left-0 right-0 bg-black text-white text-sm font-medium h-[41px]">
                Add to Cart
              </button>
            </div>

            <div className="p-4">
              <p className="text-sm font-medium text-gray-900">
                Kid&apos;s Electric toy car
              </p>

              <div className="flex items-center gap-3 mt-2">
                <p className="text-red-500 font-semibold">$500</p>
              </div>

              <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                {[...Array(5)].map((_, i) => (
                  <img key={i} className="w-4 h-4" src={fullstar} alt="star" />
                ))}
                <span>(245)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="bg-red-500 mx-auto block w-[234px] h-[56px] mt-[60px] rounded text-white">
        View All Products
      </button>
      <div className="h-[0.3px] bg-gray-300 w-full mt-[60px]"></div>
    </div>
  );
};

export default Sixth;
