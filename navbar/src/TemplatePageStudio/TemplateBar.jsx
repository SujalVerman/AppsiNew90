import React, { useRef, useState, useEffect } from "react";
import TemplateGrid from './TemplateGrid';
import { useNavigate } from "react-router-dom";

import { FaHome, FaUser, FaBookOpen, FaLifeRing } from "react-icons/fa";

// const TemplateBar = () => {
//   const [active, setActive] = useState("Home");

const menuItems = [
  {
    name: "Product",
    submenu: [
      {
        title: "CREATION",
        items: [
          { name: "Website Design", desc: "Create your site with intuitive design features." },
          { name: "Website Template", desc: "Choose from 1000+ website templates." },
          { name: "AI Website Builder", desc: "Create your site in no time with AI." }
        ]
      },
      {
        title: "BUSINESS",
        items: [
          { name: "eCommerce", desc: "Run & grow your eCommerce website." },
          { name: "Scheduling", desc: "Manage appointments, staff & clients." },
          { name: "Restaurants", desc: "Manage your menus, orders & reservations." }
        ]
      },
      {
        title: "",
        items: [
          { name: "Blog", desc: "Share ideas & grow your traffic." },
          { name: "Portfolio", desc: "Showcase your work with an online portfolio." }
        ]
      }
    ]
  },
  {
    name: "Solution",
    submenu: [
      {
        title: "MANAGEMENT",
        items: [
          { name: "Payment solution", desc: "Accept & manage payment online." },
          { name: "Mobile app", desc: "Run your business from your mobile." },
          { name: "All business features", desc: "Explore all business management features." }
        ]
      },
      {
        title: "GROWTH",
        items: [
          { name: "CRM system", desc: "Build & manage customer relationships." },
          { name: "Website analytics", desc: "Get reports with actionable data & insights." },
          { name: "Email Marketing", desc: "Create email marketing campaigns." }
        ]
      },
      {
        title: "",
        items: [
          { name: "SEO tools", desc: "Optimize your website for search engines." },
          { name: "All marketing features", desc: "Explore all growth & marketing features." }
        ]
      }
    ]
  }
];

  const navItems = [
    { label: "Home", icon: <FaHome /> },
    { label: "About", icon: <FaUser /> },
    { label: "Blog", icon: <FaBookOpen /> },
    { label: "Help", icon: <FaLifeRing /> },
  ];

const TemplateBar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const navigate = useNavigate();

  const toggleMenu = (menu) => {
    setActiveMenu((prevMenu) => (prevMenu === menu ? null : menu));
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderStyle, setSliderStyle] = useState({});
  const buttonsRef = useRef([]);

  useEffect(() => {
    const activeButton = buttonsRef.current[activeIndex];
    if (activeButton) {
      setSliderStyle({
        width: `${activeButton.offsetWidth}px`,
        left: `${activeButton.offsetLeft}px`,
      });
    }
  }, [activeIndex]);

  return (
    <div id="back-ground">
      {/* <nav id="template-navbar">
        <h1 id="logo">Appsi Studio</h1>

        <div id="nav-links">
          <div id="nav-slider" style={sliderStyle}></div>
          {navItems.map((item, i) => (
            <button
              key={item.label}
              className="nav-button"
              ref={(el) => (buttonsRef.current[i] = el)}
              onClick={() => setActiveIndex(i)}
            >
              <span className="icon">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>

        <div id="nav-icons">
          <div id="cart-icon">🛒</div>
          <div id="user-icon">U</div>
        </div>
      </nav> */}
            <header>
              <nav className="navbar">
                <ul className="nav-left">
                  <img
                    onClick={() => navigate("/")}
                    src="/logo3.png"
                    alt="Logo"
                    width="40"
                    height="40"
                    className="d-inline-block align-text-top mx-4 my-1"
                    style={{ cursor: "pointer" }}
                  />
                  {menuItems.map((menu) => (
                    <li key={menu.name} className="position-relative text-dark" onClick={() => toggleMenu(menu.name)}>
                      {menu.name}
                      {activeMenu === menu.name && (
                        <div className="popup-card">
                          <div className="content">
                            {menu.submenu.map((category, index) => (
                              <div key={index} className="category">
                                {category.title && <h6>{category.title}</h6>}
                                {category.title && <hr />}
                                {category.items.map((item, idx) => (
                                  <React.Fragment key={idx}>
                                    <p className="item">{item.name}</p>
                                    <p className="itemSmall">{item.desc}</p>
                                  </React.Fragment>
                                ))}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                  <li className="text-dark" onClick={()=>[navigate("/template")]}>Studio</li>
                  {/* <li>|</li>
                  <li onClick={() => navigate("/community")}>Community</li>
                  <li>Startup</li>
                  <li>Appsi Store</li> */}
                </ul>
                <div className="nav-right">
                  <span className="mx-4" style={{ cursor: "pointer", marginTop: "10px" }}>
                    <i className="bi bi-globe text-dark"></i>
                  </span>
                  <p className="my-2 text-dark" style={{ marginRight: "30px" }}>|</p>
                  <button className="login-btn text-dark mx-2">Log In</button>
                  <button className="trial-btn mx-2" onClick={() => navigate("/start")}>
                    Start Free Trial
                  </button>
                </div>
              </nav>
            </header>

      <TemplateGrid />
    </div>
  );
};

export default TemplateBar;
