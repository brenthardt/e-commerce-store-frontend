import { Link } from "react-router-dom";
import shoe from "../assets/shoe.jpg";
import bagicon from "../assets/bagicon.svg";
import store from "../assets/store.svg";
import dollar from "../assets/dollar.svg";
import profit from "../assets/profit.svg";
import linkedin from "../assets/linkedin.svg";
import chairman from "../assets/chairman.svg";
import manager from "../assets/manager.svg";
import boss from "../assets/boss.jpg";

import Eighth from "./Eighth";

const About = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-start gap-1 mt-20 mb-10 text-sm sm:text-base">
        <Link to="/" className="text-gray-500">
          Home /
        </Link>
        <Link to="/">About</Link>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-10 items-center">
        <div className="max-w-xl">
          <h1 className="mt-10 text-3xl sm:text-4xl font-semibold">
            Our Story
          </h1>
          <p className="mt-6 text-base sm:text-lg text-gray-700">
            Launched in 1872, Exclusive is premium online shopping marketplace
            with an active presence in No Mans Land. Supported by wide range of
            tailored marketing, data and service solutions, Exclusive has 4510
            sellers and 200 brands and serves 3 million customers across the
            region. <br />
            <br />
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assortment in categories
            ranging from consumer. No, I do not own Nike.corp
          </p>
        </div>

        <div className="w-full lg:w-[705px]">
          <img
            className="w-full max-h-[600px] object-cover rounded-lg blur-[5px]"
            src={shoe}
            alt="bg"
          />
        </div>
      </div>

      <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        <div className="border-2 rounded w-full max-w-xs h-[230px] flex flex-col items-center justify-center">
          <div className="bg-gray-400 rounded-full w-[80px] h-[80px] flex items-center justify-center">
            <div className="bg-black rounded-full w-[58px] h-[58px] flex items-center justify-center">
              <img src={store} alt="store" className="w-10 h-10" />
            </div>
          </div>
          <h1 className="text-xl font-bold mt-6">4.5k</h1>
          <p className="text-sm text-gray-600 mt-2">Active Sellers</p>
        </div>

        <div className="w-full max-w-xs rounded h-[230px] bg-red-500 text-white flex flex-col items-center justify-center">
          <div className="bg-gray-400 rounded-full w-[80px] h-[80px] flex items-center justify-center">
            <div className="bg-white rounded-full w-[58px] h-[58px] flex items-center justify-center">
              <img src={dollar} alt="dollar" className="w-10 h-10" />
            </div>
          </div>
          <h1 className="text-xl font-bold mt-6">32k</h1>
          <p className="text-sm mt-2">Monthly Profit</p>
        </div>

        <div className="border-2 w-full rounded max-w-xs h-[230px] flex flex-col items-center justify-center">
          <div className="bg-gray-400 rounded-full w-[80px] h-[80px] flex items-center justify-center">
            <div className="bg-black rounded-full w-[58px] h-[58px] flex items-center justify-center">
              <img src={bagicon} alt="customers" className="w-10 h-10" />
            </div>
          </div>
          <h1 className="text-xl font-bold mt-6">1.6k</h1>
          <p className="text-sm text-gray-600 mt-2">Active Customers</p>
        </div>

        <div className="border-2 w-full rounded max-w-xs h-[230px] flex flex-col items-center justify-center">
          <div className="bg-gray-400 rounded-full w-[80px] h-[80px] flex items-center justify-center">
            <div className="bg-black rounded-full w-[58px] h-[58px] flex items-center justify-center">
              <img src={profit} alt="gross" className="w-10 h-10" />
            </div>
          </div>
          <h1 className="text-xl font-bold mt-6">48k</h1>
          <p className="text-sm text-gray-600 mt-2">Annual Gross</p>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <div className="w-full max-w-sm h-auto  flex flex-col rounded overflow-hidden bg-white">
          <img
            className="w-full h-[430px] bg-gray-300"
            src={chairman}
            alt="Chairman"
          />
          <div className="flex gap-2 mt-4 items-center px-4">
            <h1 className="text-2xl font-semibold">Mr Brown</h1>
            <img
              className="bg-blue-400 rounded w-6 h-6"
              src={linkedin}
              alt=""
            />
          </div>
          <p className="mt-2 text-gray-600 px-4">Founder & Chairman</p>
          <p className="mt-2 text-gray-500 text-sm px-4">
            Mr. Brown is the visionary behind Exclusive, bringing over 20 years
            of experience in the e-commerce industry. His leadership has been
            instrumental in shaping the company&apos;s success and growth.
          </p>
        </div>

        <div className="w-full max-w-sm h-auto  rounded overflow-hidden bg-white">
          <img
            className="w-full h-[430px] object-cover"
            src={boss}
            alt="Michael"
          />
          <div className="p-4">
            <div className="flex gap-2  items-center px-4">
              <h1 className="text-2xl font-semibold">Mr Michael</h1>
              <img
                className="bg-blue-400 rounded w-6 h-6"
                src={linkedin}
                alt="LinkedIn"
              />
            </div>
            <p className="mt-2 text-gray-600 px-4">Co-founder & Shareholder</p>
            <p className="mt-2 text-gray-500 text-sm px-4">
              Mr. Michael is a co-founder and shareholder of Exclusive, playing
              a crucial role in the company&apos;s strategic direction and
              financial growth. His expertise in business development has been
              key to Exclusive&apos;s expansion.
            </p>
          </div>
        </div>

        <div className="w-full max-w-sm h-auto rounded overflow-hidden bg-white">
          <img className="w-full h-[430px] bg-gray-300" src={manager} alt="" />
          <div className="flex gap-2 mt-4 items-center px-4">
            <h1 className="text-2xl font-semibold">James Hart</h1>
            <img
              className="bg-blue-400 rounded w-6 h-6"
              src={linkedin}
              alt=""
            />
          </div>
          <p className="mt-2 text-gray-600 px-4">Executive Manager</p>
          <p className="mt-2 text-gray-500 text-sm px-4">
            James Hart is the Executive Manager at Exclusive, overseeing daily
            operations and ensuring the company runs smoothly. With a strong
            background in management, he plays a key role in driving the
            company&apos;s strategic initiatives.
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-10 items-center">
        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-red-500 flex items-center justify-center">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white"></div>
        </div>

        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gray-400"
          ></div>
        ))}
      </div>

      <Eighth />
    </div>
  );
};

export default About;
