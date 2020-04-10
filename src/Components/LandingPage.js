import React, { useState } from "react";
import Topic from "./Topics/Topic";
import PoliticsTopic from "./LandingTopics/PoliticsTopic";
import PositiveTopic from "./LandingTopics/PositiveTopic";
import TrendingTopic from "./LandingTopics/TrendingTopic";
import { Header, Grid } from "semantic-ui-react";
import LandingModal from "./LandingTopics/LandingModal";

function LandingPage() {
  const [modalNext, setModalNext] = useState(false);

  const openModalNext = () => setModalNext(true);
  const closeModalNext = () => setModalNext(false);

  return (
    <React.Fragment>
      <PoliticsTopic title={"Politics"} />
      <TrendingTopic title={"Trending"} />
      <PositiveTopic title={"Positive"} />
      <LandingModal modal={modalNext} closeModal={closeModalNext} />
    </React.Fragment>
  );
}

export default LandingPage;
