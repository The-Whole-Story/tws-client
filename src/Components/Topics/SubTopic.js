import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Card } from "semantic-ui-react";
import Spinner from "../Spinner";
import { fetchArticleIds, fetchSubtopics } from "../../API/twsApi";

function SubTopic({ title, index, searchTerm, topic, categories }) {
  const history = useHistory();
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    fetchSubtopics(searchTerm, topic).then((res) => {
      //console.log("This is response", res)
    });
  }, []);

  const handleOnClick = () => {
    // make Api call to article ids
    setSpinner(true);
    const articleCount = JSON.parse(localStorage.getItem("count"));
    fetchArticleIds(`${searchTerm} ${topic}`, articleCount).then(
      (articleIds) => {
        localStorage.setItem("articleChain", JSON.stringify(articleIds));
        localStorage.setItem("currentArticleIndex", JSON.stringify(0));
        history.push(`/article/${articleIds[0]}`);
      }
    );
  };
  const displayCategories = () => {
    return categories && categories.map((category) => category);
  };
  const renderCard = () => {
    if (spinner) {
      return <Spinner message="Getting your chain of articles" />;
    } else {
      return (
        <Card
          key={index}
          style={{
            margin: "10px",
            boxShadow: "2px 3px 10px rgba(0, 0, 0, 0.2)",
            borderRadius: "6px",
          }}
          onClick={handleOnClick}
          className="animated rollIn"
        >
          <Card.Content>
            <Card.Header>{topic}</Card.Header>
            <Card.Meta>Category: {displayCategories()}</Card.Meta>
            <Card.Description>Keyword: {searchTerm}</Card.Description>
          </Card.Content>
        </Card>
      );
    }
  };

  return <React.Fragment>{renderCard()}</React.Fragment>;
}

export default SubTopic;
