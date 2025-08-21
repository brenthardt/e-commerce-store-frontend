import hearticon from "../assets/hearticon.svg";
import eyeicon from "../assets/eyeicon.svg";
import controller from "../assets/controller.svg";
import fullstar from "../assets/fullstar.svg";
import keyboard from "../assets/keyboard.svg";

const Second = () => {
  return (
    <div className="container mx-auto px-8">
      <div className="mt-[120px]">
        <div className="flex items-center gap-5">
          <div className="bg-red-500 w-5 h-10 rounded"></div>
          <h1 className="text-lg font-bold text-red-500">Today&apos;s</h1>
        </div>

        <div className="mt-5">
          <div className="flex flex-col sm:flex-row items-center sm:items-end sm:justify-between text-center sm:text-left gap-2 sm:gap-10">
            <h1 className="text-4xl sm:text-5xl font-semibold">Flash Sales</h1>
            <p className="text-2xl sm:text-5xl font-semibold">03:23:19:56</p>
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
              <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                -40%
              </div>

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
                  src={controller}
                  alt="controller"
                />
              </div>

              <button className="absolute bottom-0 left-0 right-0 bg-black text-white text-sm font-medium h-[41px]">
                Add to Cart
              </button>
            </div>

            <div className="p-4">
              <p className="text-sm font-medium text-gray-900">
                HAVIT HV-G92 Gamepad
              </p>

              <div className="flex items-center gap-3 mt-2">
                <p className="text-red-500 font-semibold">$120</p>
                <p className="text-gray-500 line-through text-sm">$160</p>
              </div>

              <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                {[...Array(5)].map((_, i) => (
                  <img key={i} className="w-4 h-4" src={fullstar} alt="star" />
                ))}
                <span>(88)</span>
              </div>
            </div>
          </div>

          <div className=" h-[350px] bg-white rounded-lg shadow hover:shadow-2xl transition-all duration-300">
            <div className="w-full h-[250px] bg-slate-100 relative rounded-t-lg overflow-hidden">
              <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                -40%
              </div>

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
                  src={keyboard}
                  alt="controller"
                />
              </div>

              <button className="absolute bottom-0 left-0 right-0 bg-black text-white text-sm font-medium h-[41px]">
                Add to Cart
              </button>
            </div>

            <div className="p-4">
              <p className="text-sm font-medium text-gray-900">
                HAVIT HV-G92 Gamepad
              </p>

              <div className="flex items-center gap-3 mt-2">
                <p className="text-red-500 font-semibold">$120</p>
                <p className="text-gray-500 line-through text-sm">$160</p>
              </div>

              <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                {[...Array(5)].map((_, i) => (
                  <img key={i} className="w-4 h-4" src={fullstar} alt="star" />
                ))}
                <span>(88)</span>
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

export default Second;
