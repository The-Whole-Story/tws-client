import React, { useState } from "react";
import { Header, Container, Input, Divider, Form } from "semantic-ui-react";

function SearchInput({ updateSearchTerm }) {
  const [inputValue, setInputValue] = React.useState("");
  const handleSearchChange = event => {
    setInputValue(event.target.value);
  };
  const handleOnSubmit = event => {
    event.preventDefault();
    updateSearchTerm(inputValue);
    setInputValue("");
  };
  return (
    <React.Fragment>
      <Container textAlign="center">
        <Form onSubmit={handleOnSubmit}>
          <Header style={{ marginTop: "20px" }}>
            <Input
              // loading={searchLoading}
              value={inputValue}
              onChange={handleSearchChange}
              size="mini"
              icon="search"
              name="searchTerm"
              placeholder="Search Articles"
            />
          </Header>
        </Form>
      </Container>
      <Divider />
    </React.Fragment>
  );
}

export default SearchInput;
