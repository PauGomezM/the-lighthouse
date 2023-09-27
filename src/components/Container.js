import React, { useState } from "react";
import BookReviews from "./Pages/BookReviews";
import Profile from "./Sidebar/Profile";
import GiveAdvice from "./Pages/Knowledge";
import Quotes from "./Pages/Quotes";
import WelcomingContent from "./Pages/WelcomingContent";


function Container() {
  const [activeContent, setActiveContent] = useState('welcomingContent');


  return (
    <div className="flex items-top justify-center w-3/4">
      <div>
        <Profile />
      </div>

      <div className="w-3/4 border border-cyan-400">
        <div className="flex flex-row items-top justify-around bg-cyan-950 text-xl font-bold p-3">
          <h3
            className="gradient-text1 hover:text-cyan-300 cursor-pointer text-2xl"
            onClick={() => setActiveContent("aboutBooks")}>Book Reviews</h3>
          <h3
            className="gradient-text1 hover:text-cyan-300 cursor-pointer text-2xl"
            onClick={() => setActiveContent("giveAdvice")}>Knowledge</h3>
          <h3
            className="gradient-text1 hover:text-cyan-300 cursor-pointer text-2xl"
            onClick={() => setActiveContent("quotes")}>Quotes</h3>
        </div>
        {activeContent === "welcomingContent" && <WelcomingContent />}
        {activeContent === "aboutBooks" && <BookReviews />}
        {activeContent === "giveAdvice" && <GiveAdvice />}
        {activeContent === "quotes" && <Quotes />}
      </div>
    </div>
  );
}
export default Container;