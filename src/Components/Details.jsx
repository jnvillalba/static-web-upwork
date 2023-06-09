import React from "react";
import { useNavigate } from "react-router-dom";
import AudioPlayer from "./AudioPlayer";
import DetailsHeader from "./DetailsHeader";
function Details({ item, artist, data }) {
  

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
      </div>
      <div className="audioPlayer">
        {item.MediaIURL && <AudioPlayer url={item.MediaIURL} />}
      </div>
    </div>
  );
}

export default Details;