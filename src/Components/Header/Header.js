import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../LOGO-whole-story.png";
import { Image, Menu } from "semantic-ui-react";

function Header() {
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = active => {
    setActiveItem(active);
  };
  return (
    <React.Fragment>
      <Link to={`/`} className="text">
        <Image src={Logo} centered />{" "}
      </Link>
      <Menu pointing secondary fluid widths={6}>
        <Menu.Item
          as={Link}
          to="/about"
          name="About"
          active={activeItem === "about"}
          onClick={() => handleItemClick("about")}
        />
        <Menu.Item
          as={Link}
          to="/basics"
          name="101"
          active={activeItem === "basics"}
          onClick={() => handleItemClick("basics")}
        />
        <Menu.Item
          name="Contact Us"
          active={activeItem === "Contact"}
          onClick={() => handleItemClick("Contact")}
        />
      </Menu>
    </React.Fragment>
  );
}

export default Header;
