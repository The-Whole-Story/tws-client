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
    const articleChain = JSON.parse(localStorage.getItem("articleChain"));
    setArticleIndex(
      parseInt(JSON.parse(localStorage.getItem("currentArticle")))
    );
    setNextArticleId(articleChain[articleIndex + 1]);
    setVote(direction);
    openModalNext();
  };
  useEffect(() => {
    // const count = JSON.parse(localStorage.getItem("count"));
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
      <Header as="h2">Article</Header>
      <p>{renderAricle()}</p>
      <div style={{ padding: "10px", border: "1px solid black" }}>
        <Header as="h5">Up or Down vote to see who wrote the article</Header>
        <Icon
          onClick={() => handleClickArrow("Up")}
          size="big"
          name="long arrow alternate up"
        />
        <Icon
          onClick={() => handleClickArrow("Down")}
          size="big"
          name="long arrow alternate down"
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
        header="How many articles to get the whole story?"
        description="To continue please enter the number of articles you would like to be served"
        modal={modalCount}
        closeModal={closeModalCount}
      />
    </Container>
  );
}

export default Article;
