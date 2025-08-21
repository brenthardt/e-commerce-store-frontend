import ps5 from "../assets/ps5.svg";
import speakers from "../assets/speakers.svg";
import colone from "../assets/colone.svg";

const Seventh = () => {
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="mt-[100px]">
        <div className="flex items-center gap-3">
          <div className="bg-red-500 w-4 h-8 rounded"></div>
          <h1 className="text-md sm:text-lg font-bold text-red-500">
            Featured
          </h1>
        </div>

        <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-2 sm:gap-10">
          <h1 className="text-3xl sm:text-5xl font-semibold">New Arrival</h1>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="relative bg-black rounded-lg overflow-hidden">
            <img src={ps5} alt="ps5" className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4 text-white space-y-2">
              <h1 className="text-xl sm:text-2xl font-bold">PlayStation 5</h1>
              <p className="text-sm sm:text-base max-w-[300px]">
                Black and White version of the PS5 coming out on sale.
              </p>
              <button className="underline text-sm">Shop Now</button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative bg-black w-full h-[284px] rounded-lg overflow-hidden flex items-end p-4 text-white">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold">
                  Women&apos;s Collections
                </h1>
                <p className="text-sm sm:text-base">
                  Featured woman collections that give you another vibe.
                </p>
                <button className="underline text-sm mt-2">Shop Now</button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="relative bg-black flex-1 rounded-lg overflow-hidden">
                <img
                  src={speakers}
                  alt="speakers"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 text-white space-y-2">
                  <h1 className="text-lg font-bold">Speakers</h1>
                  <p className="text-sm">Wireless Speakers from Amazon</p>
                  <button className="underline text-sm">Shop Now</button>
                </div>
              </div>

              <div className="relative bg-black flex-1 rounded-lg overflow-hidden">
                <img
                  src={colone}
                  alt="colone"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 text-white space-y-2">
                  <h1 className="text-lg font-bold">Perfume</h1>
                  <p className="text-sm">Gucci intense oud edp</p>
                  <button className="underline text-sm">Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seventh;
