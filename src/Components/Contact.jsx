import { Link } from "react-router-dom";
import phone from "../assets/phone.svg";
import email from "../assets/email.svg";

const Contact = () => {
  return (
    <div className="container mx-auto sm:px-6 lg:px-8 px-4">
      <div className="flex flex-wrap justify-start gap-1 mt-20 mb-10 text-sm sm:text-base">
        <Link to="/" className="text-gray-500">
          Home /
        </Link>
        <Link to="/">Contact</Link>
      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-8">
        <div className="w-full max-w-[340px] h-auto lg:h-[457px] px-4 shadow-lg rounded mx-auto">
          <div className="text-center mt-10">
            <div className="flex items-center gap-3 justify-center">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                <img src={phone} alt="phone" />
              </div>
              <p className="font-semibold text-xl">Contact us</p>
            </div>
            <p className="mt-6">
              We are available 24/7 to assist. <br />
              Contact : +1234567890
            </p>
          </div>

          <div className="h-[0.5px] bg-gray-300 w-[90%] mx-auto mt-8"></div>

          <div className="text-center mt-8">
            <div className="flex items-center gap-3 justify-center">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                <img src={email} alt="email" />
              </div>
              <p className="font-semibold text-xl">Send Email</p>
            </div>
            <p className="mt-5 p-6">
              Fill out our form and we will contact you within 24 hours. <br />
              Emails: customer@exclusive.com <br />
              Emails: support@exclusive.com
            </p>
          </div>
        </div>

        <div className="w-full max-w-[800px] shadow-lg rounded px-4 py-6 mx-auto">
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="w-full">
              <label className="block">Name</label>
              <input
                type="text"
                placeholder="  You Name "
                className="outline-none mt-2 w-full h-[50px] bg-gray-100 rounded"
              />
            </div>
            <div className="w-full">
              <label className="block">Email</label>
              <input
                type="text"
                placeholder="  You Email "
                className="outline-none mt-2 w-full h-[50px] bg-gray-100 rounded"
              />
            </div>
            <div className="w-full">
              <label className="block">Phone</label>
              <input
                type="text"
                placeholder="  You Phone "
                className="outline-none mt-2 w-full h-[50px] bg-gray-100 rounded"
              />
            </div>
          </div>
          <div className="w-full mt-4">
            <label className="block">Text Message</label>
            <textarea
              rows={6}
              placeholder="  Text Message "
              className="outline-none mt-2 w-full bg-gray-100 rounded p-2 resize-none"
            ></textarea>
          </div>
          
          <div className="flex justify-end mt-6">
            <button className="bg-red-500 text-white w-full sm:w-48 h-[56px] rounded">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
