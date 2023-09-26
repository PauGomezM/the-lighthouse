import React from "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Logo from "./components/Images/Lighthouse.jpg";

function App() {
    return (
        <div className="background-app flex flex-col items-center justify-center pb-10">
            <Navbar />
            <img className=" mt-2 mb-2 border-2 border-cyan-200 rounded-3xl w-3/4 h-auto opacity-90" src={Logo} alt='Logo' />
            <Container />
        </div>
    );
}

export default App;