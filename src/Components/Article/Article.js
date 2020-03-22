import React, { useState, useEffect } from "react";
import { Container, Header, Icon } from "semantic-ui-react";
import NextArticleModal from "./NextArticleModal";
import ArticleCountModal from "./ArticleCountModal";
import Spinner from "../Spinner";
import { fetchArticlesById } from "../../API/twsApi";

function Article(props) {
  const [spinner, setSpinner] = useState(false);
  const [body, setBody] = useState("");
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

  const openModalCount = () => setModalCount(true);
  const closeModalCount = () => setModalCount(false);

  const handleClickArrow = direction => {
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
    fetchArticlesById(props.match.params.articleId).then(article => {
      console.log("in articles : ", article);
      if (article) {
        setBody(article[0].body);
        setSource(article[0].source.name);
      }
      setSpinner(false);
    });

    // if there is a count API call to recieve first article
  }, [props.match.params.articleId]);

  const renderAricle = () => {
    if (spinner) {
      return <Spinner />;
    }
    return body;
  };

  return (
    <Container text textAlign="center">
      {console.log(props.location)}
      <Header as="h1">- {articleIndex + 1} -</Header>
      <p style={{ textAlign: "left" }}>{renderAricle()}</p>
      <div
        style={{
          padding: "15px",
          border: "1px solid black",
          // boxShadow: "9px 12px #888888",
          // borderBottom: "1px solid black",
          margin: "20px"
        }}
      >
        <Header style={{ fontSize: "16px" }} as="h5">
          Up or Down vote to see who wrote the article
        </Header>
        <Icon
          style={{ "font-size": 42 }}
          onClick={() => handleClickArrow("Up")}
          // size="big"
          // name="arrow alternate circle up outline"
          // name="arrow circle down"
          // name="caret square up"
          name="thumbs down outline"
        />
        <Icon
          style={{ "font-size": 42, marginLeft: "30px" }}
          onClick={() => handleClickArrow("Down")}
          // size="big"
          // name="arrow alternate circle down outline"
          // name="arrow circle down"
          // name="caret square down"
          name="thumbs up outline"
        />
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
      <ArticleCountModal
        setArticleCount={setArticleCount}
        articleCount={articleCount}
        header="How many articles to get the whole story?"
        description="To continue please enter the number of articles you would like to be served"
        modal={modalCount}
        closeModal={closeModalCount}
      />
    </Container>
  );
}

export default Article;
