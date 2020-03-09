import React, { useState } from "react";
import { Header, Container, Input, Divider } from "semantic-ui-react";

function SearchInput() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };
  return (
    <React.Fragment>
      <Container textAlign="center">
        <Header style={{ marginTop: "20px" }}>
          <Input
            // loading={searchLoading}
            onChange={handleSearchChange}
            value={searchTerm}
            size="mini"
            icon="search"
            name="searchTerm"
            placeholder="Search Articles"
          />
        </Header>
      </Container>
      <Divider />
    </React.Fragment>
  );
}

export default SearchInput;
