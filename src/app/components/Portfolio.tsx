import React, { useState } from "react";

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  // Loyihalar ma'lumotlari (kategoriya bilan birga)
  const projects = [
    {
      id: 1,
      title: "Project Management App",
      category: "work",
      description: "A web application for managing projects.",
      platform: "React",
      link: "https://example.com/project1",
      image: "/image/project1.jpg"
    },
    {
      id: 2,
      title: "E-commerce Website",
      category: "teamwork",
      description: "An online shopping platform.",
      platform: "Tilda",
      link: "https://example.com/project2",
      image: "/image/project2.jpg"
    },
    {
      id: 3,
      title: "Personal Blog",
      category: "work",
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

  // Kategoriya nomlarini loyihalar ro‘yxatidan olish
  const categories = ["all", ...Array.from(new Set(projects.map((project) => project.category)))];

  // Filter qilingan loyihalar
  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab);

  return (
    <div className="pt-[18px] pr-[55px] pb-[32px] pl-[71px] bg-white rounded-[20px]">
      {/* Sarlavha */}
      <div className="flex items-center gap-[32px]">
        <h3 className="poppins text-[40px] font-medium leading-[40px] tracking-wide text-[#0B0909] uppercase">
          Portfolio
        </h3>
        <span className="w-[252px] h-[2px] rounded bg-linear inline-block gradient-bg"></span>
      </div>

      {/* Tab tugmalari */}
      <div className="flex justify-end gap-4 mt-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`poppins text-base font-medium py-2 px-4 rounded-md ${
              activeTab === category ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
            }`}
            onClick={() => setActiveTab(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Filterlangan loyihalar */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
          <a href={project.link} target="_blank" rel="noopener noreferrer" >
            <div key={project.id} className="border py-2 px-2  rounded-lg shadow-md">
              <img src={project.image} alt={project.title} className="w-full h-[100px] object-cover rounded-lg" />
              <h3  className="poppins font-normal text-base text-primary">{project.title}</h3>
              <p className="poppins font-normal text-xs text-silver">{project.description}</p>
            </div>  
            
          </a>
            
          ))
        ) : (
          <p className="text-gray-500">No projects found.</p>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
