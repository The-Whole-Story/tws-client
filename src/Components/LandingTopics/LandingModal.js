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
          Welcome to The Whole Story! We believe in encouraging you to form your
          own opinions while also pushing you to challenge your existing views
          on topics of interest, so we've stripped away all possibilities of
          sensationalization that aim to influence your beliefs. Cards hide
          articles behind them—you choose a topic which displays only raw
          information about the contents behind it, and we'll serve you a list
          of articles from different credible sources and perspectives about
          that topic. In reading each article, you gain a side of the story, but
          only from gathering the different perspectives can you get the whole
          story and become well informed. Ready to get the whole story? Click on
          any of the topics behind this card, or search for your own and choose
          a subtopic! To learn more visit our “About” page!
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          style={{ backgroundColor: "#5dc3de" }}
          onClick={handleClick}
          primary
        >
          Don't show this again <Icon name="chevron right" />
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
export default LandingModal;
