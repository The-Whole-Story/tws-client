import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Header from "./Components/Header";
import LandingPage from "./Components/LandingPage";
import SearchInput from "./Components/SearchInput";
import SocialHeader from "./Components/SocialHeader";
import AboutUs from "./Components/StaticPages/AboutUs";
import Basics from "./Components/StaticPages/Basics";

import "./App.css";

function App() {
  return (
    <Router>
      <SocialHeader />
      <Header />
      <SearchInput />
      <Route exact path="/" component={LandingPage} />
      <Route path="/about" component={AboutUs} />
      <Route path="/basics" component={Basics} />
    </Router>
  );
}

export default App;
