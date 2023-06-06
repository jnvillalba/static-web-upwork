import React from "react";
import AudioPlayer from "./AudioPlayer";
import DetailsHeader from "./DetailsHeader";
import { motion } from "framer-motion";
function Details({ item, artist, data }) {
  const textAnimationVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const textAnimationTransition = { duration: 1 };

  return (
    <div className="section">
      <div className="section-content">
        <DetailsHeader item={item} artist={artist} data={data} />
        <ul>
          {data
            .slice(1, item.Order)
            .map((prevItem) => prevItem.TitleText)
            .map((prevTitle, i) => (
              <li className="list-text" key={i}>
                {prevTitle}
              </li>
            ))}
        </ul>
        <motion.h2
          className="year"
          initial="hidden"
          animate="visible"
          transition={{ ...textAnimationTransition, delay: 0.4 }}
          variants={textAnimationVariants}
        >
          {" "}
          {item.Year}
        </motion.h2>
        <motion.h2
          className="title"
          initial="hidden"
          animate="visible"
          transition={{ ...textAnimationTransition, delay: 0.5 }}
          variants={textAnimationVariants}
        >
          {item.TitleText}
        </motion.h2>
        <motion.p className="descriptionText"
        initial="hidden"
              animate="visible"
              transition={{ ...textAnimationTransition, delay: 1 }}
              variants={textAnimationVariants}
            >
          {item.DescriptionText}</motion.p>
        <ul>
          {data
            .slice(item.Order, data.length)
            .map((nextItem) => nextItem.TitleText)
            .map((nextTitle, i) => (
              <li className="list-text" key={i}>
                {nextTitle}
              </li>
            ))}
        </ul>
      </div>
      <div className="audioPlayer">
        {item.MediaIURL && <AudioPlayer url={item.MediaIURL} />}
      </div>
    </div>
  );
}

export default Details;
