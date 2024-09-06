import React from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { images } from "../../constants";

const skills = [
  {
    id: "1",
    name: "HTML",
    bgColor: "bg-[#E34F26]/50",
    icon: images.html,
  },
  {
    id: "2",
    name: "CSS",
    bgColor: "bg-[#264de4]/50",
    icon: images.css,
  },
  {
    id: "3",
    name: "JavaScript",
    bgColor: "bg-[#f0db4f]/50",
    icon: images.javascript,
  },
  {
    id: "4",
    name: "React",
    bgColor: "bg-[#61DAFB]/50",
    icon: images.react,
  },
  {
    id: "5",
    name: "Node.js",
    bgColor: "bg-[#3C873A]/50",
    icon: images.node,
  },
  {
    id: "6",
    name: "Sass",
    bgColor: "bg-[#CF649A]/50",
    icon: images.sass,
  },
  {
    id: "7",
    name: "Git",
    bgColor: "bg-[#F1502F]/50",
    icon: images.git,
  },
  {
    id: "8",
    name: "Typescript",
    bgColor: "bg-[#2F74C0]/50",
    icon: images.typescript,
  },
];

const experiences = [
  {
    id: "exp1",
    year: "2022",
    works: [
      {
        id: "work1",
        name: "Frontend Developer",
        company: "Tech Corp",
        desc: "Worked on building modern web applications using React and Tailwind CSS.",
      },
      {
        id: "work2",
        name: "UI/UX Designer",
        company: "Design Studio",
        desc: "Designed intuitive user interfaces for mobile apps.",
      },
    ],
  },
  {
    id: "exp2",
    year: "2023",
    works: [
      {
        id: "work3",
        name: "Full Stack Developer",
        company: "Dev Solutions",
        desc: "Developed full-stack applications with React and Node.js.",
      },
      {
        id: "work4",
        name: "Software Engineer",
        company: "CodeBase",
        desc: "Collaborated on multiple API integrations and optimized backend performance.",
      },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="mt-16">
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.id} // Using skill.id as key
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.id} // Using experience.id as key
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <React.Fragment key={work.id}>
                    {" "}
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </React.Fragment>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
