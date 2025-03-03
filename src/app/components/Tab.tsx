'use client'
import React, { useState } from "react";
import BtnTab from "../common/BtnTab";
import { Contact, Home, ResumeMe, Work } from "../common/svg";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import ContactMe from "./ContactMe";

const tabs = [
  { id: "home", label: "Home", icon: <Home />, component: <About /> },
  { id: "resume", label: "Resume", icon: <ResumeMe />, component: <Resume /> },
  { id: "work", label: "Work", icon: <Work />, component: <Portfolio /> },
  { id: "contact", label: "Contact", icon: <Contact />, component: <ContactMe /> },
];

const Tab = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <>
    <div className="mt-[-115px] mb-2.5 flex flex-wrap justify-between max-w-[503px] w-full ml-auto py-[10px] px-[31px] border-2 border-[#F2F7FC] shadow-nav rounded-[20px]">
      {tabs.map((tab) => (
        <BtnTab
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className="flex flex-col justify-center items-center hover:bg-orange-500 hover:text-white text-tabColor transition-all"
        >
          {tab.icon} {tab.label}
        </BtnTab>
      ))}
    </div>
    <div>
      {tabs.find((tab) => tab.id === activeTab)?.component}
    </div>
  </>
  );
};

export default Tab;
