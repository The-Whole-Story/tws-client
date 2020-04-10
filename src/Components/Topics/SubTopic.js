import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Card } from "semantic-ui-react";
import Spinner from "../Spinner";
import { fetchArticleIds, fetchSubtopics } from "../../API/twsApi";

function SubTopic({ title, index, searchTerm, topic, categories }) {
  const history = useHistory();
  const [spinner, setSpinner] = useState(false);

  const capitalizeTopic = (str) => {
    return str.replace(/(^| )./g, s => s.toUpperCase());
  }

  const handleOnClick = () => {
    setSpinner(true);
    fetchArticleIds(`${searchTerm} ${topic}`).then((articleIds) => {
      console.log("articleIds: ", articleIds);
      localStorage.setItem("articleChain", JSON.stringify(articleIds));
      localStorage.setItem("count", JSON.stringify(articleIds.length));
      localStorage.setItem("currentArticleIndex", JSON.stringify(0));
      history.push(`/article/${articleIds[0]}`);
    });
  };
  const displayCategories = () => {
    return categories && categories.map((category) => category + " ");
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
            <Card.Header>{capitalizeTopic(topic)}</Card.Header>
            <Card.Meta>Category: {displayCategories()}</Card.Meta>
            <Card.Description>
              {searchTerm ? "Keyword: " + searchTerm : ""}
            </Card.Description>
          </Card.Content>
        </Card>
      );
    }
  };

  return <React.Fragment>{renderCard()}</React.Fragment>;
}

export default SubTopic;
