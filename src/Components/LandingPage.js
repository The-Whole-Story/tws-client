import React, { useState, useEffect } from "react";
import Topic from "./Topics/Topic";
import PoliticsTopic from "./LandingTopics/PoliticsTopic";
import PositiveTopic from "./LandingTopics/PositiveTopic";
import TrendingTopic from "./LandingTopics/TrendingTopic";
import { Header, Grid } from "semantic-ui-react";
import LandingModal from "./LandingTopics/LandingModal";

function LandingPage() {
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  useEffect(() => {
    const firstTimeToSite = JSON.parse(localStorage.getItem("firstTimeToSite"));
    if (!firstTimeToSite) {
      openModal();
    }
  }, []);

  return (
    <React.Fragment>
      <PoliticsTopic title={"Politics"} />
      <TrendingTopic title={"Trending"} />
      <PositiveTopic title={"Positive"} />
      <LandingModal modal={modal} closeModal={closeModal} />
    </React.Fragment>
  );
}

export default LandingPage;
