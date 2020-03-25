import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../../TWS-main-logo.png";
import { Image, Menu, Dropdown } from "semantic-ui-react";
import ArticleCountModal from "../Article/ArticleCountModal";

function Header() {
  const [activeItem, setActiveItem] = useState("");
  const [modalCount, setModalCount] = useState(false);
  const history = useHistory();

  const handleItemClick = active => {
    setActiveItem(active);
    // if (active === "Account") {
    //   openModalCount();
    // }
  };

  const openModalCount = () => setModalCount(true);
  const closeModalCount = () => setModalCount(false);

  useEffect(() => {
    const active = history.location.pathname.slice(1);
    setActiveItem(active);
  }, [history]);

  return (
    <React.Fragment>
      <Link to={`/`} className="text" onClick={() => handleItemClick("")}>
        <Image style={{ padding: "0 15px" }} src={Logo} centered />
        <p
          style={{
            textAlign: "center",
            marginTop: "-4px",
            fontFamily: "Montserrat",
            color: "black",
            fontSize: "20px"
          }}
        >
          {" "}
          NEWS WITHOUT BIAS
        </p>
      </Link>
      <Menu
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white"
        }}
        // stackable
        compact
        pointing
        secondary
      >
        <Menu.Item
          as={Link}
          to="/about"
          name="About"
          active={activeItem === "about"}
          onClick={() => handleItemClick("about")}
        />
        <Menu.Item
          name="item"
          active={activeItem === "Account"}
          onClick={() => handleItemClick("Account")}
        />
        <Dropdown text="Politics 101" pointing className="link item">
          <Dropdown.Menu>
            <Dropdown.Item
              as={Link}
              to="/basics"
              name="101"
              onClick={() => handleItemClick("basics")}
            >
              Basic
            </Dropdown.Item>
            <Dropdown.Item>item 2</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
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
