import React, { useState, useEffect } from "react";
import { Header, Container, Card } from "semantic-ui-react";
import { fetchSubtopics } from "../API/twsApi";

function SearchTopic({ searchTerm }) {
    const [topics, setTopics] = useState([]);
    useEffect(() => {
        if (searchTerm !== '') {
            fetchSubtopics(searchTerm).then((subtopics) => {
                setTopics(subtopics);
            });
        }
    }, [searchTerm]);

  return (
    <React.Fragment>
      <Container>
        <Header as="h2" float="left" style={{ paddingBottom: "20px" }}>
          Search Topic
        </Header>
      </Container>
      <Container>
        <Card.Group itemsPerRow={3} style={{ paddingBottom: "20px" }}>
          {topics &&
            topics.map((topic, index) => {
              return (
                <Card key={index} onClick={() => {}}>
                  <Card.Content>
                    <Card.Header>{topic}</Card.Header>
                    <Card.Meta></Card.Meta>
                    <Card.Description>{searchTerm}</Card.Description>
                  </Card.Content>
                </Card>
              );
            })}
        </Card.Group>
      </Container>
    </React.Fragment>
  );
}

export default SearchTopic;