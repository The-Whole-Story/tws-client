import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../LOGO-whole-story.png";
import { Image, Menu, Dropdown } from "semantic-ui-react";

function Header() {
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = active => {
    setActiveItem(active);
  };
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
          name="Menu 1"
          active={activeItem === "Contact"}
          onClick={() => handleItemClick("Contact")}
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
    </React.Fragment>
  );
}

export default Header;
