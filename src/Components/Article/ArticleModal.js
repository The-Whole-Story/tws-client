import React from "react";
import mime from "mime-types";
import { Modal, Image, Progress, Icon, Header } from "semantic-ui-react";

function ArticleModal({ modal, closeModal, vote }) {
  return (
    <Modal open={modal} onClose={closeModal}>
      <Modal.Header>The source of this article is BBC</Modal.Header>
      <Modal.Content image>
        <Image
          wrapped
          size="medium"
          src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
        />
        <Modal.Description>
          <Header>
            Are you suprised {vote} voted this article? Move to the next article
            to get the whole story.
          </Header>
          <Progress value="3" total="5" progress="ratio" active>
            You're almost there
          </Progress>
          <div style={{ textAlign: "right", paddingTop: "10px" }}>
            <Icon
              size="huge"
              name="arrow alternate circle right"
              color="grey"
            ></Icon>
          </div>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}
export default ArticleModal;
