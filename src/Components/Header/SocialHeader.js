import React from "react";

function Header() {
  return (
    <React.Fragment>
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
            target="_blank"
            className="fitted item"
          >
            <i className="twitter icon"></i>
          </a>
          <a
            href="https://www.google.com/"
            target="_blank"
            className="fitted item"
          >
            <i className="pinterest f icon"></i>
          </a>
          <a
            href="https://www.google.com/"
            target="_blank"
            className="fitted item"
          >
            <i className="instagram  icon"></i>
          </a>
          <a
            href="mailto:marcoberardini@gmail.com"
            className="fitted right item"
          >
            <p>
              Contact Us
              <i
                style={{ paddingLeft: "5px" }}
                className="mail outline  icon"
              ></i>
            </p>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
