import React from "react";
import "./styles.css";
import Header from "./comps/Header/Header";
import Home from "./comps/Home/Home";
import Blog from "./comps/Blog/Blog";
import About from "./comps/About/About";
import Rooms from "./comps/Rooms/Rooms";
import Restaurant from "./comps/Restaurant/Restaurant";
import Book from "./comps/Book/Book";

import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route } from "react-router-dom";

export default function App() {
  AOS.init({
    duration: 800,
    offset: 0,
  });
  AOS.refresh();

  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Route path="/raven-hotel" exact component={Home} />
        <Route path="/raven-hotel/About" component={About} />
        <Route path="/raven-hotel/Rooms" component={Rooms} />
        <Route path="/raven-hotel/Restaurant" component={Restaurant} />
        <Route path="/raven-hotel/Blog" component={Blog} />
        <Route path="/raven-hotel/Book" component={Book} />
      </div>
    </BrowserRouter>
  );
}
