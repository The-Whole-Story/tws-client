import React from "react";
import { Loader, Dimmer } from "semantic-ui-react";

const Spinner = ({ message }) => (
  <Dimmer active>
    <Loader size="huge" content={message ? message : "Loading... "} />
  </Dimmer>
);
export default Spinner;
