import React from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";

const abouts = [
  {
    title: "UI/UX Design",
    description:
      "Creating user-friendly interfaces and experiences that are visually appealing and easy to use.",
    imgUrl: images.about02,
  },
  {
    title: "Web Development",
    description:
      "Building responsive and dynamic websites using the latest web technologies.",
    imgUrl: images.about03,
  },
  {
    title: "Branding",
    description:
      "Crafting unique brand identities that resonate with audiences and communicate the right message.",
    imgUrl: images.about04,
  },
  {
    title: "Digital Marketing",
    description:
      "Developing strategies to promote your business online and reach a wider audience.",
    imgUrl: images.about01,
  },
];

const About = () => {
  return (
    <section className="mt-16">
      <h2 className="head-text">
        I Know that <span>Good Design</span> <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text mt-5">{about.title}</h2>
            <p className="p-text mt-3">{about.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
