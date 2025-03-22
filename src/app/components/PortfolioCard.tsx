import React from 'react';
import Image from 'next/image'; // Image komponentini import qilish

interface Portfolio {
  id: number;
  link: string;
  title?: string; // title ixtiyoriy (optional)
  image?: string; // image ixtiyoriy (optional)
  description?: string; // description ixtiyoriy (optional)
}

const PortfolioCard = ({ item }: { item: Portfolio }) => {
  return (
    <a href={item.link} target="_blank" rel="noopener noreferrer" className='inline-block h-full'>
      <div className="border p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        {/* Rasmni tekshirish */}
        {item.image ? (
          <Image
            src={item.image}
            alt={item.title || "No Title"}
            width={334}
            height={100}
            className="w-full h-40 object-cover rounded-lg"
          />
        ) : (
          <div className="w-full h-40 flex items-center justify-center bg-gray-200 rounded-lg">
            <span className="text-gray-500">No Image</span>
          </div>
        )}

        {/* Sarlavhani tekshirish */}
        <h3 className="poppins font-medium text-xl text-primary mt-2">
          {item.title || "No Title"}
        </h3>

        {/* Tavsifni tekshirish */}
        <p className="poppins text-sm text-gray-600 line-clamp-2">
          {item.description || "No Description"}
        </p>
      </div>
    </a>
  );
};

export default PortfolioCard;