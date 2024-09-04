import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";

const About = () => {
  return <section>About</section>;
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
