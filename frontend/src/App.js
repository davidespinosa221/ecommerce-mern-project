import "./App.scss";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route extact path="/" Component={Home} />
        <Route extact path="/product/:id" Component={ProductDetails} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
