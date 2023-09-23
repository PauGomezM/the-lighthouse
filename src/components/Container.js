import React, { useState } from "react";
import AboutBooks from "./Pages/AboutBooks";
import Profile from "./Sidebar/Profile";
import GiveAdvice from "./Pages/GiveAdvice";
import Quotes from "./Pages/Quotes";
import WelcomingContent from "./Pages/WelcomingContent";


function Container() {
    const [activeContent, setActiveContent] = useState('welcomingContent');
    

    return (
        <div className="container">
            <div className="sidebar">
                <Profile />
            </div>
            <div className="pages">
        <div className="pages-navbar">
          <h3 className="about-books-header" onClick={() => setActiveContent("aboutBooks")}>About Books</h3>
          <h3 className="give-advice-header" onClick={() => setActiveContent("giveAdvice")}>Give Advice</h3>
          <h3 className="quotes-header" onClick={() => setActiveContent("quotes")}>Quotes</h3>
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