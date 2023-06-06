import React from 'react'
import { useNavigate } from "react-router-dom";
const DetailsHeader = ({artist}) => {
    const navigate = useNavigate();
    const goToHome = () => navigate("/");
  return (
    <div className="header">
        <button className="btn backBtn" onClick={goToHome}>
          &lt;&lt;
        </button>
        <h1 className="name">{artist.Name}</h1>
        <h1 className="years">{artist.Years}</h1>
      </div>
  )
}

export default DetailsHeader