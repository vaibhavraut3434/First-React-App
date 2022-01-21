import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./Proucts";
import EventListener from "./EventListner";
import Home from "./Home";
import NoPage from "./NoPage";
import List from "./Components/List";
import ListObject from "./Components/ListObject";
import Nave from "./Components/Nave";
import Footer from "./Components/Footer";

function App() {
  const [data, setData] = useState([]);

  const childToParent = (childdata) => {
    setData(childdata);
  };

  return (
    <>
      <Nave />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/event" element={<EventListener />} />
        <Route path="/list" element={<List childToParent={childToParent} />}>
          <Route path=":object" element={<ListObject val={data} />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
