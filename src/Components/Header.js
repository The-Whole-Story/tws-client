import React from "react";
import { Link } from "react-router-dom";
import Logo from "../LOGO-whole-story.png";
import { Divider, Image } from "semantic-ui-react";

function Header() {
  return (
    <React.Fragment>
      <Link to={`/`} className="text">
        <Image src={Logo} centered />{" "}
      </Link>

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
            <Link to={`/about`} className="text">
              ABOUT US
            </Link>
          </div>

          <div className="ui  item">
            <Link to={`/basics`} className="text">
              101
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
