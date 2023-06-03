import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
const NotFound = () => {
  const navigate = useNavigate();
  const goToHome = () => navigate("/");
  return (
    <div className="text-center">
      <h1 className="text-white"> Page not found </h1>
      <Button type="button" onClick={goToHome}>
        {" "}
        Go to Home
      </Button>
    </div>
  );
};

export default NotFound;
