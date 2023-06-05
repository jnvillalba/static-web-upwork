import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { useNavigate } from "react-router-dom";
import area1 from "./const/area1";
import artist1 from "./const/artist1";
import Details from "./Components/Details";
import AudioPlayer from "./Components/AudioPlayer";

const SwipeableList = ({ item, artist, data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const goToHome = () => navigate("/");
  const handleSwipe = (direction) => {
    if (direction === "up") {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else if (direction === "down") {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedUp: () => handleSwipe("up"),
    onSwipedDown: () => handleSwipe("down"),
  });

  const renderTitles = () => {
    const renderedTitles = [];
    const previousTitles = [];
    const currentTitles = [];
    const nextTitles = [];
    let audioPlayer = null;

    for (let i = currentIndex - 1; i <= currentIndex + 1; i++) {
      if (i >= 0 && i < area1.length) {
        let titleClasses = "title";
        let yearClasses = "year";

        if (i === currentIndex - 1) {
          titleClasses = "list-text";
          previousTitles.push(
            <h2 className={titleClasses} key={i}>{area1[i].TitleText}</h2>
          );
        } else if (i === currentIndex) {
          yearClasses += " show";
          audioPlayer = <AudioPlayer url={area1[i].MediaIURL} />;
          currentTitles.push(
            <div key={i}>
              <h2 className={yearClasses}>{area1[i].Year}</h2>
              <h2 className={titleClasses}>{area1[i].TitleText}</h2>
              <p className="descriptionText">{area1[i].DescriptionText}</p>
            </div>
          );
        } else if (i === currentIndex + 1) {
          titleClasses = "list-text";
          nextTitles.push(
            <h2 className={titleClasses} key={i}>{area1[i].TitleText}</h2>
          );
        }
      }
    }

    renderedTitles.push(
      <div className="container" key="previous">
        {previousTitles}
      </div>
    );
    renderedTitles.push(
      <div className="container" key="current">
        {currentTitles}
        {nextTitles}
        {audioPlayer}
      </div>
    );

    return renderedTitles;
  };

  return (
    <>
      <button className="btn backBtn" onClick={goToHome}>
        &lt;&lt;
      </button>
      <h1 className="name">{artist1.Name}</h1>
      <h1 className="years">{artist1.Years}</h1>
      <div {...swipeHandlers} style={{ touchAction: "pan-y" }}>
        {renderTitles()}
      </div>
    </>
  );
};

export default SwipeableList;
