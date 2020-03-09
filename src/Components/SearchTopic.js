import React, { useState } from "react";
import { Header, Container, Card } from "semantic-ui-react";

function SearchTopic() {
  return (
    <React.Fragment>
      <React.Fragment>
        <Container>
          {" "}
          <Header as="h2" float="left" style={{ paddingBottom: "20px" }}>
            Search Topic
          </Header>
        </Container>
        <Container>
          <Card.Group itemsPerRow={3} style={{ paddingBottom: "20px" }}>
            <Card>
              <Card.Content>
                <Card.Header>Global Warming</Card.Header>
                <Card.Meta>Something here</Card.Meta>
                <Card.Description>More text here.</Card.Description>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>Trump</Card.Header>
                <Card.Meta>Something here</Card.Meta>
                <Card.Description>More text here. </Card.Description>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>Corona Virus</Card.Header>
                <Card.Meta>Something here</Card.Meta>
                <Card.Description>More text here. </Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
        </Container>
      </React.Fragment>
    </React.Fragment>
  );
}

export default SearchTopic;
