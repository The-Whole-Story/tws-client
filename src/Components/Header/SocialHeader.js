import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";

function Header() {
  return (
    <div className="ui borderless menu centered">
      <div className="ui container">
        <a
          href="https://www.google.com/"
          className="fitted item"
          target="_blank"
        >
          <i className="facebook f icon"></i>
        </a>
        <a
          href="https://www.google.com/"
          className="fitted item"
          className="fitted item"
        >
          <i className="twitter icon"></i>
        </a>
        <a
          href="https://www.google.com/"
          className="fitted item"
          className="fitted item"
        >
          <i className="pinterest f icon"></i>
        </a>
        <a
          href="https://www.google.com/"
          className="fitted item"
          className="fitted item"
        >
          <i className="instagram  icon"></i>
        </a>
      </div>
    </div>
  );
}

export default Header;
