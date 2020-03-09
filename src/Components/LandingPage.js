import React from "react";
import CategoryLP from "./CategoryLP";
import { Header, Container } from "semantic-ui-react";

function LandingPage() {
  return (
    <React.Fragment>
      <CategoryLP title={"Trending"} />
      <CategoryLP title={"Cat 2"} />
      <CategoryLP title={"Cat 3"} />
    </React.Fragment>
  );
}

export default LandingPage;
