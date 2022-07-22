import React, { useState, useEffect } from "react";
import "../App.css";
import Header from "../components/Header";
import Items from "../components/Items";
import ToggleTheme from "../components/ToggleTheme";

function Home() {
  return (
    <div className="home">
      <Header />
      <Items />
    </div>
  );
}

export default Home;
