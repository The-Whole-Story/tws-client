import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import LandingPage from "./Components/LandingPage";
import SearchInput from "./Components/Header/SearchInput";
import SocialHeader from "./Components/Header/SocialHeader";
import SearchTopic from "./Components/SearchTopic";
import AboutUs from "./Components/StaticPages/AboutUs";
import Basics from "./Components/StaticPages/Basics";
import Article from "./Components/Article/Article";
import footer from "./TWSFooter.png";
import FaceYourBias from "./Components/FaceYourBias/FaceYourBias";

import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const updateSearchTerm = (query) => {
    setSearchTerm(query);
  };
  localStorage.setItem("count", 3);

  // left, netural, and right are the reader's scores for left leaning, neutral, and right leaning sources
  // voting on an article with a _____ leaning source will increment or decrement the user's score for that leaning, respectively
  localStorage.setItem("left", 0);
  localStorage.setItem("neutral", 0);
  localStorage.setItem("right", 0);

  return (
    <div className="App">
      <Router>
        {console.log("In the App component", searchTerm)}
        <SocialHeader />
        <Header />
        <SearchInput updateSearchTerm={updateSearchTerm} />
        <Route exact path="/" component={LandingPage} />
        <Route
          exact
          path="/searchTopic"
          component={() => <SearchTopic searchTerm={searchTerm} />}
        />
        <Route path="/about" component={AboutUs} />
        <Route path="/basics" component={Basics} />
        <Route path="/article/:articleId" component={Article} />
        <Route path="/bias" component={FaceYourBias} />
      </Router>
      <img className="footer" src={footer}></img>
    </div>
  );
}

export default App;
