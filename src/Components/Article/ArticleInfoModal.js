import React, { useState } from "react";
import {
  Modal,
  Image,
  Input,
  Header,
  Form,
  Button,
  Icon,
} from "semantic-ui-react";
// import heroImage from "../../Images/echochamber-01.png";
import cardPic from "../../Images/modal-02.png";

function ArticleInfoModal({ modal, closeModal, description }) {
  const [count, setCount] = useState(3);

  const handleClick = () => {
    localStorage.setItem("firstTimeArticle", JSON.stringify(true));
    closeModal();
  };

  return (
    <Modal open={modal} onClose={closeModal}>
      <Modal.Header> Why no titles?</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <img style={{ width: "300px", float: "right" }} src={cardPic}></img>

          <p style={{ padding: "55px 0" }}>
            Titles are designed to capture and steer your attention. We want you
            to form your own ideas on the topics you are interested in, so we've
            removed all titles, images, and media related branding.
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
export default ArticleInfoModal;
