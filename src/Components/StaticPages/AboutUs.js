import React from "react";
import {
  Container,
  Header,
  Card,
  Image,
  Grid,
  Divider,
} from "semantic-ui-react";

import "./AboutUs.css";

function AboutUs() {
  return (
    <Container text textAlign="centered">
      <h1 id="header">ABOUT US</h1>
      <h2>Mission Statement</h2>
      <p id="main">
        The Whole Story aims to help the younger generation become
        politically-informed in a holistic manner by removing avenues for
        implicit bias to enter their news stream, leading to a deeper and more
        individualistic political understanding.
      </p>
      <p>
        Our research shows that the perception younger people have of our
        current media landscape is untruthful, divisive, and polarizing. The
        biggest media outlet turnoff named was when outlets provide big claims
        without backing and present articles riddled with aggressive language,
        bias, and distorted facts.
      </p>
      <p>
        We aim to filter out bias in the articles we are serving by removing
        sensationalized titles, images, comments, and heavy color use from every
        article to place the user's focus on the text—and only the text. The
        articles served are from a curated list of credible and factual sources
        between the liberal and conservative spectrum and are not written by us.
        Furthermore, we want to stray users away from reading articles for their
        own confirmation bias by hiding the source until they have reflected on
        the actual article content. In doing so we hope to enhance the media
        literacy of our users to help them become more critical consumers who
        have formed their own independent ideas.
      </p>
      <h2>How It Works</h2>
      <p>
        Articles presented on the home page contain a topic and related
        categories. Upon clicking on a card you would be presented with a chain
        of articles from different credible sources having to do with the topic
        and categories mentioned. As a user, you can choose a topic selected for
        you, or search for your own.
      </p>
      <p>
        Unlike other sites that redirect you to a list of flashy article titles
        designed to grab your attention, The Whole Story’s search will lead to a
        list of subtopics, where you can choose any topic that interests you
        free of any external influences. You will then be served a group of
        articles, all centered around your chosen topic, where the articles come
        from different perspectives and sources so that you can grasp the whole
        story.
      </p>
      <p>
        When your selected article appears you will notice the title, images,
        and any branding will be removed to bring the focus back to the written
        word. Upon finishing reading an article you will be asked to up or down
        vote what you have read. Only then will the source be revealed—does your
        reaction to the article match your existing ideas of the news outlet?.
        We gather no metrics from your voting of the articles, the voting system
        is there purely for the purpose of inspiring your reflection.
      </p>
      <p>
        Upon finishing an article, you will be encouraged to continue reading
        about your subtopic of interest from different perspectives—but still
        initially anonymous—sources in the pursuit of the whole story.
      </p>
      <h2>Who We Are</h2>
      {/* <Divider></Divider> */}
      <Grid columns={3} divided>
        <Grid.Row>
          <Grid.Column>
            <Card>
              <Image
                src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
                wrapped
                ui={false}
              />
              <Card.Content>
                Talia Bahar
                <Card.Meta>
                  <span className="date">Lead UX/UI</span>
                </Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card>
              <Image
                src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                wrapped
                ui={false}
              />
              <Card.Content>
                Marco Berardini
                <Card.Meta>
                  <span className="date">Product Owner</span>
                </Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card>
              <Image
                src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
                wrapped
                ui={false}
              />
              <Card.Content>
                Anacan Mangelsdorf
                <Card.Meta>
                  <span className="date">Scrum Master</span>
                </Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default AboutUs;
