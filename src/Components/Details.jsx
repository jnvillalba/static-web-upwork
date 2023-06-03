import React from "react";
import { useNavigate } from "react-router-dom";

function Details({ item, artist, data }) {
  const navigate = useNavigate();
  const goToHome = () => navigate("/");

  return (
    <div className="section">
      <button className="btn backBtn" onClick={goToHome}>
        {"<<"}
      </button>
      <h1 className="name">{artist.Name}</h1>
      <h1 className="years">{artist.Years}</h1>
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
      <h2 className="year">{item.Year}</h2>
      <h2 className="title">{item.TitleText}</h2>
      <p className="descriptionText">{item.DescriptionText}</p>
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
      <div className="audioPlayer">
        {item.MediaIURL && (
          <audio controls>
            <source src={item.MediaIURL} type="audio/mpeg" />
          </audio>
        )}
      </div>

    </div>
  );
}

export default Details;
