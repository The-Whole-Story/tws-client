import React, { useState, useEffect } from "react";
import { Header, Container, Card, Message, Grid } from "semantic-ui-react";
import Spinner from "./Spinner";
import SubTopic from "./Topics/SubTopic";
import { fetchSubtopics } from "../API/twsApi";

function SearchTopic({ searchTerm }) {
  const [topics, setTopics] = useState([]);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    if (searchTerm !== "") {
      setSpinner(true);
      fetchSubtopics(searchTerm).then(subtopics => {
        if (subtopics) {
          setTopics(subtopics);
        }
        setSpinner(false);
      });
    }
  }, [searchTerm]);

  const renderCards = () => {
    if (spinner) {
      return <Spinner />;
    } else {
      if (topics.length === 0) {
        return (
          <Message
            warning
            header="We did not find that topic"
            content="Please search again"
          />
        );
      }
      return (
        <Grid stackable centered padding columns={3}>
          <Card.Group
            className="animated rollIn"
            itemsPerRow={3}
            style={{
              paddingBottom: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {topics &&
              topics.map((topic, index) => {
                return (
                  <Grid.Column
                    textAlign="center"
                    mobile={16}
                    tablet={8}
                    computer={7}
                  >
                    <SubTopic
                      topic={topic}
                      index={index}
                      searchTerm={searchTerm}
                    />
                  </Grid.Column>
                );
              })}
          </Card.Group>
        </Grid>
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
