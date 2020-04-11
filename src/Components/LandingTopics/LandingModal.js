import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Modal, Image, Icon, Header, Button } from "semantic-ui-react";
import cardPic from "../../Images/modal-01.png";

function LandingModal({ modal, closeModal }) {
  const handleClick = () => {
    localStorage.setItem("firstTimeToSite", JSON.stringify(true));
    closeModal();
  };

  return (
    <Modal open={modal} onClose={closeModal}>
      <Modal.Header>
        <p style={{ FontFamily: "Montserrat" }}>Welcome to The Whole Story! </p>
      </Modal.Header>
      <Modal.Content>
        <Modal.Description style={{ padding: "10px" }}>
          <img
            style={{ width: "350px", float: "right", marginLeft: "10px" }}
            src={cardPic}
          ></img>

          <p>
            Every card represents a chain of articles that have 2 components:
          </p>
          <p>
            1) A topic: Every chain of articles are centered around a topic!
            Choose one here or search for a topic and choose a sub-topic.{" "}
          </p>
          <p>
            2) Categories: These are the objective categories that the
            represented articles are related to.
          </p>
          <p>
            Pick from one of our curated cards or search for your own! To learn
            more visit our “About” page!
          </p>
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
