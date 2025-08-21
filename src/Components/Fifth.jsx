import speaker from "../assets/speaker.svg";

const Fifth = () => {
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="mt-[120px] bg-black px-4 sm:px-14 py-10 flex flex-col-reverse sm:flex-col lg:flex-row items-center justify-between gap-10">
        <div className="text-center sm:text-center lg:text-left">
          <h5 className="text-green-500 text-sm">Categories</h5>
          <p className="text-white text-3xl sm:text-5xl font-bold mt-4 leading-tight">
            Enhance Your <br className="hidden sm:block" /> Quran Experience
          </p>

          <div className="flex justify-center sm:justify-center lg:justify-start flex-wrap gap-4 mt-6">
            <div className="w-[70px] h-[70px] rounded-full bg-white flex flex-col items-center justify-center text-xs font-semibold text-center">
              7
              <br />
              Days
            </div>
            <div className="w-[70px] h-[70px] rounded-full bg-white flex items-center justify-center text-xs font-semibold text-center">
              23
              <br />
              Hours
            </div>
            <div className="w-[70px] h-[70px] rounded-full bg-white flex items-center justify-center text-xs font-semibold text-center">
              36
              <br />
              Minutes
            </div>
            <div className="w-[70px] h-[70px] rounded-full bg-white flex items-center justify-center text-xs font-semibold text-center">
              14
              <br />
              Seconds
            </div>
          </div>

          <button className="bg-green-500 px-6 py-3 mt-8 text-white rounded">
            Buy Now
          </button>
        </div>

        <div className="w-full max-w-md sm:max-w-lg">
          <img
            className="w-full h-auto object-contain"
            src={speaker}
            alt="speaker"
          />
        </div>
      </div>
    </div>
  );
};

export default Fifth;
