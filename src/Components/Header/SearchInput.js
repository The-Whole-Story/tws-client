import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Header,
  Container,
  Input,
  Grid,
  Divider,
  Form
} from "semantic-ui-react";

function SearchInput({ updateSearchTerm }) {
  const history = useHistory();
  const [inputValue, setInputValue] = React.useState("");
  const handleSearchChange = event => {
    setInputValue(event.target.value);
  };
  const handleOnSubmit = event => {
    event.preventDefault();
    updateSearchTerm(inputValue);
    setInputValue("");
    history.push("/SearchTopic");
  };
  return (
    <React.Fragment>
      <Container textAlign="center">
        <Grid centered>
          <Grid.Column mobile={16} tablet={8} computer={7}>
            <Form onSubmit={handleOnSubmit}>
              <Header style={{ marginTop: "20px" }}>
                <Input
                  // loading={searchLoading}
                  style={{ width: "400px" }}
                  value={inputValue}
                  onChange={handleSearchChange}
                  size="mini"
                  icon="search"
                  name="searchTerm"
                  placeholder="Search Articles"
                />
              </Header>
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
      <Divider />
    </React.Fragment>
  );
}

export default SearchInput;
