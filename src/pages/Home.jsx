import React, { useState, useEffect } from "react";
import "../App.css";
import Header from "../components/Header";
import Items from "../components/Items";

function Home() {
  return (
    <div className="App">
      <Header />
      <Items />
    </div>
  );
}

export default Home;
