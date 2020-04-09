import React from "react";
import Topic from "./Topics/Topic";
import PoliticsTopic from "./LandingTopics/PoliticsTopic";
import PositiveTopic from "./LandingTopics/PositiveTopic";
import TrendingTopic from "./LandingTopics/TrendingTopic";
import { Header, Grid } from "semantic-ui-react";

function LandingPage() {
  return (
    <React.Fragment>
      <PoliticsTopic title={"Politics"} />
      <TrendingTopic title={"Trending"} />
      <PositiveTopic title={"Positive"} />
    </React.Fragment>
  );
}

export default LandingPage;
