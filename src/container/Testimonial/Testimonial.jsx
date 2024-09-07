import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";

const testimonials = [
  {
    imgurl: "https://randomuser.me/api/portraits/men/1.jpg",
    feedback:
      "This service is amazing! The team worked efficiently and met all my expectations. I highly recommend their work to anyone looking for top-quality results.",
    name: "John Doe",
    company: "Tech Solutions",
  },
  {
    imgurl: "https://randomuser.me/api/portraits/women/2.jpg",
    feedback:
      "The professionalism and creativity of this team are outstanding. They provided innovative solutions and communicated clearly throughout the project. Great experience overall!",
    name: "Jane Smith",
    company: "Innovative Designs",
  },
  {
    imgurl: "https://randomuser.me/api/portraits/men/3.jpg",
    feedback:
      "I had an excellent experience. The team was responsive, detail-oriented, and delivered on time. Their dedication and expertise were evident in every phase of the project.",
    name: "Michael Lee",
    company: "Creative Agency",
  },
  {
    imgurl: "https://randomuser.me/api/portraits/women/4.jpg",
    feedback:
      "Working with this company has been a smooth process. Their dedication to delivering a high-quality product was impressive, and they exceeded my expectations every step of the way.",
    name: "Emily Johnson",
    company: "Marketing Pro",
  },
  {
    imgurl: "https://randomuser.me/api/portraits/men/5.jpg",
    feedback:
      "The team went above and beyond to deliver a top-notch product. They were efficient, professional, and their customer service was outstanding. I would definitely work with them again.",
    name: "David Brown",
    company: "Startup Hub",
  },
];

const brands = [
  {
    _id: "brand1",
    imgUrl: images.adidas,
    name: "Adidas",
  },
  {
    _id: "brand2",
    imgUrl: images.amazon,
    name: "Amazon",
  },
  {
    _id: "brand3",
    imgUrl: images.asus,
    name: "Asus",
  },
  {
    _id: "brand4",
    imgUrl: images.bolt,
    name: "Bolt",
  },
  {
    _id: "brand5",
    imgUrl: images.nb,
    name: "New Balance",
  },
  {
    _id: "brand6",
    imgUrl: images.skype,
    name: "Skype",
  },
  {
    _id: "brand7",
    imgUrl: images.spotify,
    name: "Spotify",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img
              src={testimonials[currentIndex].imgurl}
              alt={testimonials[currentIndex].name}
            />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonial",
  "app__primarybg"
);
