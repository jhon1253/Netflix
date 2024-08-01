import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Route } from "react-router-dom";
import About from "./pages/About";
import CategoryProducts from "./pages/CategoryProducts";
import NotificationMessage from "./Componets/NotificationMessage";
import Categories from "./pages/Categories";
import Navbar from "./Componets/Navbar";


function App() {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/categories" element={<Categories />}></Route>
          <Route path="/categoryproducts" element={<CategoryProducts />}
          ></Route>
        </Routes>
        <NotificationMessage/>
      </BrowserRouter>
    </>
  );
}

export default App;
