import React, { useState } from 'react';
import './TopBar.css';
import StudioLeftSideBar from './StudioLeftSideBar';
import StudioPage from "./StudioPage";

const TopBar = () => {
  const [image, setImage] = useState(null);
  const [lastImage, setLastImage] = useState(null);

  const handleImageDrop = (img) => {
    setImage(img);
  };

  

  const handleRestoreImage = () => {
    if (lastImage) {
      setImage(lastImage);
    }
  };

  return (
    <div>
      <div className="topbar">
        <div className="top-menu">
          <span>Site</span>
          <span>Settings</span>
          <span>Dev Mode</span>
          <span>Hire a Professional</span>
          <span>Help</span>
        </div>
        <hr />

        <div className="bottom-toolbar">
          <div className="left-group">
            <span className="page-label">Page:</span>
            <select className="page-dropdown" style={{ fontSize: "16px" }}>
              <option>HOME</option>
            </select>
            <p className="divider" style={{ position: "relative", left: "2px" }} />
            <div className="icon-box">
              <img
                style={{ height: "20px" }}
                src="https://img.icons8.com/?size=100&id=20389&format=png&color=000000"
                alt="Desktop"
              />
            </div>
            <div className="icon-box icon-box-2">
              <img
                src="https://img.icons8.com/ios-filled/20/000000/smartphone.png"
                alt="Mobile"
              />
            </div>
          </div>

          <div className="right-group">
            <span className="upgrade">Upgrade</span>
            <span className="save">Save</span>
            <p className="divider div-1" />
            <img
              className="icon icon-git"
              src="https://img.icons8.com/ios-filled/20/000000/github.png"
              alt="GitHub"
            />
            <img
              className="icon"
              src="https://img.icons8.com/ios-filled/20/000000/internet--v1.png"
              alt="Globe"
            />
            <button className='arrow-key'onClick={handleRestoreImage}>
              <span className="arrow"> </span>
            </button>
            <button className='arrow-key' onClick={handleRestoreImage}>
              <span className="arrow">⟳</span>
            </button>
            <span className="zoom">100%</span>
            <p className="divider" style={{ position: "relative", left: "15px" }} />
            <img
              className="icon"
              style={{ position: "relative", right: "-5px" }}
              src="https://img.icons8.com/ios-filled/20/000000/settings.png"
              alt="Tools"
            /> <label htmlFor="" style={{ position: "relative", right: "5px" }}>Tools</label>
            <img
              className="icon"
              src="https://img.icons8.com/ios-filled/20/000000/search--v1.png"
              alt="Search"
            /> <label htmlFor="" style={{ position: "relative", right: "10px" }}>Search</label>
          </div>
        </div>
      </div>

      <div className="studio-layout">
        <StudioLeftSideBar />
        <StudioPage image={image} onDropImage={handleImageDrop} />
      </div>
    </div>
  );
};

export default TopBar;
