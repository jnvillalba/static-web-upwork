import React from "react";
import { useNavigate } from "react-router-dom";
import homescreenImage from "../../assets/homescreen.jpg";

const Home = () => {
  const navigate = useNavigate();
  const goTo1 = () => navigate("/1");
  const goTo2 = () => navigate("/2");

  const containerStyle = {
    backgroundImage: `url(${homescreenImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };

  return (
    <div style={containerStyle} className="layout">
      <div></div>
      <div></div>
      <div className="area" onClick={goTo1}></div>
      <div className="area" onClick={goTo2}></div>
    </div>
  );
};

export default Home;
