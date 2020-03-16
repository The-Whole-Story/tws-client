import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function Topic({ title, index, searchTerm, topic }) {
  let [clicked, setClick] = useState(false);
  const handleOnClick = () => {
    // make Api call to article ids
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
