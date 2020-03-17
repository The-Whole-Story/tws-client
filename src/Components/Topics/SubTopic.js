import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Card } from "semantic-ui-react";
import { fetchArticleIds } from "../../API/twsApi";

function Topic({ title, index, searchTerm, topic }) {
  const history = useHistory();

  const handleOnClick = () => {
    // make Api call to article ids
    const articleCount = JSON.parse(localStorage.getItem("count"));
    fetchArticleIds(`${searchTerm} ${topic}`, articleCount).then(articleIds => {
      localStorage.setItem("articleChain", JSON.stringify(articleIds));
      localStorage.setItem("currentArticleIndex", JSON.stringify(0));
      history.push(`/article/${articleIds[0]}`);
    });
  };

  return (
    <React.Fragment>
      <Card
        key={index}
        style={{ margin: "10px" }}
        onClick={handleOnClick}
        className="animated rollIn"
      >
        <Card.Content>
          <Card.Header>{topic}</Card.Header>
          <Card.Meta>...</Card.Meta>
          <Card.Description>{searchTerm}</Card.Description>
        </Card.Content>
      </Card>
    </React.Fragment>
  );
}

export default Topic;
