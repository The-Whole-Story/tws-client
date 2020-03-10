import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function Topic({ title }) {
  let [clicked, setClick] = useState(false);
  const handleOnClick = () => {
    setClick(true);
  };
  return (
    <React.Fragment>
      <Card className="animated rollIn">
        <Card.Content>
          <Card.Header>Corona Virus</Card.Header>
          <Card.Meta>Something here</Card.Meta>
          <Card.Description>More text here. </Card.Description>
        </Card.Content>
      </Card>
    </React.Fragment>
  );
}

export default Topic;
