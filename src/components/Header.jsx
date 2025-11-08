import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [register, setRegister] = useState(false)

  const logout = () => {
    localStorage.removeItem("Register");
    Window.location.reload();
  };

  const deleteAccount = () => {
    localStorage.clear();
    Window.location.reload();
  };

  return (
    <div className="bg-orange-600 pb-9">
      <div className="flex">
        <div className="flex mt-10 ml-45 gap-3">
          <img
            className="w-12 h-12 rounded-2xl"
            src="https://cdn.dribbble.com/users/2898742/screenshots/5660488/logo.jpg"
            alt=""
          />
          <h1 className="text-white mt-1 font-bold text-3xl">
            <Link to="/">We-Food</Link>
          </h1>
        </div>

        <div className="flex ml-200 mt-8 bg-black rounded-full w-15 h-15">
          <button
            className="text-white transition-colors  "
            onClick={() => setProfileOpen(!isProfileOpen)}
          >
            <svg
              className="w-10 h-10 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>
            <div className="bg-black h-7 mt-4 pb-2 pr-2 rounded-r-xl ml-">
              <h1 className="text-white font-bold "> {localStorage.getItem('name')}</h1>
            </div>
        </div>
        

        {isProfileOpen && (
          <div className="absolute right-60 mt-25 w-35 bg-white rounded-xl shadow-lg  ">
            <div className="bg-black h-45 pt-3 rounded-xl ">
              <button
                onClick={deleteAccount}
                className="block w-31 text-left px-7 py-3 text-xl text-white hover:bg-white hover:text-black rounded ml-2"
              >
                Register
              </button>
              <button
                onClick={logout}
                className="block w-31 text-left px-7 py-3 text-xl text-white hover:bg-white hover:text-black rounded ml-2"
              >
                Log In
              </button>

              <button
                onClick={logout}
                className="block w-31 text-left px-7 py-3 text-xl text-white hover:bg-white hover:text-black rounded ml-2"
              >
                Logout
              </button>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
