import React from "react";
import Topic from "../Topics/Topic";
import { Header, Container } from "semantic-ui-react";

function LandingPage() {
  return (
    <React.Fragment>
      <Topic title={"Trending"} />
      <Topic title={"Topic 2"} />
      <Topic title={"Topic 3"} />
    </React.Fragment>
  );
}

export default LandingPage;
