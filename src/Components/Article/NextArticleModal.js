import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import heroImage from "../../Images/bubble-1.png";
import { Modal, Image, Progress, Icon, Header } from "semantic-ui-react";
import arrow from "../../Images/arrow.png";

function NextArticleModal({
  modal,
  closeModal,
  vote,
  source,
  nextArticleId,
  articleCount,
  articleIndex,
  setArticleIndex,
}) {
  const history = useHistory();

  useEffect(() => {});

  const handleClick = () => {
    setArticleIndex(articleIndex + 1);
    localStorage.setItem("currentArticleIndex", articleIndex + 1);
    history.push(`/article/${nextArticleId}`);
    closeModal();
  };

  return (
    <Modal open={modal} onClose={closeModal}>
      <Modal.Header>
        <p style={{ FontFamily: "Montserrat" }}>
          The source of this article is...
        </p>
        <center>
          <Image
            size="large"
            src={process.env.PUBLIC_URL + `/Images/logos/${source}.jpg`}
          />
        </center>
      </Modal.Header>
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
            style={{ fontFamily: "Yantramanav" }}
          >
            You're almost there!
          </Progress>
          <div style={{ textAlign: "right", paddingTop: "10px" }}>
            <img
              style={{ width: "60px", cursor: "pointer" }}
              src={arrow}
              onClick={handleClick}
            ></img>
            {/* <Icon
              size="huge"
              name="chevron circle right"
              color="grey"
            
            ></Icon> */}
          </div>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}
export default NextArticleModal;
