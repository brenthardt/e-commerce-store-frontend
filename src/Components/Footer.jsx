import send from "../assets/send.svg";
import qrcode from "../assets/qrcode.png";
import googleplay from "../assets/googleplay.svg";
import appstore from "../assets/appstore.svg";
import linkedin from "../assets/linkedin.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white mt-32">
    
      <div className="container mx-auto px-8 py-12 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div>
            <h1 className="text-xl font-bold mb-2">Exclusive</h1>
            <h2 className="text-sm font-semibold mb-2">Subscribe</h2>
            <p className="text-sm mb-4">Get 10% off from your first order</p>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your Email"
                className="w-full bg-black border border-white text-white rounded h-10 pl-3 pr-10 text-sm"
              />
              <img
                src={send}
                alt="send"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
              />
            </div>
          </div>

          <div>
            <h1 className="text-xl font-bold mb-2">Support</h1>
            <p className="text-sm mb-2">
              129 Buoyed Street, Stockholm,
              <br /> SE 3485, Sweden
            </p>
            <p className="text-sm mb-2">supportofswdn@gmail.com</p>
            <p className="text-sm">+46 327 382 3090</p>
          </div>

          <div>
            <h1 className="text-xl font-bold mb-2">Account</h1>
            <ul className="space-y-2 text-sm">
              <Link to={"/account"}>My Account</Link> <br />
              <Link to={"/login"}>Login / Register</Link><br />
              <Link to={"/cart"}>Cart</Link><br />
              <Link to={"/wishlist"}>Wishlist</Link><br />
              <Link to={"/"}>Shop</Link>
            </ul>
          </div>

          <div>
            <h1 className="text-xl font-bold mb-2">Links</h1>
            <ul className="space-y-2 text-sm">
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>FAQ</li>
              <Link to={"/contact"}>Contact</Link>
            </ul>
          </div>

          <div>
            <h1 className="text-xl font-bold mb-2">Download App</h1>
            <p className="text-xs text-gray-400 mb-3">Save $3 with App</p>
            <div className="flex items-center gap-3">
              <img src={qrcode} alt="QR Code" className="w-16 h-16" />
              <div className="flex flex-col gap-2">
                <img src={googleplay} alt="Google Play" className="w-24" />
                <img src={appstore} alt="App Store" className="w-24" />
              </div>
            </div>
            <div className="mt-4">
              <img
                src={linkedin}
                alt="LinkedIn"
                className="w-6 h-6 bg-blue-500 rounded p-1"
              />
            </div>
          </div>
        </div>

        <div className="h-px bg-gray-600 my-8" />

        <p className="text-center text-xs text-gray-400">
          © 2025. Developed by Baxrom. Design rights belong to Rimel.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
