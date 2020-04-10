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

function ArticleInfoModal({ modal, closeModal, description }) {
  const [count, setCount] = useState(3);

  const handleClick = () => {
    localStorage.setItem("firstTimeArticle", JSON.stringify(true));
    closeModal();
  };

  return (
    <Modal open={modal} onClose={closeModal}>
      <Modal.Header> Why no titles ?</Modal.Header>
      <Modal.Content image>
        <Image wrapped size="medium" />
        <Modal.Description>
          <Header>{description}</Header>
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
