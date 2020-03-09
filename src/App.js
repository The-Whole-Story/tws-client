import React from "react";
import Header from "./Components/Header";
import SearchInput from "./Components/SearchInput";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <Container>
      <Header />
      <SearchInput />
    </Container>
  );
}

export default App;
