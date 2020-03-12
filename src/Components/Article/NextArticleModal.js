import React from "react";
import heroImage from "../../Images/bubble-1.png";
import { Modal, Image, Progress, Icon, Header } from "semantic-ui-react";

function NextArticleModal({ modal, closeModal, vote }) {
  return (
    <Modal open={modal} onClose={closeModal}>
      <Modal.Header>The source of this article is BBC</Modal.Header>
      <Modal.Content image>
        <Image wrapped size="medium" src={heroImage} />
        <Modal.Description>
          <Header>
            Are you suprised you {vote} voted this article? Move to the next
            article to get the whole story.
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
export default NextArticleModal;
