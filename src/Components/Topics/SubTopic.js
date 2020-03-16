import React, { useState } from "react";
import { Card } from "semantic-ui-react";
import { fetchArticleIds } from "../../API/twsApi";

function Topic({ title, index, searchTerm, topic }) {
  const handleOnClick = () => {
    // make Api call to article ids
    const articleCount = JSON.parse(localStorage.getItem("count"));
    fetchArticleIds(`${searchTerm} ${topic}`, articleCount).then(articleIds => {
      localStorage.setItem("articleChain", JSON.stringify(articleIds));
    });
  };

  return (
    <React.Fragment>
      <Card key={index} onClick={handleOnClick}>
        <Card.Content>
          <Card.Header>{topic}</Card.Header>
          <Card.Meta></Card.Meta>
          <Card.Description>{searchTerm}</Card.Description>
        </Card.Content>
      </Card>
    </React.Fragment>
  );
}

export default Topic;
