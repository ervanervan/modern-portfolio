import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaWebAwesome } from "react-icons/fa6";

const SocialMedia = () => (
  <div className="app__social">
    <div className="group">
      <BsLinkedin className="group-hover:text-white" />
    </div>
    <div className="group">
      <BsGithub className="group-hover:text-white" />
    </div>
    <div className="group">
      <CgWebsite className="group-hover:text-white" />
    </div>
  </div>
);

export default SocialMedia;
