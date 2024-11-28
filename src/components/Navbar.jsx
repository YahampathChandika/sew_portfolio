import React, { useState, useEffect } from "react";

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

  // Function to detect which section is currently in view
  const handleActiveSectionChange = () => {
    const sections = menuItems.map((item) => document.getElementById(item.toLowerCase()));
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        setActiveItem(section.id.charAt(0).toUpperCase() + section.id.slice(1)); // Set active item based on section in view
      }
    });
  };

  // Set up scroll event listener to detect section visibility
  useEffect(() => {
    window.addEventListener("scroll", handleActiveSectionChange);
    return () => {
      window.removeEventListener("scroll", handleActiveSectionChange);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 text-black px-4 md:px-20 py-1 md:py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/04cbf851-aeb2-4af6-be64-15feff838f36/569972be-0c98-4859-87b3-dd145228b33e.png"
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
              className={`material-symbols-outlined text-pnk font-semibold transform transition-transform duration-300 ${isMenuOpen ? "rotate-90" : "rotate-0"}`}
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
              className={`cursor-pointer ${activeItem === item ? "text-pnk" : "hover:text-pnk"}`}
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
        className={`fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center transform transition-transform duration-500 ease-in-out ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
      >
        <ul className="text-white text-2xl space-y-6 list-none">
          {menuItems.map((item) => (
            <li
              key={item}
              className={`cursor-pointer ${activeItem === item ? "text-pnk" : "hover:text-pnk transition-colors"}`}
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
