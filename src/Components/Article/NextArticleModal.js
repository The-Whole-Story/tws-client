import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import heroImage from "../../Images/bubble-1.png";
import { Modal, Image, Progress, Icon, Header } from "semantic-ui-react";

function NextArticleModal({
  modal,
  closeModal,
  vote,
  source,
  nextArticleId,
  articleCount,
  articleIndex,
  setArticleIndex
}) {
  const history = useHistory();

  const handleClick = () => {
    setArticleIndex(articleIndex + 1);
    localStorage.setItem("currentArticleIndex", articleIndex + 1);
    history.push(`/article/${nextArticleId}`);
    closeModal();
  };

  return (
    <Modal open={modal} onClose={closeModal}>
      <Modal.Header>The source of this article is...{source}</Modal.Header>
      <Modal.Content image>
        <Image wrapped size="medium" src={heroImage} />
        <Modal.Description>
          <Header>Are you suprised you {vote} voted this article?</Header>
          <Header>Move to the next article to get the whole story.</Header>
          <Progress
            value={articleIndex + 1}
            total={articleCount}
            progress="ratio"
            active
          >
            You're almost there!
          </Progress>
          <div style={{ textAlign: "right", paddingTop: "10px" }}>
            <Icon
              size="huge"
              name="arrow alternate circle right"
              color="grey"
              onClick={handleClick}
            ></Icon>
          </div>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}
export default NextArticleModal;
