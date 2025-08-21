import fullstar from "../assets/fullstar.svg";
import hearticon from "../assets/hearticon.svg";
import eyeicon from "../assets/eyeicon.svg";
import jacket from "../assets/jacket.svg";
import bag from "../assets/bag.svg";
import player from "../assets/player.svg";
import shelf from "../assets/shelf.svg";

const Fourth = () => {
  return (
    <div className="container mx-auto px-8">
      <div className="mt-[120px]">
        <div className="flex items-center gap-5">
          <div className="bg-red-500 w-5 h-10 rounded"></div>
          <h1 className="text-lg font-bold text-red-500">This Month</h1>
        </div>

        <div className="mt-5">
          <div className="flex flex-col sm:flex-row items-center sm:items-end sm:justify-between text-center sm:text-left gap-2 sm:gap-10">
            <h1 className="text-4xl sm:text-5xl font-semibold">
              Best Selling Products
            </h1>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            <button className="bg-red-500 mx-auto block w-[159px] h-[56px] rounded text-white">
              View All
            </button>
          </div>
        </div>

        <div className="w-full mt-[60px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                  src={jacket}
                  alt="controller"
                />
              </div>

              <button className="absolute bottom-0 left-0 right-0 bg-black text-white text-sm font-medium h-[41px]">
                Add to Cart
              </button>
            </div>

            <div className="p-4">
              <p className="text-sm font-medium text-gray-900">Red Jacket</p>

              <div className="flex items-center gap-3 mt-2">
                <p className="text-red-500 font-semibold">$200</p>
                <p className="text-gray-500 line-through text-sm">$600</p>
              </div>

              <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                {[...Array(5)].map((_, i) => (
                  <img key={i} className="w-4 h-4" src={fullstar} alt="star" />
                ))}
                <span>(230)</span>
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
                  src={bag}
                  alt="controller"
                />
              </div>
            </div>

            <div className="p-4">
              <p className="text-sm font-medium text-gray-900">Gucci Bag</p>

              <div className="flex items-center gap-3 mt-2">
                <p className="text-red-500 font-semibold">$900</p>
                <p className="text-gray-500 line-through text-sm">$1260</p>
              </div>

              <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                {[...Array(5)].map((_, i) => (
                  <img key={i} className="w-4 h-4" src={fullstar} alt="star" />
                ))}
                <span>(120)</span>
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
                  src={player}
                  alt="controller"
                />
              </div>
            </div>

            <div className="p-4">
              <p className="text-sm font-medium text-gray-900">
                Cpu Liquid Cooler
              </p>

              <div className="flex items-center gap-3 mt-2">
                <p className="text-red-500 font-semibold">$900</p>
                <p className="text-gray-500 line-through text-sm">$1260</p>
              </div>

              <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                {[...Array(5)].map((_, i) => (
                  <img key={i} className="w-4 h-4" src={fullstar} alt="star" />
                ))}
                <span>(90)</span>
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
                  src={shelf}
                  alt="controller"
                />
              </div>
            </div>

            <div className="p-4">
              <p className="text-sm font-medium text-gray-900">
              Small BookShelf
              </p>

              <div className="flex items-center gap-3 mt-2">
                <p className="text-red-500 font-semibold">$200</p>
                <p className="text-gray-500 line-through text-sm">$260</p>
              </div>

              <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                {[...Array(5)].map((_, i) => (
                  <img key={i} className="w-4 h-4" src={fullstar} alt="star" />
                ))}
                <span>(132)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[0.3px] bg-gray-300 w-full mt-[60px]"></div>
    </div>
  );
};

export default Fourth;
