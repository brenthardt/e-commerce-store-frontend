import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="min-h-screen flex flex-col justify-center items-center text-center py-16 px-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900">
          404 <br /> Not Found
        </h1>
        <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-md">
          Something went wrong. Please navigate to the home page.
        </p>
        <Link
          to="/"
          className="mt-10 w-full sm:w-[254px] h-12 bg-red-500 text-white rounded flex items-center justify-center"
        >
          Back to home page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
