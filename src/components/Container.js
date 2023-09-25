import React, { useState } from "react";
import AboutBooks from "./Pages/AboutBooks";
import Profile from "./Sidebar/Profile";
import GiveAdvice from "./Pages/GiveAdvice";
import Quotes from "./Pages/Quotes";
import WelcomingContent from "./Pages/WelcomingContent";


function Container() {
  const [activeContent, setActiveContent] = useState('welcomingContent');


  return (
    <div className="flex items-top justify-center">
      <div>
        <Profile />
      </div>
      
      <div className="w-1/2">
        <div className="flex flex-row items-top justify-around bg-cyan-950 text-xl font-bold p-3">
          <h3 className="gradient-text1 hover:text-cyan-300 cursor-pointer" onClick={() => setActiveContent("aboutBooks")}>About Books</h3>
          <h3 className="gradient-text1 hover:text-cyan-300 cursor-pointer" onClick={() => setActiveContent("giveAdvice")}>Give Advice</h3>
          <h3 className="gradient-text1 hover:text-cyan-300 cursor-pointer" onClick={() => setActiveContent("quotes")}>Quotes</h3>
        </div>
        {activeContent === "welcomingContent" && <WelcomingContent />}
        {activeContent === "aboutBooks" && <AboutBooks />}
        {activeContent === "giveAdvice" && <GiveAdvice />}
        {activeContent === "quotes" && <Quotes />}
      </div>
    </div>
  );
}
export default Container;