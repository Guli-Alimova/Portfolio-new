'use client'
import React, { useState } from "react";
import BtnTab from "../common/BtnTab";
import { Contact, Home, ResumeMe, Work } from "../common/svg";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import ContactMe from "./ContactMe";
import "../styles/globals.css"

const tabs = [
  { id: 1, label: "Home", icon: <Home />, component: <About /> },
  { id: 2, label: "Resume", icon: <ResumeMe />, component: <Resume /> },
  { id: 3, label: "Work", icon: <Work />, component: <Portfolio /> },
  { id: 4, label: "Contact", icon: <Contact />, component: <ContactMe /> },
];

const Tab = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <div className="mt-[-115px] mb-2.5 flex flex-wrap sm:flex-nowrap gap-2 justify-between max-w-[503px] w-full ml-auto py-[10px] px-[31px] border-2 border-[#F2F7FC] shadow-nav rounded-[20px]">
        {tabs.map((tab) => (
          <BtnTab
            key={tab.id}
            onClick={() => {setActiveTab(tab.id)}}
            className={`flex flex-col justify-center items-center hover:gradientBg  hover:text-white text-tabColor transition-all  ${activeTab === tab.id ? " gradientBg text-white" : "hover:gradientBg hover:text-white"} z-10 `}
            aria-label={tab.label}
          >
            {tab.icon}{tab.label}
          </BtnTab>
        ))}
      </div>
      <div className="p-4 sm:pt-[18px] sm:pr-[55px] sm:pb-[32px] sm:pl-[71px] bg-white rounded-[20px]">
        {tabs.find((tab) => tab.id === activeTab)?.component}
      </div>
    </>
  );
};

export default Tab;
