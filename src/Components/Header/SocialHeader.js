import React from "react";
import { Grid } from "semantic-ui-react";

function Header() {
  return (
    <div className="ui borderless menu centered">
      <div className="ui container">
        <a className="fitted item">
          <i className="facebook f icon"></i>
        </a>
        <a className="fitted item">
          <i className="twitter icon"></i>
        </a>
        <a className="fitted item">
          <i className="pinterest f icon"></i>
        </a>
        <a className="fitted item">
          <i className="instagram  icon"></i>
        </a>
      </div>
    </div>
  );
}

export default Header;
