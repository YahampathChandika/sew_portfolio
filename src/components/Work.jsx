import React from "react";

const experiences = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Tech Innovators Inc.",
    duration: "Jan 2022 - Present",
    description:
      "Developing and maintaining scalable web applications, collaborating with cross-functional teams to deliver innovative solutions.",
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Creative Solutions",
    duration: "Jun 2020 - Dec 2021",
    description:
      "Built responsive user interfaces with React and Tailwind CSS, ensuring seamless user experiences across devices.",
  },
  {
    id: 3,
    title: "Intern - Full Stack Developer",
    company: "Startup Hub",
    duration: "Jan 2020 - May 2020",
    description:
      "Assisted in developing end-to-end web solutions, focusing on backend APIs and frontend designs.",
  },
];

export default function Work() {
  return (
    <div className="py-24 flex flex-col items-center bg-gray-100">
      {/* Section Title */}
      <div className="text-left mb-12 w-full">
        <p className="text-2xl text-pnk mt-2 leading-loose">Career</p>
        <h2 className="text-6xl font-bold text-blck">Work Experience</h2>
      </div>

      {/* Timeline */}
      <div className="relative border-l-2 border-pnk">
        {experiences.map((exp) => (
          <div key={exp.id} className="mb-10 ml-6 group transition-all duration-300 cursor-pointer">
            {/* Timeline Marker */}
            <div className="absolute w-4 h-4 bg-pnk rounded-full -left-2.5 border-2 border-wht"></div>
            {/* Content */}
            <div className="bg-wht hover:bg-pnk p-6 rounded-lg shadow-lg transition-all duration-300 group-hover:text-wht">
              <h3 className="text-2xl font-semibold text-blck transition-all duration-300 group-hover:text-wht">{exp.title}</h3>
              <p className="text-lg text-pnk font-medium transition-all duration-300 group-hover:text-wht">{exp.company}</p>
              <span className="text-gray-500 text-sm transition-all duration-300 group-hover:text-wht">{exp.duration}</span>
              <p className="text-gray-600 mt-4 transition-all duration-300 group-hover:text-wht">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}