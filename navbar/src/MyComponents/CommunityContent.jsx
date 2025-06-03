import React from "react";
import "../CommunityContent.css";
import { FaWhatsapp } from "react-icons/fa";
import Feed from "./Feed";
import Rightbar from "./Rightbar";
// import { FaHandDots, FaHouseMedicalCircleXmark } from "react-icons/fa6";

const CommunityContent = () => {
  return (
    <div className="community-container">
      {/* Left Sidebar */}
      <div className="left-sidebar">
        {/* <div className="profile-card">
          <div className="profile-image">
            <img className="profile-image" src="/pic3.png" alt="" />
          </div>
          <h3>John Snow</h3>
          <p>UK, London</p>
          <p>Entrepreneur</p>
        </div> */}
        <div className="menu">
          <div className="items-btns-st">
            <div className="menu-item">
              <img className="icon-btns" src="/Trending.png" alt="img" />
            </div>
            <div className="menu-item">
              <img className="icon-btns" src="/Business.png" alt="img" />
            </div>
            <div className="menu-item">
              <img className="icon-btns" src="/conIcon.png" alt="img" />
            </div>
            <div className="menu-item">
              <img className="icon-btns" src="/MakeIt.png" alt="img" />
            </div>
            <div className="menu-item">
              <img className="icon-btns" style={{position:"relative",left:"3px",bottom:"3px"}} src="/Saved.png" alt="img" />
            </div>
            <div className="menu-item">
              <img src="/support.png" className="icon-btns btns-st" alt="img" style={{position:"relative",left:"10px"}}/>
            </div>
          </div>
          <div className="Trending-items">
            <div className="text-items menu-hov">Top Trending Startup</div>
            <div className="text-items menu-hov">Business</div>
            <div className="text-items menu-hov">Connection</div>
            <div className="text-items menu-hov">Make it Happen</div>
            <div className="text-items menu-hov">Saved Pages</div>
            <div className="text-items menu-hov">Support</div>
          </div>
        </div>
        <hr className="hr-style" />
        <div className="groups">
          <h4>My Group</h4>
          <div className="group-item">
            <FaWhatsapp className="whatsapp-icon" /> The Nomad Hood
          </div>
          <div className="group-item">
            {" "}
            <FaWhatsapp className="whatsapp-icon" /> Take a Trip
          </div>
          <div className="group-item">
            <FaWhatsapp className="whatsapp-icon" /> Getting Started
          </div>
        </div>
      </div>

      {/* Main Feed Section */}
      <div className="feed">
        <Feed />
      </div>

      {/* Right Sidebar */}
      <div>
        <Rightbar />
      </div>
    </div>
  );
};

export default CommunityContent;
