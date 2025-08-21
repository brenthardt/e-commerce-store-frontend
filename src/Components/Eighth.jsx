import truck from "../assets/truck.svg";
import reception from "../assets/reception.svg";
import secure from "../assets/secure.svg";

const Eighth = () => {
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="mt-[100px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Card 1 */}
        <div className="text-center">
          <div className="bg-gray-400 rounded-full w-[80px] h-[80px] flex items-center justify-center mx-auto">
            <div className="bg-black rounded-full w-[58px] h-[58px] flex items-center justify-center">
              <img src={truck} alt="truck" className="w-10 h-10" />
            </div>
          </div>
          <h1 className="text-xl font-bold mt-6">FREE AND FAST DELIVERY</h1>
          <p className="text-sm text-gray-600 mt-2">
            Free delivery for all orders over $140
          </p>
        </div>

        {/* Card 2 */}
        <div className="text-center">
          <div className="bg-gray-400 rounded-full w-[80px] h-[80px] flex items-center justify-center mx-auto">
            <div className="bg-black rounded-full w-[58px] h-[58px] flex items-center justify-center">
              <img src={reception} alt="reception" className="w-10 h-10" />
            </div>
          </div>
          <h1 className="text-xl font-bold mt-6">24/7 CUSTOMER SERVICE</h1>
          <p className="text-sm text-gray-600 mt-2">
            Friendly 24/7 customer support
          </p>
        </div>

        {/* Card 3 */}
        <div className="text-center">
          <div className="bg-gray-400 rounded-full w-[80px] h-[80px] flex items-center justify-center mx-auto">
            <div className="bg-black rounded-full w-[58px] h-[58px] flex items-center justify-center">
              <img src={secure} alt="secure" className="w-10 h-10" />
            </div>
          </div>
          <h1 className="text-xl font-bold mt-6">100% REFUND</h1>
          <p className="text-sm text-gray-600 mt-2">
            We return money within 30 days
          </p>
        </div>
      </div>
    </div>
  );
};

export default Eighth;
