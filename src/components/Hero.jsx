import React from "react";

export default function Hero() {
  return (
    <div className="flex !h-full items-center justify-between px-48">
      {/* Left Section */}
      <div className="w-1/2 space-y-6">
        <p className="text-lg font-medium ">Welcome to my world</p>
        <p className="text-6xl font-semibold leading-tight">
          Hi, I’m <span className="text-pnk">Sewwandi</span> <br /> a Full-Stack
          Developer
        </p>
        <p className="text-gray-600 text-lg">
          I use animation as a third dimension by which to simplify experiences
          and guiding through each and every interaction. I’m not adding motion
          just to spruce things up, but doing it in ways that matter.
        </p>
        {/* Buttons */}
        <div className="flex justify-between">
          <div>
            <p className="text-base font-semibold mb-3 mt-36">FIND WITH ME</p>
            <div className="flex space-x-4 text-gray-500">
              <a
                href="https://www.linkedin.com/in/sewwandi-nirushika-349a05238/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white w-20 h-20 flex items-center justify-center px-6 py-2 rounded shadow-lg"
              >
                <i className="fab fa-linkedin-in text-3xl"></i>
              </a>
              <a
                href="https://github.com/yourgithubprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white w-20 h-20 flex items-center justify-center px-6 py-2 rounded shadow-lg"
              >
                <i className="fab fa-github text-3xl"></i>
              </a>
              <a
                href="https://www.instagram.com/yourinstagramprofile/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white w-20 h-20 flex items-center justify-center px-6 py-2 rounded shadow-lg"
              >
                <i className="fab fa-instagram text-3xl"></i>
              </a>
            </div>
          </div>

          <div>
            <p className="text-base font-semibold mb-3 mt-36">BEST SKILLS ON</p>
            <div className="flex space-x-4 text-gray-500">
              <a
                href="#"
                className="bg-white w-20 h-20 flex items-center justify-center px-6 py-2 rounded shadow-lg"
              >
                <i className="fab fa-react text-3xl"></i>
              </a>
              <a
                href="#"
                className="bg-white w-20 h-20 flex items-center justify-center px-6 py-2 rounded shadow-lg"
              >
                <i className="fab fa-node text-3xl"></i>
              </a>
              <a
                href="#"
                className="bg-white w-20 h-20 flex items-center justify-center px-6 py-2 rounded shadow-lg"
              >
                <i className="fas fa-database text-3xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex justify-end ">
        <img
          src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/04cbf851-aeb2-4af6-be64-15feff838f36/569972be-0c98-4859-87b3-dd145228b33e.png"
          alt="Jone Lee"
          className="rounded-lg shadow-lg w-8/12"
        />
      </div>
    </div>
  );
}
