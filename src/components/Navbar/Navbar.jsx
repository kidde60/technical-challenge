import React, { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    // Retrieve the data from localStorage
    const storedUserData = localStorage.getItem("signupDetails");

    // Check if data exists in localStorage
    if (storedUserData) {
      // Convert the string back to an object using JSON.parse
      setUserData(JSON.parse(storedUserData));
    }
  }, []);
  let username = "";
  if (userData) {
    username = userData.username;
  }

  return (
    <>
      <header className="flex justify-between header-mb p-6 md:px-24 w-full shadow-lg min-h-24 bg-white">
        <nav className="flex gap-10 flex-col md:flex-row">
          <NavLink to="/home">
            <h1 className="app-color-primary h-full flex  items-center text-3xl font-bold  mr-2">
              Book List
            </h1>
          </NavLink>
          <NavLink
            to="/book"
            className={({ isActive }) => (isActive ? "" : "opacity-50")}
          >
            <span className="h-full flex items-center text-black-two text-sm">
              Add Book
            </span>
          </NavLink>
          <NavLink
            to="/find"
            className={({ isActive }) => (isActive ? "" : "opacity-50")}
          >
            <span className="h-full flex items-center text-black-two text-sm">
              Search Book
            </span>
          </NavLink>
        </nav>
        <NavLink
          to="/delete"
          className={({ isActive }) => (isActive ? "" : "opacity-50")}
        >
          <span className="h-full flex items-center text-black-two text-sm">
            Delete Book
          </span>
        </NavLink>
        <NavLink
          to="/deleteAll"
          className={({ isActive }) => (isActive ? "" : "opacity-50")}
        >
          <span className="h-full flex items-center text-black-two text-sm">
            Delete All Books
          </span>
        </NavLink>
        <NavLink
          to="/update"
          className={({ isActive }) => (isActive ? "" : "opacity-50")}
        >
          <span className="h-full flex items-center text-black-two text-sm">
            Edit Book
          </span>
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "" : "opacity-50")}
        >
          <span className="h-full flex items-center text-black-two text-sm">
            Logout
          </span>
        </NavLink>
        <div className="h-full flex items-center text-black-two text-sm gap-1">
          <button
            type="button"
            aria-label="Save"
            className="h-11 w-11 text-3xl flex items-center p-2 app-color-primary rounded-full border-2 border-grey-border"
          >
            <CgProfile />
          </button>
          <span className="h-full flex items-center text-black-two text-sm">
            {username}
          </span>
        </div>
      </header>
    </>
  );
};

export default Navbar;
