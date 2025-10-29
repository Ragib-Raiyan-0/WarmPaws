import { Link } from "react-router";
import logo from "../assets/Media/logo.png";
import MyContainer from "./MyContainer";
import MyLink from "./MyLink";
import { useContext, useEffect, useState, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { ClockLoader } from "react-spinners";

const Navbar = () => {
  const { user, signoutUserFunc, setUser, loading } = useContext(AuthContext);

  // 🌗 Theme state
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Dropdown toggle state
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const handleSignout = () => {
    signoutUserFunc()
      .then(() => {
        toast.success("Sign out successful!");
        setUser(null);
        setDropdownOpen(false);
      })
      .catch((e) => toast.error(e.message));
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="py-3 shadow-md bg-gradient-to-r from-yellow-200 via-orange-200 to-pink-200 dark:bg-gray-900 dark:text-white transition-all duration-300">
      <MyContainer className="flex items-center justify-between">
        {/* Logo */}
        <figure>
          <img src={logo} className="w-[55px] rounded-full shadow-sm" alt="WarmPaws Logo" />
        </figure>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8 text-lg font-medium">
          <li>
            <MyLink to={"/"} className="hover:text-orange-600 dark:hover:text-yellow-400 transition-colors">
              Home
            </MyLink>
          </li>
          <li>
            <MyLink to={"/about-us"} className="hover:text-orange-600 dark:hover:text-yellow-400 transition-colors">
              About Us
            </MyLink>
          </li>
          {user && (
            <li>
              <MyLink to={"/profile"} className="hover:text-orange-600 dark:hover:text-yellow-400 transition-colors">
                Profile
              </MyLink>
            </li>
          )}
        </ul>

        {/* Right side buttons */}
        <div className="flex items-center gap-4 relative">
          {/* Theme toggle */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="bg-white dark:bg-gray-700 text-orange-500 dark:text-yellow-300 rounded-full p-2 transition-all duration-300 hover:scale-110 shadow-sm"
            title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          {loading ? (
            <ClockLoader color="#F97316" size={25} />
          ) : user ? (
            <div className="relative text-center" ref={dropdownRef}>
              <button
                className="focus:outline-none"
                onClick={() => setDropdownOpen((prev) => !prev)}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
              >
                <img
                  src={user?.photoURL || "https://via.placeholder.com/88"}
                  className="h-[40px] w-[40px] rounded-full mx-auto border-2 border-white shadow-md"
                  alt="User"
                />
              </button>

              {/* Dropdown */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 z-50">
                  <h2 className="text-lg font-semibold text-orange-600 dark:text-yellow-300">{user?.displayName}</h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{user?.email}</p>
                  <button
                    onClick={handleSignout}
                    className="mt-3 w-full bg-orange-500 hover:bg-orange-600 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-white py-2 rounded-lg font-semibold transition-all"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to={"/signin"}
              className="bg-white dark:bg-orange-500 dark:hover:bg-orange-600 text-orange-600 dark:text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-all"
            >
              Sign In
            </Link>
          )}
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;
