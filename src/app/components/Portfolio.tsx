import React, { useState } from "react";

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const projects = [
    {
      id: 1,
      title: "Project Management App",
      category: "React",
      description: "A web application for managing projects.",
      platform: "React",
      link: "https://example.com/project1",
      image: "/image/project1.jpg"
    },
    {
      id: 2,
      title: "E-commerce Website",
      category: "React",
      description: "An online shopping platform.",
      platform: "React",
      link: "https://example.com/project2",
      image: "/image/project2.jpg"
    },
    {
      id: 3,
      title: "Personal Blog",
      category: "Vue",
      description: "A personal blog built with Vue.js.",
      platform: "Vue.js",
      link: "https://example.com/project3",
      image: "/image/project3.jpg"
    },
    {
      id: 4,
      title: "Landing Page",
      category: "tilda",
      description: "A simple landing page built with Tilda.",
      platform: "Tilda",
      link: "https://example.com/project4",
      image: "/image/project4.jpg"
    }
  ];

  const categories = ["all", ...Array.from(new Set(projects.map((project) => project.category)))];

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab);

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-white rounded-2xl">
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
        <h3 className="poppins text-2xl sm:text-3xl md:text-4xl font-medium text-[#0B0909] uppercase">
          Portfolio
        </h3>
        <span className="w-full sm:w-[252px] h-[2px] rounded bg-linear inline-block gradient-bg"></span>
      </div>

      <div className="flex flex-wrap justify-center sm:justify-end gap-2 sm:gap-4 mt-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`poppins text-sm sm:text-base font-medium py-2 px-4 rounded-md transition-colors ${
              activeTab === category ? "gradient-text" : " text-silver hover:gradient-bg"
            }`}
            onClick={() => setActiveTab(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="block">
              <div className="border p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg" />
                <h3 className="poppins font-medium text-lg text-primary mt-2">{project.title}</h3>
                <p className="poppins text-sm text-gray-600">{project.description}</p>
              </div>
            </a>
          ))
        ) : (
          <p className="text-gray-500 text-center w-full">No projects found.</p>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
