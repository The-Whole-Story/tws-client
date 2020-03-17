import React, { useState } from "react";
import { Modal, Image, Input, Header, Form } from "semantic-ui-react";
import heroImage from "../../Images/echochamber-01.png";

function ArticleCountModal({ modal, closeModal, header, description }) {
  const [count, setCount] = useState(3);
  const handleSubmit = event => {
    event.preventDefault();
    localStorage.setItem("count", JSON.stringify(count));
    closeModal();
  };

  return (
    <Modal open={modal} onClose={closeModal}>
      <Modal.Header> {header}</Modal.Header>
      <Modal.Content image>
        <Image wrapped size="medium" src={heroImage} />
        <Modal.Description>
          <Header>{description}</Header>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Input
                placeholder="Max number"
                value={count}
                onChange={e => setCount(e.target.value)}
              />
              <Form.Button content="Submit" />
            </Form.Group>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}
export default ArticleCountModal;
