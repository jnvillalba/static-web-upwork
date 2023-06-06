import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { useNavigate } from "react-router-dom";
import AudioPlayer from "./AudioPlayer";

const SwipeableList = ({artist, data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const goToHome = () => navigate("/");
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
    const renderedTitles = [];
    let audioPlayer = null;

    for (let i = 0; i < data.length; i++) {
      let titleClasses = "title";
      let yearClasses = "year";

      if (i < currentIndex) {
        titleClasses = "list-text";
        renderedTitles.push(
          <h2 className={titleClasses} key={i}>
            {data[i].TitleText}
          </h2>
        );
      } else if (i === currentIndex) {
        yearClasses += " show";
        audioPlayer = data[i].MediaIURL ? (
          <AudioPlayer url={data[i].MediaIURL} />
        ) : null;
        renderedTitles.push(
          <div className="open-details" key={i}>
            <h2 className={yearClasses}>{data[i].Year}</h2>
            <h2 className={titleClasses}>{data[i].TitleText}</h2>
            <p className="descriptionText">{data[i].DescriptionText}</p>
          </div>
        );
      } else if (i > currentIndex) {
        titleClasses = "list-text";
        renderedTitles.push(
          <p className={titleClasses} key={i}>
            {data[i].TitleText}
          </p>
        );
      }
    }

    return (
      <div className="container">
        {renderedTitles}
        {audioPlayer}
      </div>
    );
  };

  return (
    <div className="section-content">
      <div className="header">
        <button className="btn backBtn" onClick={goToHome}>
          &lt;&lt;
        </button>
        <h1 className="name">{artist.Name}</h1>
        <h1 className="years">{artist.Years}</h1>
      </div>
      <div {...swipeHandlers} style={{ touchAction: "pan-y" }}>
        {renderTitles()}
      </div>
    </div>
  );
};

export default SwipeableList;
