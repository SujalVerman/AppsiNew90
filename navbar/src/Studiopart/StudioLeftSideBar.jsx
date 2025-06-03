import React, { useState } from 'react';

const LeftSidebar = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div className="studio-left-sidebar">
        <div>
          <div className="studio-icon-button" onClick={togglePopup}>
            <img src="https://img.icons8.com/?size=100&id=ruWxzSGHNnpO&format=png&color=000000" alt="Add" />
          </div>
          <div className="studio-icon-button">
            <img src="https://img.icons8.com/?size=100&id=14077&format=png&color=000000" alt="Save" />
          </div>
          <div className="studio-icon-button">
            <img src="https://img.icons8.com/?size=100&id=NHf3Nw8jio00&format=png&color=000000" alt="Slider" />
          </div>
          <div className="studio-icon-button">
            <img src="https://img.icons8.com/?size=100&id=78740&format=png&color=000000" alt="Paint" />
          </div>
          <div className="studio-icon-button">
            <img src="https://img.icons8.com/ios-filled/50/collage.png" alt="Layout" />
          </div>
          <div className="studio-icon-button">
            <img src="https://img.icons8.com/?size=100&id=364&format=png&color=000000" alt="Settings" />
          </div>
          <div className="studio-icon-button">
            <img src="https://img.icons8.com/?size=100&id=QuQSVF01BofY&format=png&color=000000" alt="Bottom Icon" />
          </div>
          <div className="studio-icon-button">
            <img src="https://img.icons8.com/?size=100&id=6XIwpKNO977E&format=png&color=000000" alt="Img" />
          </div>
        </div>

        <div className="studio-icon-button">
          <img src="https://img.icons8.com/ios-filled/50/layers.png" alt="OS" />
        </div>
      </div>

      {showPopup && (
        <div className="popup-card-1">
          <div className="popup-header">Add Elements</div>
          <div className="popup-content">
            <div className="popup-tabs">
              <span>Page</span>
              <span>Text</span>
              <span>Image</span>
              <span>Button</span>
              <span>Strip</span>
              <span>Decorative</span>
              <span>Box</span>
              <span>Gallery</span>
              <span>Menu</span>
              <span>Contact & Anchor</span>
              <span>Video & music</span>
              <span>List</span>
              <span>Blog</span>
              <span>Store</span>
              <span>Booking</span>
              <span>Events</span>
              <span>Restuarants</span>
            </div>
            <div className="popup-items">
              <div className="popup-item">
                <img src="https://img.icons8.com/?size=100&id=lt1LQq2c73eF&format=png&color=000000" width={20} height={20} alt="Site Page" />
                <div>
                  <strong>Site page</strong>
                  <p style={{fontSize:"10px"}}>Add a page to your website and customize it</p>
                </div>
                <span className="plus-icon">+</span>
              </div>
              <div className="popup-item">
                <img src="https://img.icons8.com/ios/50/000000/admin-settings-male.png" alt="Dashboard" />
                <div>
                  <strong>Dashboard page</strong>
                  <p style={{fontSize:"10px"}}>Create a custom back office for your site admins</p>
                </div>
                <span className="plus-icon">+</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LeftSidebar;
