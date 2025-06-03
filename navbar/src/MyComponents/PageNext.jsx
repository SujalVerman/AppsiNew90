import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";
// , useScroll, useTransform from "framer-motion";

import {
  FaGlobe,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";

export const PageNext = () => {
  const navigate = useNavigate();
  // const [activeIndex, setActiveIndex] = useState(null);

  // const toggleFAQ = (index) => {
  //   setActiveIndex(activeIndex === index ? null : index);
  // };

  const faqData = [
    {
      question: "What is Appsi Studio?",
      answer:
        "Appsi Studio is an all-in-one platform that lets anyone build a professional website and a mobile app — no coding or design skills required. Whether you’re a freelancer, student, small business owner, or startup, you can launch your online presence in minutes.",
    },
    {
      question: "Do I need to know how to code?",
      answer:
        "Not at all. Appsi Studio is designed for non-technical users. You can build your entire website and mobile app using our simple drag-and-drop editor. Just click, type, and publish.",
    },
    {
      question: "Can I really build a mobile app too?",
      answer:
        "Yes! That’s what makes Appsi Studio unique. Once you create your website, we automatically generate a mobile app version of your site that you can publish on the App Store and Google Play — no extra tools or developers needed.",
    },
    {
      question: "How long does it take to build a site or app?",
      answer:
        "Most users can publish their website and app in under 30 minutes, thanks to our pre-designed templates and easy-to-use tools. We also offer AI-assisted setup (coming soon!) to make it even faster.",
    },
    {
      question: "What kind of templates do you offer?",
      answer:
        "We offer a growing collection of beautiful, ready-to-use templates tailored for Freelancers & Creators, Small Businesses & Startups, Online Services & Shops, Events, Portfolios, and more. You can fully customize any template to match your brand.",
    },
    {
      question: "Can I sell products or services with Appsi Studio?",
      answer:
        "Yes! Appsi Studio includes simple e-commerce tools that let you sell physical products, digital downloads, or even services. Add items, set prices, accept payments — it’s all built in.",
    },
    {
      question: "Will my website and app work on all devices?",
      answer:
        "Absolutely. Every site and app made with Appsi Studio is mobile-first and responsive by default, so it’ll look great on phones, tablets, and desktops — no extra work needed.",
    },
    {
      question: "Do you offer support?",
      answer:
        "Yes! We provide live chat, helpful guides, and onboarding support so you’re never building alone. We're here to help you every step of the way.",
    },
    {
      question: "How much does Appsi Studio cost?",
      answer:
        "We offer a free plan to get started — no credit card required. Paid plans unlock advanced features like custom domains, e-commerce tools, and app publishing. Pricing is transparent and designed to be affordable for small businesses and creators.",
    },
    {
      question: "Can I publish my app to the App Store and Google Play?",
      answer:
        "Yes — on our app-supported plans, you can publish your app with our guidance. We’ll help you prepare and submit your app to Apple and Google’s app stores.",
    },
    {
      question: "Is hosting and security included?",
      answer:
        "Yes! Every website and app is hosted securely by us and includes free SSL, backups, and high-speed performance — no technical setup required.",
    },
    {
      question: "Can I create multi-language websites?",
      answer:
        "Yes, multi-language support is coming soon — we’re building tools to help you reach a global audience effortlessly.",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 1;
  const cardGap = 3; // 30px gap between cards
  const cardWidth = 440 + 30; // 440px card + 30px gap
  const totalCards = faqData.length;
  const totalGroups = Math.ceil(totalCards / cardGap);
  const maxIndex = totalGroups - 1;

  // const scrollSlider = (dir) => {
  //   const newIndex = currentIndex + dir * cardsPerView;
  //   const maxScroll = Math.floor(totalCards / cardsPerView) * cardsPerView;

  //   if (newIndex < 0) {
  //     setCurrentIndex(0);
  //   } else if (newIndex >= totalCards) {
  //     setCurrentIndex(0); // loop
  //   } else if (newIndex >= maxScroll) {
  //     setCurrentIndex(maxScroll - cardsPerView); // edge case fix
  //   } else {
  //     setCurrentIndex(newIndex);
  //   }
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1 > maxIndex ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  // const steps = [
  //   {
  //     number: "1",
  //     title: "IDEA",
  //     desc: "Start with a vision. Appsi Studio empowers you to bring your business or personal website idea to life with ease.",
  //   },
  //   {
  //     number: "2",
  //     title: "RESEARCH",
  //     desc: "Explore templates, analyze trends, and get AI suggestions to match your business goals and brand identity.",
  //   },
  //   {
  //     number: "3",
  //     title: "PROJECT",
  //     desc: "Design and develop your site using Appsi Studio’s drag-and-drop tools and built-in integrations—no coding needed.",
  //   },
  //   {
  //     number: "4",
  //     title: "BUSINESS",
  //     desc: "Launch your website, manage customers, and grow with advanced marketing and e-commerce tools.",
  //   },
  // {
  //   number:"5",
  //   title:"Growth",
  // desc: "Analyze performance, optimize strategies, and scale your business with data-driven insights and automation tools."

  // }
  // ];

  // const { scrollYProgress } = useScroll();

  // Animate based on scroll
  // const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  // const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  // const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const [groupIndexes, setGroupIndexes] = useState({});

  const AutoImageSlider = ({
    images,
    groupKey,
    groupIndexes,
    setGroupIndexes,
  }) => {
    //eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
  const interval = setInterval(() => {
    setGroupIndexes((prev) => {
      const currentIndex = prev[groupKey] || 0;
      const nextIndex = (currentIndex + 1) % images.length;

      return {
        ...prev,
        [groupKey]: nextIndex,
      };
    });
  }, 1000);

  return () => clearInterval(interval);
}); // ✅ stable dependencies


    
    

    const currentIndex = groupIndexes[groupKey] || 0;

    return (
      <div className="image-group">
        <div className="image-wrapper">
          <img src={images[currentIndex]} alt={`auto-img-${currentIndex}`} />
        </div>
      </div>
    );
  };

  const groupImages = (images, groupSize = 3) => {
    const grouped = [];
    for (let i = 0; i < images.length; i += groupSize) {
      const group = images.slice(i, i + groupSize);
      grouped.push(group);
    }
    return grouped;
  };

  const images = [
    "dress-1.jpg",
    "dress-2.jpg",
    "dress-3.jpg",
    "flower-1.jpg",
    "flower-2.jpg",
    "flower-3.jpg",
    "gym-1.jpg",
    "gym-2.jpg",
    "gym-3.jpg",
    "lib-1.jpg",
    "lib-2.jpg",
    "lib-3.jpg",
    "port-1.jpg",
    "port-2.jpg",
    "port-3.jpg",
    "veg-1.jpg",
    "veg-2.jpg",
    "veg-3.jpg",
    "watch-1.jpg",
    "watch-2.jpg",
    "watch-3.jpg",
  ];

  const groupedImages = groupImages(images);
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % groupedImages.length);
  };

  const prev = () => {
    setIndex(
      (prev) => (prev - 1 + groupedImages.length) % groupedImages.length
    );
  };

  const getVisibleCards = () => {
    const visible = [];
    for (let i = 0; i < 5; i++) {
      visible.push(groupedImages[(index + i) % groupedImages.length]);
    }
    return visible;
  };

  const fadeInFrom = {
    hidden: (direction) => {
      switch (direction) {
        case "left":
          return { opacity: 0, x: -50 };
        case "right":
          return { opacity: 0, x: 50 };
        case "top":
          return { opacity: 0, y: -50 };
        case "bottom":
          return { opacity: 0, y: 50 };
        default:
          return { opacity: 0 };
      }
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // const getVisibleImages = () => {
  //   return [
  //     images[index % images.length],
  //     images[(index + 1) % images.length],
  //     images[(index + 2) % images.length],
  //   ];
  // };

  return (
    <div className="Color1">
      {" "}
      {/*onMouseMove={handleMouseMove}}
      {/* <motion.div
        style={{
          position: "fixed",
          width: "130px",
          height: "100px",
          background:
            "radial-gradient(circle, rgba(255, 255, 255, 0.56), transparent)",
          borderRadius: "20%",
          pointerEvents: "none",
          filter: "blur(50px)",
          zIndex: 0,
        }}
        animate={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
        }}
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: 0.1,
        }}
      /> */}
      <div className="video-container">
        <video
          src="/VID_20250414220307.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <h2 className="video-texts typing-text">
          <TypeAnimation
            sequence={[
              "The leading platform to create, manage and grow a digital presence.",
              1000,
              "",
              500,
              "Dedication with work can beat any company in the world.",
              1000,
              "",
              500,
              "Impact and vision.",
              1000,
              "",
              500,
              "Freedom to create anything.",
              1000,
              "",
              500,
            ]}
            wrapper="span"
            speed={60}
            deletionSpeed={80}
            repeat={Infinity}
            cursor={true}
          />
        </h2>
      </div>
      <section
        className="nextPage-style d-flex flex-column"
        style={{ height: "135vh", color: "white", margin: "0" }}
      >
        <p
          className="moving-gradient-text"
          style={{
            width: "100%",
            textAlign: "left",
            fontSize: "3.3rem",
            position: "relative",
            top: "10px",
            left: "0",
            padding: "0 20px",
            lineHeight: "1.5",
            borderRadius: "10px",
            fontWeight: "bold",
            fontFamily: "Poppins, sans-serif",
            backgroundColor: "#3036e4",
            color: "white",
            zIndex: 1,
          }}
        >
          Build Your Website & App in Minutes. No Code. No Stress.
        </p>
        <motion.div
          className=" top-0"
          style={{ position: "relative", left: "0", gap: "1%" }}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
        >
          <p
            className="text-style-gradient"
            style={{
              padding: "20px",
              fontSize: "1.8rem",
              top: "-2rem",
              position: "relative",
              left: "0",
              width: "100%",
            }}
          >
            Build a fully integrated website and native mobile app in one
            place—no technical skills required. Accelerate your business growth
            with a streamlined platform built for speed, simplicity, and scale.
          </p>
          <p
            style={{
              padding: "20px",
              fontSize: "1.8rem",
              top: "-4rem",
              position: "relative",
              left: "0",
              width: "100%",
            }}
          >
            Accelerate your launch, expand your reach, and scale your business
            at 2x speed all from a unified platform for building premium
            websites and native mobile apps, effortlessly.
          </p>
          {/* <p className="text-style-gradient" style={{ border:"2px solid blue", padding: "20px", fontSize: "1.8rem",top:"-2rem",position: "relative",left: "0",width: "100%" }}>Develop custom web pages and mobile applications together—without needing programming knowledge. Boost your brand’s momentum with an intuitive system crafted for agility, clarity, and rapid expansion. Speed up your go-to-market strategy, broaden your digital footprint, and elevate your business performance—twice as fast through a cohesive platform built for effortless growth.</p> */}
        </motion.div>
        <div
          className="d-flex flex-coloumn"
          style={{ bottom: "17%", position: "relative", gap: "1%" }}
        >
          <div
            className="nextPage-style1"
            style={{ left: "57%", position: "relative" }}
          >
            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              style={{ fontSize: "2.5rem", fontWeight: "bold", color: "white" }}
            >
              Personalize it to reflect your unique style
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
            >
              → Intuitive drag & drop
            </motion.p>
            <motion.p
              className="para-2"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
            >
              Effortlessly add & arrange your text. Visual, Button & even entire
              sections
            </motion.p>
            <motion.p
              className="para-3"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
            >
              Built in AI tool
            </motion.p>
            <motion.p
              className="para-4"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
            >
              Advance design features
            </motion.p>
            <motion.button
              className="para-5 mx-2"
              onClick={() => navigate("/start")}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
            >
              Get Started
            </motion.button>
          </div>
          <div className="boxPage-style">
            <div className="image-container">
              <video
                src="/burger-video.mp4"
                autoPlay
                loop
                muted
                playsInline
              ></video>
              <div className="overlay">
                <a
                  href="https://6693fe06b61ecd50c6f3c1dd--preeminent-queijadas-612713.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Our Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="nextSection">
          <motion.h1 variants={fadeInUp} initial="hidden" whileInView="visible">
            Start strong. Grow stronger with a reliable foundation
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            style={{ fontSize: "1.1rem", position: "relative", top: "-28%" }}
          >
            Launch your website confidently on powerful infrastructure that
            drives millions of websites and helps businesses succeed globally.
          </motion.p>
          <motion.button
            className="para-6 mx-2"
            onClick={() => navigate("/start")}
            variants={fadeInUp}
            style={{ position: "relative", top: "-25%" }}
            initial="hidden"
            whileInView="visible"
          >
            Get Started
          </motion.button>
          {/* ========  Slidder  ========= */}
          <div className="slider-wrapper">
            <button className="arrow left" onClick={prev}>
              ←
            </button>

            <div className="cards-container">
              {getVisibleCards().map((group, i) => {
                const isCenter = i === 2;
                const groupKey = group[0]; // unique id for each group (e.g., "gym-1.jpg")

                return (
                  <div
                    key={i}
                    className={`card ${
                      isCenter ? "center-card" : "side-card side-" + i
                    } slide`}
                  >
                    <div className="image-group">
                      {isCenter ? (
                        <AutoImageSlider
                          images={group}
                          groupKey={groupKey}
                          groupIndexes={groupIndexes}
                          setGroupIndexes={setGroupIndexes}
                        />
                      ) : (
                        <div className="image-wrapper">
                          <img src={group[0]} alt={`img-${i}`} />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="arrow right" onClick={next}>
              →
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="nextSection1">
          <motion.h1
            className="para-7"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
          >
            Grow your business from scratch
          </motion.h1>
          {[
            "Build app for business",
            "Custom automation",
            "Data Analytics",
            "Deploy your app",
            "Connect with industries leaders",
            "Get help at every step",
          ].map((txt, i) => (
            <motion.p
              key={i}
              className={`para-${8 + i}`}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
            >
              {txt}
            </motion.p>
          ))}
          <motion.button
            className="para-14 mx-2"
            onClick={() => navigate("/start")}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
          >
            Get Started
          </motion.button>
          <div className="container">
            <div className="boxs">
              <img
                src="/Alpha.png"
                alt="Responsive"
                className="responsive-image"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="nextSection2 d-flex flex-column">
        {/* <motion.h1
          className="para-15"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
        >
          Build your site in 3 Simple steps
        </motion.h1>
        <motion.button
          className="para-16 mx-2"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
        >
          Start for free
        </motion.button>
        <div className="stepsCount">
          {[
            "1.	Choose a Template : Pick a design that fits your business vibe..",
            "2.	Customize with Ease : Drag, drop, and edit—no tech skills required.",
            "3.	Go Live : Publish your website and app with a click.",
          ].map((txt, i) => (
            <React.Fragment key={i}>
              <motion.p
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
              >
                {txt}
              </motion.p>
              <hr />
            </React.Fragment>
          ))}
        </div> */}

        <div className="image-wrappers">
          <div className="image-container1">
            <motion.img
              src="/pixel8989-01.png"
              alt="Appsi Studio Timeline"
              className="animated-image"
            />

            {/* IDEA */}
            <motion.div
              className="text-block top-left"
              variants={fadeInFrom}
              initial="hidden"
              whileInView="visible"
              custom="left"
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="icon">🤝</div>
              <h4>IDEA</h4>
              <p>
                Start with a vision. Appsi Studio empowers you to bring your
                business or personal website idea to life with ease.
              </p>
            </motion.div>

            {/* RESEARCH */}
            <motion.div
              className="text-block bottom-left"
              variants={fadeInFrom}
              initial="hidden"
              whileInView="visible"
              custom="bottom"
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="icon">📊</div>
              <h4>RESEARCH</h4>
              <p>
                Explore templates, analyze trends, and get AI suggestions to
                match your business goals and brand identity.
              </p>
            </motion.div>

            {/* PROJECT */}
            <motion.div
              className="text-block bottom-right"
              variants={fadeInFrom}
              initial="hidden"
              whileInView="visible"
              custom="bottom"
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="icon">⚙️</div>
              <h4>PROJECT</h4>
              <p>
                Design and develop your site using Appsi Studio’s drag-and-drop
                tools and built-in integrations—no coding needed.
              </p>
            </motion.div>

            {/* BUSINESS */}
            <motion.div
              className="text-block top-right"
              variants={fadeInFrom}
              initial="hidden"
              whileInView="visible"
              custom="right"
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="icon">💰</div>
              <h4>BUSINESS</h4>
              <p>
                Launch your website, manage customers, and grow with advanced
                marketing and e-commerce tools.
              </p>
            </motion.div>

            {/* GROWTH */}
            <motion.div
              className="text-block bottom-far-right"
              variants={fadeInFrom}
              initial="hidden"
              whileInView="visible"
              custom="top"
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="icon">📈</div>
              <h4>GROWTH</h4>
              <p style={{ width: "97%" }}>
                Analyze performance, optimize strategies, and scale your
                business with data-driven insights and automation tools.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="nextSection3">
        <motion.h1 variants={fadeInUp} initial="hidden" whileInView="visible">
          See what's possible
        </motion.h1>
        <motion.p variants={fadeInUp} initial="hidden" whileInView="visible">
          Get inspired by incredible websites made with Appsi
        </motion.p>
        <motion.button
          className="para-16 mx-2"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
        >
          Explore sites
        </motion.button>
        {[1, 2].map((row, idx) => (
          <div key={idx} className="scroll-container">
            <div
              className={
                idx === 0
                  ? "scroll-content scroll-left"
                  : "scroll-content1 scroll-right"
              }
            >
              {/* Duplicate images for seamless scroll */}
              {Array.from({ length: 2 }, (_, copyIdx) =>
                Array.from({ length: idx === 0 ? 10 : 11 }, (_, i) => {
                  const imgIndex = idx === 0 ? i + 1 : i + 11;
                  return (
                    <div
                      key={`${copyIdx}-${i}`}
                      className="box1"
                      style={{
                        backgroundImage: `url(/footer${imgIndex}.jpg)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                  );
                })
              )}
            </div>
          </div>
        ))}
      </section>
      <div className="faq-slider-wrapper">
        <h1 className="faq-heading">
          Discover what our users are most curious about.{" "}
        </h1>
        {/* <button className="faq-arrow left" onClick={() => scrollSlider(-1)}>
          ‹
        </button> */}

        <div className="faq-slider-container">
          <div
            className="faq-slider"
            style={{
              transform: `translateX(-${
                currentIndex * cardWidth * cardsPerView
              }px)`,
            }}
          >
            {faqData.map((item, index) => (
              <div key={index} className="faq-card">
                <div className="faq-bubble">{item.answer}</div>
                <div className="faq-source">
                  <img src="/logo3.png" alt="Play Store" />
                  <div>
                    <p className="faq-user">{item.question}</p>
                    <p className="faq-platform">Google Play Store</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-dots">
            {Array.from({ length: totalGroups }).map((_, i) => (
              <span
                key={i}
                className={`dot ${currentIndex === i ? "active" : ""}`}
              ></span>
            ))}
          </div>
        </div>

        {/* <button className="faq-arrow right" onClick={() => scrollSlider(1)}>
          ›
        </button> */}
      </div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <div className="logo-placeholder">
              <img
                src="/logo3.png"
                alt="Logo"
                width="50"
                height="50"
                className="d-inline-block align-text-top mx-4 my-1"
              />
            </div>
            <h2 className="footer-brand">Appsi</h2>
            <p className="footer-link">
              <strong>About</strong>
            </p>
            <p className="footer-link">
              <strong>Contact Us</strong>
            </p>
          </div>
          <div className="footer-links">
            {[
              [
                "Product",
                [
                  "Website templates",
                  "Website builder",
                  "Website design",
                  "Web hosting",
                  "Mobile app builder",
                  "Domain names",
                ],
              ],
              [
                "Solution",
                [
                  "eCommerce Website",
                  "Portfolio Website",
                  "Restaurant Website",
                  "Blog Website",
                  "Student Website",
                  "Enterprise Solutions",
                  "Appsi Studio",
                ],
              ],
              ["Learn", ["Community Page", "Appsi Blog", "Learning hub"]],
              [
                "Support",
                [
                  "Hire a professional",
                  "Help center",
                  "Report abuse",
                  "System status",
                ],
              ],
            ].map(([title, items], i) => (
              <div key={i} className="footer-column">
                <p className="footer-title">{title}</p>
                {items.map((item, j) => (
                  <p key={j}>{item}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-policy">
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>&copy; Copyright 2025</p>
          </div>
          <div className="footer-social">
            <FaGlobe />
            <FaYoutube />
            <FaFacebook />
            <FaInstagram />
            <FaPinterest />
            <FaXTwitter />
            <FaLinkedin />
          </div>
        </div>
      </footer>
    </div>
  );
};
