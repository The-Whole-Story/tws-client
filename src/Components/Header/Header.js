import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../TWS-main-logo.png";
import { Image, Menu, Dropdown } from "semantic-ui-react";
import ArticleCountModal from "../Article/ArticleCountModal";

function Header() {
  const [activeItem, setActiveItem] = useState("");
  const [modalCount, setModalCount] = useState(false);

  const handleItemClick = active => {
    setActiveItem(active);
    if (active === "Account") {
      openModalCount();
    }
  };

  const openModalCount = () => setModalCount(true);
  const closeModalCount = () => setModalCount(false);

  return (
    <React.Fragment>
      <Link to={`/`} className="text" onClick={() => handleItemClick("")}>
        <Image src={Logo} centered />
      </Link>
      <Menu
        style={{ borderBottom: "none" }}
        pointing
        secondary
        fluid
        widths={12}
      >
        <Menu.Item
          as={Link}
          to="/about"
          name="About"
          active={activeItem === "about"}
          onClick={() => handleItemClick("about")}
        />
        <Menu.Item
          name="Edit"
          active={activeItem === "Account"}
          onClick={() => handleItemClick("Account")}
        />
        <Dropdown
          text="Poltics 101"
          pointing
          className="link item"
          active={activeItem === "basics"}
        >
          <Dropdown.Menu>
            <Dropdown.Item
              as={Link}
              to="/basics"
              name="101"
              onClick={() => handleItemClick("basics")}
            >
              item 1
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
