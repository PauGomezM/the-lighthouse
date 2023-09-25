import React from "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Logo from "./components/Images/Lighthouse.jpg";

function App() {
    return (
        <div className="app">
            <Navbar />
            {/*<img className="lighthouse-logo" src={Logo} alt='Logo'/>*/}
            <Container />
        </div>
    );
}

export default App;