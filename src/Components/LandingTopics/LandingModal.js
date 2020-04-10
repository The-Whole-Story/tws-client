import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Modal, Image, Icon, Header, Button } from "semantic-ui-react";
import arrow from "../../Images/arrow.png";

function LandingModal({ modal, closeModal }) {
  const handleClick = () => {
    localStorage.setItem("firstTimeToSite", JSON.stringify(true));
    closeModal();
  };

  return (
    <Modal open={modal} onClose={closeModal}>
      <Modal.Header>
        <p style={{ FontFamily: "Montserrat" }}>What is The Whole Story ? </p>
      </Modal.Header>
      <Modal.Content>
        <Modal.Description>
          Articles presented on the home page contain a topic and related
          categories. Upon clicking on a card you would be presented with a
          chain of articles from different credible sources having to do with
          the topic and categories mentioned. As a user, you can choose a topic
          selected for you, or search for your own. Unlike other sites that
          redirect you to a list of flashy article titles designed to grab your
          attention, The Whole Story’s search will lead to a list of subtopics,
          where you can choose any topic that interests you free of any external
          influences. You will then be served a group of articles, all centered
          around your chosen topic, where the articles come from different
          perspectives and sources so that you can grasp the whole story.
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={handleClick} primary>
          Don't show this again <Icon name="chevron right" />
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
export default LandingModal;
