import React, { useState } from "react";
import { Header, Container, Card } from "semantic-ui-react";

function Topic({ title }) {
  let [clicked, setClick] = useState(false);
  const handleOnClick = () => {
    setClick(true);
  };
  return (
    <React.Fragment>
      <Container>
        {" "}
        <Header
          as="h2"
          float="left"
          className="title animated fadeInRightBig"
          style={{ paddingBottom: "20px" }}
        >
          {title}
        </Header>
      </Container>
      <Container>
        <Card.Group itemsPerRow={3} style={{ paddingBottom: "20px" }}>
          <Card className="animated rollIn">
            <Card.Content>
              <Card.Header>Global Warming</Card.Header>
              <Card.Meta>Something here</Card.Meta>
              <Card.Description>More text here.</Card.Description>
            </Card.Content>
          </Card>
          <Card className="animated rollIn">
            <Card.Content onClick={handleOnClick}>
              <Card.Header>Trump</Card.Header>
              <Card.Meta>Something here</Card.Meta>
              <Card.Description>More text here. </Card.Description>
            </Card.Content>
          </Card>
          <Card className="animated rollIn">
            <Card.Content>
              <Card.Header>Corona Virus</Card.Header>
              <Card.Meta>Something here</Card.Meta>
              <Card.Description>More text here. </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>
    </React.Fragment>
  );
}

export default Topic;
