import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const dummyData = [
    {
      title: "UI/UX Design",
      description: "A modern UI/UX design for a web application.",
      imgUrl: images.about01,
      projectLink: "#",
      codeLink: "#",
      tags: ["UI/UX", "All"],
    },
    {
      title: "React Web App",
      description: "A web application built with ReactJS.",
      imgUrl: images.about02,
      projectLink: "#",
      codeLink: "#",
      tags: ["Web App", "React JS", "All"],
    },
    {
      title: "Mobile App",
      description: "A cross-platform mobile app using React Native.",
      imgUrl: images.about03,
      projectLink: "#",
      codeLink: "#",
      tags: ["Mobile App", "All"],
    },
    {
      title: "E-commerce Website",
      description: "An e-commerce platform built with Next.js and TailwindCSS.",
      imgUrl: images.about04,
      projectLink: "#",
      codeLink: "#",
      tags: ["Web App", "Next.js", "All"],
    },
    {
      title: "Admin Dashboard",
      description:
        "A responsive admin dashboard with charting and visualization.",
      imgUrl: images.about01,
      projectLink: "#",
      codeLink: "#",
      tags: ["Web App", "React JS", "All"],
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing projects and skills.",
      imgUrl: images.about02,
      projectLink: "#",
      codeLink: "#",
      tags: ["Web App", "All"],
    },
    {
      title: "Landing Page Design",
      description: "A sleek landing page designed with Figma for a marketing.",
      imgUrl: images.about03,
      projectLink: "#",
      codeLink: "#",
      tags: ["UI/UX", "All"],
    },
    {
      title: "Social Media App",
      description: "A social media application built with MERN stack.",
      imgUrl: images.about04,
      projectLink: "#",
      codeLink: "#",
      tags: ["Web App", "React JS", "All"],
    },
    {
      title: "Weather Forecast App",
      description:
        "A weather forecast app built with Vue.js and an external API.",
      imgUrl: images.about01,
      projectLink: "#",
      codeLink: "#",
      tags: ["Web App", "Vue.js", "All"],
    },
  ];

  useEffect(() => {
    setWorks(dummyData);
    setFilterWork(dummyData);
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <section id="work" className="mt-16 container mx-auto">
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>

      <div className="app__work-filter">
        {["All", "UI/UX", "Web App", "Mobile App", "React JS"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.title} />

              <motion.div
                whileHover={{ opacity: 1 }}
                initial={{ opacity: 0 }} // Ensure opacity is 0 initially
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileHover={{ scale: 0.9 }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileHover={{ scale: 0.9 }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
