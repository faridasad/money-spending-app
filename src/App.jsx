import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Intro from "./pages/Intro";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import products from "./data.json";

export const MainContext = React.createContext();

function App() {
  const [money, setMoney] = useState(0);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState();

  const data = {
    basket,
    setBasket,
    total,
    setTotal,
    products,
    money,
    setMoney,
  };

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);

  return (
    <div>
      <MainContext.Provider value={data}>
        <Router>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route
              path="/home"
              element={money ? <Home /> : <Navigate to="/" />}
            />
            <Route
              path="/checkout"
              element={basket.length === 0 ? <Navigate to="/" /> : <Basket />}
            />
          </Routes>
        </Router>
      </MainContext.Provider>
    </div>
  );
}

export default App;
