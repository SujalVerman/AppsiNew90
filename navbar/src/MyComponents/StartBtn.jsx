import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
// import { type } from "requests";

const cardData = [
  {
    title: "Welcome to Appsi Studio!",
    subtitle: "Tell us about yourself",
    options: ["Teammates", "Clients", "Nobody (just me)"],
  },
  {
    title: "Have you used Appsi Studio product before?",
    subtitle: "Select one",
    options: ["Yes, many times", "Yes, a few times", "No, it's my first time"],
  },
  {
    title: "Your Interests",
    subtitle:
      "Select a few recommendations to help us to know about your interest.",
    options: [
      "Education",
      "Research",
      "Development",
      "Business",
      "Creativity",
      "Practice",
      "Project",
    ],
    type: "multi-select",
  },
  {
    title: "What brings you to Appsi Studio today?",
    subtitle: "Select everything that applies",
    options: [
      "Start a new job project",
      "Your Idea",
      "Making up team for Startup",
      "Using it for learning",
      "just checking things out",
    ],
  },
  {
    title: "Do any of these describe your work?",
    subtitle: "Select any that apply",
    options: [
      "Founder",
      "Freelancer",
      "Business",
      "Student",
      "Boot Camp",
      "At an agency",
      "At a company",
      "Other",
    ],
  },

  {
    title: "What kind of work do you do?",
    subtitle: "",
    type: "multi-select",
    options: [
      "Software development",
      "Marketing",
      "Product manager",
      "Student",
      "Founder",
      "UI/UX",
      "Data analytics",
      "Freelancing",
      "Design/Template creating",
      "Share market trader",
      "Educator",
      "Entrepreneur",
      "Research",
      "If other, then do let me know",
    ],
  },
  {
    title: "Who do you collaborate with most often?",
    subtitle: "Select just one to describe your team",
    options: ["Teammates", "Clients", "Nobody (just me)"],
  },
  {
    title: "Want to invite some collaborators",
    subtitle: "Emails",
    type: "email-invite",
  },

  {
    title: "",
    subtitle: "",
    type: "team-name",
  },

  {
    title: "Menu",
    subtitle: "",
    options: [
      "Project idea",
      "Business",
      "Entrepreneur",
      "Startup Help",
      "Freelancing",
    ],
  },
  {
    title: "Choose your Domain of Template",
    subtitle: "",
    options: ["Portfolio", "E-commerce", "Blog", "Education", "Portal"],
  },
  {
    title: "Choose your Sub-domain of Template",
    subtitle: "",
    options: [
      "Named Ideal",
      "Showcase",
      "Documentation",
      "Evaluation",
      "Income Portfolio",
    ],
  },
];

const OverlappingCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [userName, setUserName] = useState("");
  const [workType, setWorkType] = useState("");
  const [useCase, setUseCase] = useState("");
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [showThankYou, setShowThankYou] = useState(false);
  const [showHomeLoading, setShowHomeLoading] = useState(false);
  const navigate = useNavigate();

  const totalCards = cardData.length;
  const lastMenuCardIndex = 9;
  const selectedOption = responses[cardData[currentIndex]?.title] || null;

  const isButtonDisabled =
    (currentIndex === 0 &&
      (!userName.trim() || !workType.trim() || !useCase.trim())) ||
    (!["multi-select", "dropdown", "email-invite", "team-name"].includes(
      cardData[currentIndex]?.type || ""
    ) &&
      currentIndex !== 0 &&
      !selectedOption) ||
    (cardData[currentIndex]?.type === "multi-select" &&
      selectedInterests.length === 0);

  const handleOptionClick = (option) => {
    setResponses((prev) => ({
      ...prev,
      [cardData[currentIndex]?.title]: option,
    }));
  };

  const toggleInterest = (interest) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((item) => item !== interest)
        : [...prev, interest]
    );
  };

  const handleContinue = () => {
    const currentCard = cardData[currentIndex];
    if (!currentCard) return;

    if (currentIndex === 0) {
      setResponses((prev) => ({
        ...prev,
        [currentCard.title]: {
          name: userName.trim(),
          workType: workType.trim(),
          useCase: useCase.trim(),
        },
      }));
    }

    if (currentIndex === 2) {
      setResponses((prev) => ({
        ...prev,
        [currentCard.title]: selectedInterests,
      }));
    }

    if (currentIndex === 11) {
      if (responses["Choose your Sub-domain of Template"]) {
        navigate("/templatepage");
      }
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleSkip = () => {
    setCurrentIndex(lastMenuCardIndex);
  };

  return (
    <div className="card-container1">
      {showHomeLoading && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="loader"></div>
          <h2 className="loading-text">Please wait...</h2>
        </motion.div>
      )}
      <AnimatePresence mode="wait">
        {showThankYou && !showHomeLoading && (
          <motion.div
            className="card-1 thank-you-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="thank-you-title">Thank You for Contributing</h2>
            <p className="thank-you-subtitle">
              We appreciate your time at Appsi Studio! 🎉
            </p>
            <button
              className="back-home-btn"
              onClick={() => navigate("/templatepage")}
            >
              Continue
            </button>
          </motion.div>
        )}
        {!showThankYou &&
          !showHomeLoading &&
          cardData.map((card, index) => {
            if (index !== currentIndex) return null;

            // Cycle directions based on index
            // const directions = [
            //   { x: -500, y: 0 }, // left
            //   { x: 500, y: 0 }, // right
            //   { x: 0, y: -500 }, // top
            //   { x: 0, y: 500 }, // bottom
            // ];
            // const direction = directions[index % 4];

            return (
              <motion.div
                key={currentIndex}
                className={`card-1 card-${index + 1}`}
                initial={{
                  // x: direction.x,
                  // y: direction.y,
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  x: 0,
                  y: 0,
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  // x: -direction.x,
                  // y: -direction.y,
                  opacity: 0,
                  scale: 0.9,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ zIndex: 100 }}
              >
                {card.type !== "multi-select" && (
                  <>
                    <h2 className={`card-title card-title-${index + 1}`}>
                      {card.title}
                    </h2>
                    <p className={`card-subtitle card-subtitle-${index + 1}`}>
                      {card.subtitle}
                    </p>
                  </>
                )}

                {index === 0 ? (
                  <div className="input-group option-buttons justify-content-center d-flex flex-column align-items-center">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="text-input input-name  option-btn"
                    />
                    <input
                      type="text"
                      placeholder="What kind of work do you do?"
                      value={workType}
                      onChange={(e) => setWorkType(e.target.value)}
                      className="text-input input-worktype option-btn"
                    />
                    <input
                      type="text"
                      placeholder="How will you primarily use Appsi?"
                      value={useCase}
                      onChange={(e) => setUseCase(e.target.value)}
                      className="text-input input-usecase  option-btn"
                    />
                  </div>
                ) : card.type === "multi-select" ? (
                  <div className="multi-select-wrapper">
                    <h2 className="card-title card-title-3">{card.title}</h2>
                    <p
                      className="card-subtitle card-subtitle-3"
                      style={{ width: "40%" }}
                    >
                      {card.subtitle}
                    </p>

                    <div
                      className={`multi-select-grid ${
                        index === 5 ? "worktype-grid" : ""
                      }`}
                    >
                      {card.options.map((option, i) => (
                        <div
                          key={i}
                          style={
                            option === "Project"
                              ? {
                                  gridColumn: "2 / span 1",
                                  display: "flex",
                                  justifyContent: "center",
                                }
                              : {}
                          }
                        >
                          <button
                            className={`option-btn multi-option-btn interest-option-${
                              i + 1
                            } ${
                              selectedInterests.includes(option)
                                ? "selected"
                                : ""
                            }`}
                            onClick={() => toggleInterest(option)}
                          >
                            {option}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : card.type === "team-name" ? (
                  <div className="team-name-card">
                    <div className="stepper">
                      <span
                        style={{
                          width: "100%",
                          top: "-30%",
                          position: "relative",
                        }}
                      >
                        ① Name your team
                      </span>
                      <span
                        style={{
                          width: "100%",
                          top: "-30%",
                          position: "relative",
                        }}
                      >
                        ② Add team member
                      </span>
                      <span
                        style={{
                          width: "100%",
                          top: "-30%",
                          position: "relative",
                        }}
                      >
                        ③ Finish setup
                      </span>
                    </div>
                    <h2
                      className="card-title card-title-3"
                      style={{ position: "relative", bottom: "1rem" }}
                    >
                      Create a team
                    </h2>

                    <div
                      className="d-flex"
                      style={{
                        flexDirection: "row",
                        width: "400px",
                        position: "relative",
                        right: "1rem",
                      }}
                    >
                      {/* <h2 className="card-title">{card.title}</h2> */}
                      <label
                        className="team-label d-flex"
                        style={{
                          width: "150px",
                          top: "30px",
                          position: "relative",
                        }}
                      >
                        Team Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your team name"
                        value={responses[card.title] || ""}
                        onChange={(e) =>
                          setResponses((prev) => ({
                            ...prev,
                            [card.title]: e.target.value,
                          }))
                        }
                        className="text-input option-btn team-input option-btn"
                        style={{ width: "400px", marginLeft: "20px" }}
                      />
                    </div>
                    <p className="team-subtext">
                      After creating a team, you can invite others to join
                    </p>
                    <button className="option-btn create-team-btn">
                      Create team
                    </button>
                  </div>
                ) : card.type === "email-invite" ? (
                  <div className="email-invite-card">
                    <input
                      type="email"
                      placeholder="name@gmail.com"
                      className="text-input invite-input option-btn"
                    />
                    <input
                      type="email"
                      placeholder="name@gmail.com"
                      className="text-input invite-input option-btn"
                    />
                    <input
                      type="email"
                      placeholder="name@gmail.com"
                      className="text-input invite-input option-btn"
                    />

                    <button className="option-btn send-invites-btn">
                      Send Invites
                    </button>

                    <div className="invite-link">
                      <p className="copy-link">Copy link to invite</p>
                      {/* <p className="do-later">Do this later</p> */}
                    </div>
                  </div>
                ) : card.type === "dropdown" ? (
                  <select
                    className="dropdown-select select-input"
                    value={responses[card.title] || ""}
                    onChange={(e) => handleOptionClick(e.target.value)}
                  >
                    <option
                      value=""
                      disabled
                      className="option-btn multi-select"
                    >
                      Select an option
                    </option>
                    {card.options.map((option, i) => (
                      <option key={i} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : index === 4 ? (
                  <div className="three-col-grid">
                    {card.options.map((option, i) => (
                      <button
                        key={i}
                        className={`option-btn option-${index + 1} ${
                          responses[card.title] === option ? "selected" : ""
                        }`}
                        onClick={() => handleOptionClick(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                ) : (
                  card.options.map((option, i) => (
                    <button
                      key={i}
                      className={`option-btn option-${index + 1} ${
                        responses[card.title] === option ? "selected" : ""
                      }`}
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </button>
                  ))
                )}

                <div className={`btn-container btn-container-${index + 1}`}>
                  <button
                    className={`continue-btn continue-btn-${index + 1}`}
                    onClick={handleContinue}
                    disabled={isButtonDisabled}
                  >
                    {currentIndex === totalCards - 1 ? "continue" : "Continue"}
                  </button>
                  {currentIndex < lastMenuCardIndex && (
                    <button
                      className={`skip-btn skip-btn-${index + 1}`}
                      onClick={handleSkip}
                    >
                      Skip
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
      </AnimatePresence>
    </div>
  );
};

export default OverlappingCards;
