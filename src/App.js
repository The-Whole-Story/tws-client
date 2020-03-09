import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Header from "./Components/Header";
import LandingPage from "./Components/LandingPage";
import SearchInput from "./Components/SearchInput";
import SocialHeader from "./Components/SocialHeader";
import SearchTopic from "./Components/SearchTopic";
import AboutUs from "./Components/StaticPages/AboutUs";
import Basics from "./Components/StaticPages/Basics";
import Article from "./Components/Article";

import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const updateSearchTerm = query => {
    setSearchTerm(query);
  };

  return (
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
      <Route path="/article" component={Article} />
    </Router>
  );
}

export default App;
