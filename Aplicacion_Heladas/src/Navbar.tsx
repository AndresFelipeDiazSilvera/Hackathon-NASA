import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-[#1A5319]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href=""
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/public/logo.png" className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            FreezeWatch
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link to="/form">
            <button
              type="button"
              className="text-white hover:text-black bg-[#D6EFD8] hover:bg-[#D6EFD8] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-[#508D4E] dark:hover:bg-[508D4E]"
            >
              Register Frost
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
