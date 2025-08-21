import { Link } from "react-router-dom";

const Account = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-start gap-1 mt-20 mb-10 text-sm sm:text-base">
        <Link to="/" className="text-gray-500">
          Home /
        </Link>
        <Link to="/">Account</Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar */}
        <div className="w-full lg:w-[30%]">
          <div>
            <h1 className="text-lg font-semibold">Manage My Account</h1>
            <p className="text-red-500 mt-4">My profile</p>
            <p className="text-gray-500 mt-4">Address Book</p>
            <p className="text-gray-500 mt-4">My Payment Options</p>
          </div>

          <div className="mt-6">
            <h1 className="text-lg font-semibold">My Orders</h1>
            <p className="text-gray-500 mt-4">Returns</p>
            <p className="text-gray-500 mt-4">Canceled Products</p>
          </div>

          <div className="mt-6">
            <h1 className="text-lg font-semibold">My Wishlist</h1>
          </div>
        </div>

        {/* Form Area */}
        <div className="w-full lg:w-[70%] px-0 sm:px-4">
          <h1 className="text-xl mt-10 font-semibold text-red-500">
            Edit Your Profile
          </h1>

          <div className="flex flex-col sm:flex-row gap-6 mt-4">
            <div className="w-full">
              <label className="mt-4 block">First Name</label>
              <input
                type="text"
                className="outline-none mt-2 text-center w-full h-[50px] bg-gray-100 rounded"
              />
            </div>
            <div className="w-full">
              <label className="mt-4 block">Last Name</label>
              <input
                type="text"
                className="outline-none mt-2 text-center w-full h-[50px] bg-gray-100 rounded"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mt-6">
            <div className="w-full">
              <label className="mt-4 block">Email Address</label>
              <input
                type="text"
                className="outline-none mt-2 text-center w-full h-[50px] bg-gray-100 rounded"
              />
            </div>
            <div className="w-full">
              <label className="mt-4 block">Address</label>
              <input
                type="text"
                className="outline-none mt-2 text-center w-full h-[50px] bg-gray-100 rounded"
              />
            </div>
          </div>

          <div>
            <h1 className="text-xl mt-6 font-semibold">Password Changes</h1>

            <div className="mt-2">
              <label>Enter Current Password</label>
              <input
                type="password"
                className="outline-none w-full h-[50px] mt-1 bg-gray-100 rounded"
              />
            </div>
            <div className="mt-4">
              <label>Enter New Password</label>
              <input
                type="password"
                className="outline-none w-full h-[50px] mt-1 bg-gray-100 rounded"
              />
            </div>
            <div className="mt-4">
              <label>Confirm New Password</label>
              <input
                type="password"
                className="outline-none w-full h-[50px] mt-1 bg-gray-100 rounded"
              />
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-end">
            <button className="text-gray-600 hover:underline">Cancel</button>
            <button className="bg-red-500 text-white w-full sm:w-48 h-[56px] rounded">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
