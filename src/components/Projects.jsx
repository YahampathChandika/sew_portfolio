import React from "react";

// Mock Data
const projects = [
  {
    id: 1,
    image:
      "https://yahampath-portfolio.vercel.app/assets/medisense%20(8)-BTqeclNv.png",
    name: "Portfolio Website",
    description:
      "A modern portfolio website built with React and Tailwind CSS.",
  },
  {
    id: 2,
    image:
      "https://yahampath-portfolio.vercel.app/assets/medisense%20(7)-DaSU62fm.png",
    name: "E-commerce Platform",
    description:
      "A scalable e-commerce platform featuring secure payment integration.",
  },
  {
    id: 3,
    image:
      "https://yahampath-portfolio.vercel.app/assets/burg%20(1)-DkmG_Xf_.png",
    name: "Social Media App",
    description:
      "A full-stack social media application with real-time chat and posts.",
  },
  {
    id: 4,
    image:
      "https://yahampath-portfolio.vercel.app/assets/green%20(4)-BCT6Y1qG.png",
    name: "Task Management Tool",
    description:
      "A productivity tool to manage tasks efficiently using a drag-and-drop UI.",
  },
  {
    id: 5,
    image:
      "https://yahampath-portfolio.vercel.app/assets/lux%20(11)-Zw6MpiBp.png",
    name: "Blog Platform",
    description:
      "A blogging platform with Markdown support and user authentication.",
  },
  {
    id: 6,
    image:
      "https://yahampath-portfolio.vercel.app/assets/burg%20(3)-DoCv9Ns3.png",
    name: "Weather Dashboard",
    description:
      "A weather forecasting app using APIs to provide real-time updates.",
  },
];

export default function Projects() {
  return (
    <div className="py-24 flex flex-col items-center bg-gray-100">
      <hr className="border-1 border-gray-400 w-full mx-auto mb-20" />
      <div className="text-left mb-12 w-full">
        <p className="text-2xl text-pnk mt-2 leading-loose">Projects</p>
        <h2 className="text-6xl font-bold text-blck">My Work</h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-wht px-10 py-10 shadow-lg rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-xl cursor-pointer relative"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-all duration-300"
            />
            <div className="pt-6">
              <h3 className="text-2xl font-semibold text-blck mb-3 group-hover:text-pnk">
                {project.name}
              </h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
            <i className="fas fa-external-link-alt text-pnk opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-5 right-5 text-xl"></i>
          </div>
        ))}
      </div>
    </div>
  );
}
