import React, { useState } from "react";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Home");
  const menuItems = ["Home", "About", "Services", "Portfolio", "Contact"];

  return (
    <nav className="text-blck px-20 py-10">
      <div className=" flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src="https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-focus-face.jpg?auto=avif,webp&format=jpg&width=950"
            className="rounded-full h-14 w-14"
            alt="pp"
          />
          <div className="text-2xl font-bold">Sewwandi</div>
        </div>
        <ul className="flex space-x-6 text-xl">
          {menuItems.map((item) => (
            <li
              key={item}
              className={`cursor-pointer ${
                activeItem === item
                  ? "text-pnk"
                  : "hover:text-pnk"
              }`}
              onClick={() => setActiveItem(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
