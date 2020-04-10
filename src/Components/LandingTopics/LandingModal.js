import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Modal, Image, Icon, Header } from "semantic-ui-react";
import arrow from "../../Images/arrow.png";

function LandingModal({ modal, closeModal }) {
  const handleClick = () => {};

  return (
    <Modal open={modal} onClose={closeModal}>
      <Modal.Header>
        <p style={{ FontFamily: "Montserrat" }}>.......</p>
      </Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header>...</Header>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}
export default LandingModal;
