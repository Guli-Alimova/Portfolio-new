import React, { useState } from "react";

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const projects = [
    {
      id: 1,
      title: "Personal blog",
      category: "React",
      description: "Первый курс по уходу за новорождёнными для будущих мам в Узбекистане",
      platform: "React",
      link: "https://www.momsclub.uz/",
      image: "/image/momsclub.png"
    },
    {
      id: 2,
      title: "Landing page",
      category: "React",
      description: "Откройте 'Мир - семейного пробиотика'",
      platform: "React",
      link: "https://bifidopro.uz/",
      image: "/image/bifidopro.png"
    },
    {
      id: 3,
      title: "Personal Blog",
      category: "Vue",
      description: "Yosh Saylovchi",
      platform: "Vue.js",
      link: "https://yoshsaylovchi2021.vercel.app/",
      image: "/image/yosh saylovchi.png"
    },
    {
      id: 4,
      title: "Landing Page",
      category: "Tilda",
      description: "Проблемы и перспективы улучшения качества жизни пациентов",
      platform: "Tilda",
      link: "http://conferene.did.tilda.ws/",
      image: "/image/conference.png"
    },
    {
      id: 5,
      title: "E-commerce",
      category: "Tilda",
      description: "Осветите свою жизнь стилем",
      platform: "Tilda",
      link: "http://stalkergarant.uz.tilda.ws/",
      image: "/image/stalker.png"
    },
    {
      id: 6,
      title: "E-commerce",
      category: "React",
      description: "Счастье не купишьно можно купить ТОРТ",
      platform: "React",
      link: "https://benissimo-uz.vercel.app/",
      image: "/image/benissimo.png"
    },
    {
      id: 7,
      title: "E-commerce",
      category: "React",
      description: "Sizning Sog'lig'ingiz biz uchun Muhim.",
      platform: "React",
      link: "https://brilliant-water-2xga.vercel.app/",
      image: "/image/brilliantwater.png"
    },
    {
      id: 8,
      title: "E-commerce",
      category: "Tilda",
      description: "Функциональный интерьер квартиры",
      platform: "Tilda",
      link: "https://interyerdesign.tilda.ws/",
      image: "/image/interyer.png"
    },
    {
      id: 9,
      title: "E-commerce",
      category: "React",
      description: "Millions of movie, TV shows and people to discover. Explore now.",
      platform: "React",
      link: "https://movieapp-rouge.vercel.app/",
      image: "/image/movie.png"
    },
    {
      id: 10,
      title: "E-commerce",
      category: "Vue",
      description: "Let's Create Your Dream Interior",
      platform: "Vue",
      link: "https://interyer.vercel.app/",
      image: "/image/interyerhome.png"
    },
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
