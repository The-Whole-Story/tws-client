import React, { useState } from "react";
import ArticleCountModal from "../Article/ArticleCountModal";
import { Link } from "react-router-dom";

function Header() {
  const [modalCount, setModalCount] = useState(false);

  const openModalCount = () => setModalCount(true);
  const closeModalCount = () => setModalCount(false);

  const handleItemClick = () => {
    openModalCount();
  };

  return (
    <React.Fragment>
      <div className="ui borderless menu centered">
        <div
          className="ui container"
          style={{ width: "100vw", padding: "0", margin: "0 auto" }}
        >
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
          <div className="fitted right item">
            <a className="item" href="mailto:marcoberardini@gmail.com">
              <p>
                <i
                  style={{ paddingLeft: "5px", marginRight: "10px" }}
                  className="mail outline  icon"
                ></i>
              </p>
            </a>
            <a className="item" onClick={() => handleItemClick()}>
              <i className="cog icon"></i>
            </a>
          </div>
        </div>
      </div>
      <ArticleCountModal
        header="Edit the number of articles"
        description="To continue please enter the number of articles you would like to be served"
        modal={modalCount}
        closeModal={closeModalCount}
      />
    </React.Fragment>
  );
}

export default Header;
