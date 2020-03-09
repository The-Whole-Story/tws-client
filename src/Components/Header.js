import React from "react";
import Logo from "../LOGO-whole-story.png";
import { Divider, Image } from "semantic-ui-react";

function Header() {
  return (
    <React.Fragment>
      <Image src={Logo} centered />
      <div
        className="ui borderless menu"
        style={{
          marginBottom: "20px",
          border: "none",
          boxShadow: "none"
        }}
      >
        <div className="ui centered grid container">
          <div className="ui item">
            <div className="text">ABOUT US</div>
          </div>
          <div className="ui  item">
            <div className="text">101</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
