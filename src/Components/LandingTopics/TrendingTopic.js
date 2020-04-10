import React, { useState, useEffect } from "react";
import {
  Header,
  Container,
  Card,
  Message,
  Grid,
  Icon,
} from "semantic-ui-react";
import SubTopic from "../Topics/SubTopic";
import { fetchSubtopics } from "../../API/twsApi";

function TrendingTopic({ title }) {
  const [topics, setTopics] = useState([
    {
        name: 'Coronavirus',
        categories: ['Pandemic, ', 'Gov’t & Politics, ', 'Outbreak, ', 'Environmental, ', 'Business, ', 'Instability, ', 'Society '],
    },
    { name: 'Technology', categories: ['Cobol, ', 'Hackathons, ', 'Development, ', 'Remote, ', 'Corona, ', 'Pandemic, ', 'Golang']},
    { name: 'Streaming', categories: ['High Traffic, ', 'Entertainment, ', 'Tiger King, ', 'Netflix, ', 'Amazon, ','Demand, ', 'Technology, ', 'Business '] },
]);

  const renderCards = () => {
    if (topics.length === 0) {
      return (
        <Message icon>
          <Icon name="circle notched" loading />
          <Message.Content>
            <Message.Header>Just one second</Message.Header>
            We are fetching that content for you.
          </Message.Content>
        </Message>
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
            alignItems: "center",
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
                  style={{ margin: "10px" }}
                >
                  <SubTopic
                    topic={topic.name}
                    categories={topic.categories}
                    index={index}
                  />
                </Grid.Column>
              );
            })}
        </Card.Group>
      </Grid>
    );
  };

  return (
    <React.Fragment>
      <Container>
        <Header
          as="h2"
          float="left"
          className="title animated fadeInRightBig"
          style={{ paddingBottom: "25px" }}
        >
          {title}
        </Header>
      </Container>
      <Container>{renderCards()}</Container>
    </React.Fragment>
  );
}

export default TrendingTopic;
