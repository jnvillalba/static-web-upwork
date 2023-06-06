// SwipeableList.js
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import DetailsHeader from "./DetailsHeader";
import ItemDetails from "./ItemDetails";
import AudioPlayer from "./AudioPlayer";

const SwipeableList = ({ artist, data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (direction) => {
    if (direction === "up" && currentIndex < data.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else if (direction === "down" && currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedUp: () => handleSwipe("up"),
    onSwipedDown: () => handleSwipe("down"),
  });

  const renderTitles = () => {
    return data.map((item, index) => {
      if (index < currentIndex) {
        return (
          <h2 className="list-text" key={index}>
            {item.TitleText}
          </h2>
        );
      } else if (index === currentIndex) {
        return (
          <ItemDetails
            title={item.TitleText}
            year={item.Year}
            description={item.DescriptionText}
            mediaUrl={item.MediaIURL}
            key={index}
          />
        );
      } else if (index > currentIndex) {
        return (
          <p className="list-text" key={index}>
            {item.TitleText}
          </p>
        );
      }
    });
  };

  return (
    <div className="section-content">
      <DetailsHeader artist={artist} />
      <div {...swipeHandlers} style={{ touchAction: "pan-y" }}>
        <div className="container">
          {renderTitles()}
          {data[currentIndex].MediaIURL && (
            <AudioPlayer url={data[currentIndex].MediaIURL} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SwipeableList;
