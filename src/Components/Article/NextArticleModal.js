import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Modal,
  Image,
  Progress,
  Icon,
  Header,
  Divider,
} from "semantic-ui-react";
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
import SilverMedal from "../../Images/medals/silverMedal.png";
import BronzeMedal from "../../Images/medals/bronzeMedal.png";
import hero1 from "../../Images/adImages/hero-1.png";
import hero2 from "../../Images/adImages/hero-2.png";
import hero3 from "../../Images/adImages/hero-3.png";
import hero4 from "../../Images/adImages/hero-4.png";
import hero5 from "../../Images/adImages/hero-5.png";

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
    image: BronzeMedal,
    message: "You're a beginner on this topic!",
  },
  "4": {
    image: SilverMedal,
    message: "You're an intermmediate on this topic!",
  },
  "6": {
    image: GoldMedal,
    message: "You're an expert on this topic!",
  },
};

const HEROIMAGES = [hero1, hero2, hero3, hero4, hero5];

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

  const randomHero = () => {
    const randomIndex = Math.floor(Math.random() * 5);
    return HEROIMAGES[randomIndex];
  };
  const handleClick = () => {
    setArticleIndex(articleIndex + 1);
    localStorage.setItem("currentArticleIndex", articleIndex + 1);
    history.push(`/article/${nextArticleId}`);
    closeModal();
  };

  const displayProgress = () => {
    if (!GOALS.includes(articleIndex) && goal > 1 && articleIndex < 6) {
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
          style={{ marginLeft: "15px" }}
          src={
            modalInfoDict[articleIndex]
              ? modalInfoDict[articleIndex].image
              : randomHero()
          }
        />
        <Modal.Description class="modalDesc">
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
