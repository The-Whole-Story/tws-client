import React from "react";
import Header from "./Components/Header";
import LandingPage from "./Components/LandingPage";
import SearchInput from "./Components/SearchInput";
import SocialHeader from "./Components/SocialHeader";
import { Container } from "semantic-ui-react";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <SocialHeader />
      <Header />
      <SearchInput />
      <LandingPage />
    </React.Fragment>
  );
}

export default App;
