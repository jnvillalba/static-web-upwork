
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import "./App.css";
import FullPageWrapper from "./Components/FullPageWrapper";
import area1 from "./const/area1";
import area2 from "./const/area2";
import artist1 from "./const/artist1";
import artist2 from "./const/artist2";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/1" element={<FullPageWrapper data={area1} artist={artist1} />} />
          <Route path="/2" element={<FullPageWrapper data={area2} artist={artist2} />} />
          <Route exact path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
