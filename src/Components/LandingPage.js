import React from "react";
import Topic from "./Topics/Topic";
import PoliticsTopic from "./LandingTopics/PoliticsTopic";
import { Header, Grid } from "semantic-ui-react";

function LandingPage() {
  return (
    <React.Fragment>
      <PoliticsTopic title={"Politics"} />
      <Topic title={"Trending"} />
      <Topic title={"Positive"} />
    </React.Fragment>
  );
}

export default LandingPage;
