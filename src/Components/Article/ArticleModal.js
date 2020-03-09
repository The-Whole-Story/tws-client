import React from "react";
import mime from "mime-types";
import { Modal, Image, Button, Icon, Header } from "semantic-ui-react";

function ArticleModal({ modal, closeModal, vote }) {
  return (
    <Modal open={modal} onClose={closeModal}>
      <Modal.Header>You {vote} from the BBC. Are you suprised ?</Modal.Header>
      <Modal.Content image>
        <Image
          wrapped
          size="medium"
          src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
        />
        <Modal.Description>
          <Header>Move to the next article to get the whole story.</Header>
          <Icon size="huge" name="arrow alternate circle right"></Icon>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}
export default ArticleModal;
