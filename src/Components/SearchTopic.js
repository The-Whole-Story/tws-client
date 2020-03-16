import React, { useState, useEffect } from "react";
import { Header, Container, Card, Message } from "semantic-ui-react";
import Spinner from "./Spinner";
import { fetchSubtopics } from "../API/twsApi";

function SearchTopic({ searchTerm }) {
  const [topics, setTopics] = useState([]);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    if (searchTerm !== "") {
      setSpinner(true);
      fetchSubtopics(searchTerm).then(subtopics => {
        setTopics(subtopics);
        setSpinner(false);
      });
    }
  }, [searchTerm]);

  const handleOnClick = () => {};

  const renderCards = () => {
    if (spinner) {
      return <Spinner />;
    } else {
      if (topics.length === 0) {
        // Add styling to this
        return (
          <Message
            warning
            header="We did not find that topic"
            content="Please search again"
          />
        );
      }
      return (
        <Card.Group itemsPerRow={3} style={{ paddingBottom: "20px" }}>
          {topics &&
            topics.map((topic, index) => {
              return (
                <Card key={index} onClick={handleOnClick}>
                  <Card.Content>
                    <Card.Header>{topic}</Card.Header>
                    <Card.Meta></Card.Meta>
                    <Card.Description>{searchTerm}</Card.Description>
                  </Card.Content>
                </Card>
              );
            })}
        </Card.Group>
      );
    }
  };

  return (
    <React.Fragment>
      <Container>
        <Header as="h2" float="left" style={{ paddingBottom: "20px" }}>
          Search Topic
        </Header>
      </Container>
      <Container>{renderCards()}</Container>
    </React.Fragment>
  );
}

export default SearchTopic;
