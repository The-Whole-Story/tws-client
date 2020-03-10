import React, { useState } from "react";
import { Modal, Image, Input, Header, Form } from "semantic-ui-react";

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
        <Image
          wrapped
          size="medium"
          src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
        />
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
