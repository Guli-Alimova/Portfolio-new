'use client'
import React, { useState } from "react";
import BtnTab from "../common/BtnTab";
import { Contact, Home, ResumeMe, Work } from "../common/svg";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import ContactMe from "./ContactMe";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div>
      {/* Tab tugmalari */}
      <div className="mt-[-115px] mb-2.5 flex justify-between max-w-[503px] w-full ml-auto py-[10px] px-[31px] border-2 border-[#F2F7FC] shadow-nav rounded-[20px]">
        <BtnTab onClick={() => setActiveTab("home")}>
          <Home /> Home
        </BtnTab>
        <BtnTab onClick={() => setActiveTab("resume")}>
          <ResumeMe /> Resume
        </BtnTab>
        <BtnTab onClick={() => setActiveTab("work")}>
          <Work /> Work
        </BtnTab>
        <BtnTab onClick={() => setActiveTab("contact")}>
          <Contact /> Contact
        </BtnTab>
      </div>
      <div >
        {activeTab === "home" && <About/>}
        {activeTab === "resume" && <Resume/>}
        {activeTab === "work" && <Portfolio/>}
        {activeTab === "contact" && <ContactMe/>}
      </div>
     
    </div>
  );
};

export default Tab;
