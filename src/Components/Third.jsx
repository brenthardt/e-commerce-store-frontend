import cellphone from "../assets/cellphone.svg";
import computer from "../assets/computer.svg";
import gamepad from "../assets/gamepad.svg";
import watch from "../assets/watch.svg";
import camera from "../assets/camera.svg";
import headphone from "../assets/headphone.svg";

const Third = () => {
  return (
    <div className="container mx-auto px-8">
      <div className="mt-20">
        <div className="flex items-center gap-5">
          <div className="bg-red-500 w-5 h-10 rounded"></div>
          <h1 className="text-lg font-bold text-red-500">Categories</h1>
        </div>

        <div className="mt-5">
          <div className="flex flex-col sm:flex-row items-center sm:items-end sm:justify-between text-center sm:text-left gap-2 sm:gap-10">
            <h1 className="text-4xl sm:text-5xl font-semibold">
              Browse by Category
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-[60px]">
          {[
            { icon: cellphone, label: "Phones" },
            { icon: computer, label: "Computers" },
            { icon: watch, label: "SmartWatch" },
            { icon: camera, label: "Camera", highlight: true },
            { icon: headphone, label: "HeadPhone" },
            { icon: gamepad, label: "Gaming" },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`h-[145px] flex flex-col items-center shadow hover:shadow-2xl transition-all duration-300  justify-center rounded border border-gray-500 text-center ${
                item.highlight ? "bg-red-500 text-white" : "bg-white"
              }`}
            >
              <img
                className="w-[56px] h-[56px] mb-2"
                src={item.icon}
                alt={item.label}
              />
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="h-[0.3px] bg-gray-300 w-full mt-[70px]"></div>
    </div>
  );
};

export default Third;
