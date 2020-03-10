import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Header, Container, Card } from "semantic-ui-react";
import SubTopic from "./SubTopic";

function Topic({ title }) {
  const history = useHistory();
  // for future animation
  let [clicked, setClick] = useState(false);

  const handleOnClick = () => {
    console.log("In topic click");
    setClick(true);
    // passing down props via naviagation
    history.push({
      pathname: "/article",
      search: "?query=abc",
      state: { detail: "detail" }
    });
  };

  useEffect(() => {
    // App Api call based on in coming prop
  }, []);

  return (
    <React.Fragment>
      <Container>
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
        <Card.Group
          className="animated rollIn"
          itemsPerRow={3}
          style={{ paddingBottom: "20px" }}
        >
          <Card className="animated rollIn" onClick={handleOnClick}>
            <Card.Content>
              <Card.Header>Global Warming</Card.Header>
              <Card.Meta>Something here</Card.Meta>
              <Card.Description>More text here.</Card.Description>
            </Card.Content>
          </Card>
          <Card className="animated rollIn" onClick={handleOnClick}>
            <Card.Content>
              <Card.Header>Trump</Card.Header>
              <Card.Meta>Something here</Card.Meta>
              <Card.Description>More text here. </Card.Description>
            </Card.Content>
          </Card>
          <Card className="animated rollIn" onClick={handleOnClick}>
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
