import phoneimage from "../assets/phoneimage.svg";
import applelogo from "../assets/applelogo.svg";

const First = () => {
  return (
    <div className="container mx-auto px-8">
      <div className="flex flex-col lg:flex-row gap-6 mt-10">
        <div className="flex flex-col lg:flex-row">
          <ul className="text-black text-sm w-full lg:w-[217px]">
            {[
              "Woman's Fashion",
              "Men's Fashion",
              "Electronics",
              "Home & Lifestyle",
              "Medicine",
              "Sports & Outdoor",
              "Baby's & Toys",
              "Groceries & Pets",
              "Health & Beauty",
            ].map((item, index) => (
              <li key={index} className="mt-4 first:mt-0">
                {item}
              </li>
            ))}
          </ul>
          <div className="w-full lg:w-[0.3px] bg-gray-300 lg:h-full my-4 lg:my-0"></div>
        </div>

        <div className="bg-black text-white rounded flex flex-col lg:flex-row items-center justify-between w-full h-auto lg:h-[344px] px-4 lg:px-6 py-6">
          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-4">
            <div className="flex items-center gap-3 text-2xl font-semibold">
              <img className="w-10 h-[48px]" src={applelogo} alt="Apple Logo" />
              iPhone 14 Series
            </div>
            <p className="text-4xl sm:text-5xl font-bold">
              Up to 10% <br /> off Voucher
            </p>
            <button className="underline text-base">Shop Now</button>
          </div>
          <img
            className="w-[250px] sm:w-[300px] lg:w-[400px] mt-6 lg:mt-0"
            src={phoneimage}
            alt="iPhone"
          />
        </div>
      </div>
    </div>
  );
};

export default First;
