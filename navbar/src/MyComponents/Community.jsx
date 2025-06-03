import React, { useState, useEffect } from "react";
import "../community.css";
import CommunityContent from './CommunityContent';
import { FaGear } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Home");
  const [sliderStyle, setSliderStyle] = useState({});
  const navigate = useNavigate();

  const tabs = ["Home", "Project", "Notification","Connection", "Scope"];

  useEffect(() => {
    //Button positions dynamically
    const updateSliderPosition = () => {
      const btns = document.querySelectorAll(".nav-btn");
      const index = tabs.indexOf(activeTab);
      if (btns[index]) {
        const { offsetLeft, offsetWidth } = btns[index];
        setSliderStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
          opacity: 1,
        });
      }
    };

    updateSliderPosition();
    window.addEventListener("resize", updateSliderPosition);
    return () => window.removeEventListener("resize", updateSliderPosition);
  }, [activeTab]);

  return (
    <div>
      <nav className="navbar1">
        {/* Logo */}
        <img src="/Alpha.png" onClick={()=>{navigate("/")}} alt="Logo" className="navbar-logo" />

        {/* Search Bar */}
        <div className="search-container">
          <input type="text" className="search-box" placeholder="Search..." />
        </div>

        {/* Navigation Buttons with Sliding Box */}
        <div className="nav-buttons">
          <div className="sliding-box" style={sliderStyle} />
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`nav-btn ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <img src="/pic3.png" alt="img" width={40} height={40} style={{borderRadius:"50%",marginLeft:"32%"}}/><FaGear style={{marginLeft:"20px"}} />
      </nav>

      {/* Community Content */}
      <CommunityContent />
    </div>
  );
}
