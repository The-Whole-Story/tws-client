import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Card } from "semantic-ui-react";
import Spinner from "../Spinner";
import { fetchArticleIds } from "../../API/twsApi";

function Topic({ title, index, searchTerm, topic }) {
  const history = useHistory();
  const [spinner, setSpinner] = useState(false);

  const handleOnClick = () => {
    // make Api call to article ids
    //setSpinner(true);
    const articleCount = JSON.parse(localStorage.getItem("count"));
    fetchArticleIds(`${searchTerm} ${topic}`, articleCount).then(articleIds => {
      localStorage.setItem("articleChain", JSON.stringify(articleIds));
      localStorage.setItem("currentArticleIndex", JSON.stringify(0));
      history.push(`/article/${articleIds[0]}`);
    });
  };
  const renderCard = () => {
    if (spinner) {
      return <Spinner />;
    } else {
      return (
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
      );
    }
  };

  return <React.Fragment>{renderCard()}</React.Fragment>;
}

export default Topic;
