import React, { useState, useEffect } from "react";
import { Container, Header, Icon } from "semantic-ui-react";
import NextArticleModal from "./NextArticleModal";
import ArticleCountModal from "./ArticleCountModal";
import Spinner from "../Spinner";
import { fetchArticlesById } from "../../API/twsApi";
import good from "../../Images/good.png";
import bad from "../../Images/bad.png";

function Article(props) {
  const [spinner, setSpinner] = useState(false);
  const [body, setBody] = useState([]);
  const [publishedAt, setpublishedAt] = useState("");
  const [source, setSource] = useState("");

  const [articleIndex, setArticleIndex] = useState(0);
  const [articleCount, setArticleCount] = useState(0);
  // const [articleChain, setArticleChain] = useState([]);
  const [nextArticleId, setNextArticleId] = useState("");

  const [modalNext, setModalNext] = useState(false);
  const [modalCount, setModalCount] = useState(false);

  const [vote, setVote] = useState("");

  const openModalNext = () => setModalNext(true);
  const closeModalNext = () => setModalNext(false);

  // const openModalCount = () => setModalCount(true);
  // const closeModalCount = () => setModalCount(false);

  const handleClickArrow = (direction) => {
    if (articleIndex < articleCount - 1) {
      const articleChain = JSON.parse(localStorage.getItem("articleChain"));
      setArticleIndex(
        parseInt(JSON.parse(localStorage.getItem("currentArticleIndex")))
      );
      setNextArticleId(articleChain[articleIndex + 1]);
      setVote(direction);
      openModalNext();
    } else {
      alert("you got to the end");
    }
  };
  useEffect(() => {
    const count = JSON.parse(localStorage.getItem("count"));
    // if (!count) {
    //   openModalCount();
    // }
    setArticleCount(parseInt(JSON.parse(localStorage.getItem("count"))));
    setSpinner(true);
    fetchArticlesById(props.match.params.articleId).then((article) => {
      console.log("in articles : ", article);
      if (article) {
        const newBody = article[0].body;
        setBody([...newBody]);
        const publishedDateTime = article[0].publishedAt.split("T");
        setpublishedAt(publishedDateTime[0]);
        setSource(article[0].source.name);
      }
      setSpinner(false);
    });

    // if there is a count API call to recieve first article
  }, [props.match.params.articleId]);

  const renderAricle = () => {
    if (spinner) {
      return <Spinner message="Fetching your article..." />;
    }
    const newBody = body.map((paragraph) => <p> {paragraph}</p>);
    return newBody;
  };

  return (
    <Container text textAlign="center">
      {console.log(props.location)}
      <Header size="huge" as="h1" style={{ fontFamily: "Playfair Display" }}>
        - {articleIndex + 1} -
        <Header.Subheader style={{ fontFamily: "Montserrat" }}>
          {publishedAt}
        </Header.Subheader>
      </Header>
      <p
        style={{
          textAlign: "left",
          lineHeight: "26px",
          fontFamily: "Yantramanav",
          fontSize: "17px",
          textIndent: "30px",
        }}
      >
        {renderAricle()}
      </p>
      <div
        style={{
          padding: "15px",
          border: "1px solid black",
          margin: "20px",
          marginTop: "40px",
        }}
      >
        <Header style={{ fontSize: "16px", fontFamily: "Montserrat" }} as="h5">
          Did you like this article?
        </Header>
        <img
          style={{ marginRight: "50px", height: "80px", cursor: "pointer" }}
          className="thumbs"
          src={good}
          onClick={() => handleClickArrow("Up")}
        ></img>
        <img
          style={{ height: "80px", cursor: "pointer" }}
          className="thumbs"
          src={bad}
          onClick={() => handleClickArrow("Down")}
        ></img>
      </div>

      <NextArticleModal
        setArticleIndex={setArticleIndex}
        articleIndex={articleIndex}
        articleCount={articleCount}
        nextArticleId={nextArticleId}
        source={source}
        vote={vote}
        modal={modalNext}
        closeModal={closeModalNext}
      />
      {/* <ArticleCountModal
        setArticleCount={setArticleCount}
        articleCount={articleCount}
        header="How many articles to get the whole story?"
        description="To continue please enter the number of articles you would like to be served"
        modal={modalCount}
        closeModal={closeModalCount}
      /> */}
    </Container>
  );
}

export default Article;
