import React, { useState, useEffect, useRef } from "react";
import "../Rightbar.css";

const initialTrendingBusinesses = [
  { name: "Zepto", time: "12h ago", reads: "4,545 reads" },
  { name: "Spainto", time: "1 day ago", reads: "2,366 reads" },
  { name: "Gnotox", time: "1 day ago", reads: "7,937 reads" },
  { name: "Supersourcing", time: "2 days ago", reads: "11,732 reads" },
  { name: "Jar", time: "2 days ago", reads: "22,937 reads" },
  { name: "Wingy", time: "", reads: "" },
];

const RightSidebar = () => {
  const [trendingBusinesses, setTrendingBusinesses] = useState([
    ...initialTrendingBusinesses,
  ]);
  const scrollContainerRef = useRef(null);
  const loadingRef = useRef(false); // Prevent multiple fetches at once

  const fetchMoreBusinesses = () => {
    if (loadingRef.current) return;
    loadingRef.current = true; // Prevent multiple calls

    setTimeout(() => {
      setTrendingBusinesses((prev) => [
        ...prev,
        ...initialTrendingBusinesses.map((item, index) => ({
          ...item,
          name: `${item.name} ${prev.length + index + 1}`, // Unique name
        })),
      ]);
      loadingRef.current = false;
    }, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;

      const { scrollTop, scrollHeight, clientHeight } =
        scrollContainerRef.current;

      // If user scrolls near the bottom, load more items
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        fetchMoreBusinesses();
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="right-sidebar">
      <div className="suggested-box">
        <h3>Suggested</h3>

        {/* Main Suggested Card */}
        <div className="suggested-card">
          <div className="suggested-image">
            <img className="suggested-img" src="/Posty1.jpg" alt="Group" />
            <div className="overlay">
              <p className="icon-pi">👥</p>
              <h4 className="grp"> Groups</h4>
              <p className="p-text">New ways to find and join communities.</p>
              <button className="group-btn">Find Your Groups</button>
            </div>
          </div>
        </div>

        {/* Friends Joined Section */}
        <div className="friends-joined">
          <div className="friends-avatars">
            <img src="/posty.jpg" alt="User 1" className="avatar" />
            <img src="/pic3.png" alt="User 3" className="avatar" />
            <img src="/posty1.jpg" alt="User 2" className="avatar" />
          </div>
          <p
            style={{
              fontSize: "15px",
              position: "relative",
              top: "6px",
              fontWeight: "600",
            }}
          >
            Josh and 4 friends joined Groups
          </p>
        </div>
      </div>
      <hr />
      <div className="trending-container">
        {/* Infinite Scrolling Title */}
        <div className="scrolling-container">
          <div className="scrolling-text">
            <span>On Trend: Businesses & Startups &nbsp; &nbsp; </span>
            <span>On Trend: Businesses & Startups &nbsp; &nbsp; </span>
          </div>
        </div>

        {/* Trending List Section */}
        <div className="trending-section">
          {trendingBusinesses.map((item, index) => (
            <div key={index} className="trending-item">
              <h5>{item.name}</h5>
              <p>
                {item.time} • {item.reads}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
