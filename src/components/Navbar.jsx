import React, { useState } from "react";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["Home", "Features", "Projects", "Work", "Contact"];

  const handleScroll = (sectionId) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 text-black px-4 md:px-20 py-1 md:py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src="https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-focus-face.jpg?auto=avif,webp&format=jpg&width=950"
            className="rounded-full h-12 w-12 md:h-14 md:w-14"
            alt="pp"
          />
          <div className="text-lg md:text-2xl font-semibold md:font-bold">Sewwandi</div>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-3xl focus:outline-none transition duration-300 ease-in-out"
          >
            <span
              className={`material-symbols-outlined text-pink-500 font-semibold transform transition-transform duration-300 ${
                isMenuOpen ? "rotate-90" : "rotate-0"
              }`}
            >
              {isMenuOpen ? "close" : "density_medium"}
            </span>
          </button>
        </div>

        {/* Menu items for larger screens */}
        <ul className="hidden md:flex space-x-6 text-xl">
          {menuItems.map((item) => (
            <li
              key={item}
              className={`cursor-pointer ${
                activeItem === item ? "text-pink-500" : "hover:text-pink-500"
              }`}
              onClick={() => {
                setActiveItem(item);
                handleScroll(item.toLowerCase());
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Dropdown Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-80 z-40 flex flex-col items-center justify-center transform transition-transform duration-500 ease-in-out ${
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        <ul className="text-white text-2xl space-y-6 list-none">
          {menuItems.map((item) => (
            <li
              key={item}
              className={`cursor-pointer ${
                activeItem === item
                  ? "text-pink-500"
                  : "hover:text-pink-500 transition-colors"
              }`}
              onClick={() => {
                setActiveItem(item);
                setIsMenuOpen(false); // Close the menu after selection
                handleScroll(item.toLowerCase());
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
