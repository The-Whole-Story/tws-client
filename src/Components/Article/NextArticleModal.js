import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import heroImage from "../../Images/bubble-1.png";
import { Modal, Image, Progress, Icon, Header } from "semantic-ui-react";
import arrow from "../../Images/arrow.png";
import BBC from "../../Images/logos/BBC.jpg";
import NationalReview from "../../Images/logos/National Review.jpg";
import TheEconomist from "../../Images/logos/The Economist.jpg";
import TheLosAngelesTimes from "../../Images/logos/The Los Angeles Times.jpg";
import TheNewYorkTimes from "../../Images/logos/The New York Times.jpg";
import TheWashingtonPost from "../../Images/logos/The Washington Post.jpg";
import WallStreetJournal from "../../Images/logos/Wall Street Journal.jpg";
import WeeklyStandard from "../../Images/logos/Weekly Standard.jpg";
import GoldMedal from "../../Images/medals/goldMedal.png";

const imagesDict = {
  BBC: BBC,
  "National Review": NationalReview,
  "The Economist": TheEconomist,
  "The Los Angeles Times": TheLosAngelesTimes,
  "The New York Times": TheNewYorkTimes,
  "The Washington Post": TheWashingtonPost,
  "Wall Street Journal": WallStreetJournal,
  "Weekly Standard": WeeklyStandard,
};
const modalInfoDict = {
  "2": {
    image: GoldMedal,
    message: "blah blah blah",
  },
  "4": {
    image: GoldMedal,
    message: "blah blah blah",
  },
  "6": {
    image: GoldMedal,
    message: "blah blah blah",
  },
};

const GOALS = [2, 4, 6];

function NextArticleModal({
  goal,
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

  const displayProgress = () => {
    if (!GOALS.includes(articleIndex) && goal > 1 && goal <= 6) {
      console.log(
        "goal : ",
        goal,
        " index : ",
        articleIndex,
        " current : ",
        articleIndex
      );
      return (
        <Progress
          value={articleIndex}
          total={goal}
          progress="ratio"
          active
          style={{ fontFamily: "Yantramanav" }}
          autoSuccess
        >
          {goal - articleIndex} away from the goal.
        </Progress>
      );
    }
    if (articleIndex > 6) {
      return (
        <Progress
          percent={100}
          autoSuccess
          active
          style={{ fontFamily: "Yantramanav" }}
        >
          You're amazing !
        </Progress>
      );
    }
  };

  return (
    <Modal open={modal} onClose={closeModal}>
      <Modal.Header>
        <p style={{ FontFamily: "Montserrat" }}>
          The source of this article is...
        </p>
        <center>
          {console.log(
            "image dic",
            imagesDict[source],
            "this is source: ",
            source
          )}
          <Image size="large" src={imagesDict[source]} />
        </center>
      </Modal.Header>
      <Modal.Content image>
        <Image
          wrapped
          size="medium"
          src={
            modalInfoDict[articleIndex]
              ? modalInfoDict[articleIndex].image
              : heroImage
          }
        />
        <Modal.Description>
          {modalInfoDict[articleIndex] ? (
            <h1>{modalInfoDict[articleIndex].message}</h1>
          ) : (
            ""
          )}
          <Header>Are you suprised you {vote} voted this article?</Header>
          <Header>Move to the next article to get the whole story.</Header>
          {displayProgress()}
          <div style={{ textAlign: "right", paddingTop: "10px" }}>
            <img
              style={{ width: "60px", cursor: "pointer" }}
              src={arrow}
              onClick={handleClick}
            ></img>
          </div>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}
export default NextArticleModal;
