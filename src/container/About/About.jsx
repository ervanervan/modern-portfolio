import React from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";

const abouts = [
  {
    title: "UI/UX Design",
    description:
      "Creating user-friendly interfaces and experiences that are visually appealing and easy to use.",
    imgUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Web Development",
    description:
      "Building responsive and dynamic websites using the latest web technologies.",
    imgUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Branding",
    description:
      "Crafting unique brand identities that resonate with audiences and communicate the right message.",
    imgUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Digital Marketing",
    description:
      "Developing strategies to promote your business online and reach a wider audience.",
    imgUrl: "https://via.placeholder.com/150",
  },
];

const About = () => {
  return (
    <section>
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
            <img src={urlFor(about.imgUrl)} alt={about.title} />
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
