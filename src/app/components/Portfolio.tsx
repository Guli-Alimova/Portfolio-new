import React, { useState } from "react";
import PortfolioCard from "./PortfolioCard";


const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [visibleCards, setVisibleCards] = useState<number>(4); 

  const projects = [
    {
      id: 1,
      title: "Business blog",
      category: "Next",
      description: "Первый курс по уходу за новорождёнными для будущих мам в Узбекистане",
      platform: "Next",
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
    // {
    //   id: 3,
    //   title: "Info blog",
    //   category: "Vue",
    //   description: "Yosh Saylovchi",
    //   platform: "Vue",
    //   link: "https://yoshsaylovchi2021.vercel.app/",
    //   image: "/image/yosh saylovchi.png"
    // },
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
      image: ""
    },
    // {
    //   id: 7,
    //   title: "E-commerce",
    //   category: "React",
    //   description: "Sizning Sog'lig'ingiz biz uchun Muhim.",
    //   platform: "React",
    //   link: "https://brilliant-water-2xga.vercel.app/",
    //   image: "/image/brilliantwater.png"
    // },
    {
      id: 8,
      title: "E-commerce",
      category: "Tilda",
      description: "Функциональный интерьер квартиры",
      platform: "Tilda",
      link: "https://interyerdesign.tilda.ws/",
      image: ""
    },
    {
      id: 9,
      title: "E-commerce",
      category: "React",
      description: "Millions of movie, TV shows and people to discover. Explore now.",
      platform: "React",
      link: "https://movieapp-rouge.vercel.app/",
      image: ""
    },
    // {
    //   id: 10,
    //   title: "E-commerce",
    //   category: "Vue",
    //   description: "Let's Create Your Dream Interior",
    //   platform: "Vue",
    //   link: "https://interyer.vercel.app/",
    //   image: "/image/interyerhome.png"
    // },
  ];

  const categories = ["all", ...Array.from(new Set(projects.map((project) => project.category)))];

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab);

  const loadMore = () => {
    setVisibleCards((prev) => prev + 4); 
  };
  return (
    <>
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
              activeTab === category ? "gradient-text" : "text-silver hover:gradient-bg"
            }`}
            onClick={() => {
              setActiveTab(category);
              setVisibleCards(4); 
            }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {filteredProjects.length > 0 ? (
          filteredProjects
            .slice(0, visibleCards) 
            .map((item) => <PortfolioCard item={item} key={item.id} />)
        ) : (
          <p className="text-gray-500 text-center w-full">No projects found.</p>
        )}
      </div>

    
      {filteredProjects.length > visibleCards && (
        <div className="flex justify-center mt-6">
          <button
            onClick={loadMore}
            className="px-6 py-2 gradient-bg text-white rounded-lg hover:hover:shadow-lg transition-shadow"
          >
            Load More
          </button>
        </div>
      )}
    </>
  );

};

export default Portfolio;
