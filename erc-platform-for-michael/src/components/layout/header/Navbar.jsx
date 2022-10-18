import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
const menuItems = [
  {
    title: "How It Works",
    link: "howItWorks",
    cName: "nav-links",
  },
  {
    title: "About ERC",
    link: "aboutERC",
    cName: "nav-links",
  },
  {
    title: "Why Us",
    link: "whyUs",
    cName: "nav-links",
  },
  {
    title: "Testimonials",
    link: "testimonials",
    cName: "nav-links",
  },
];

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  // const navigate = useNavigate();

  const scrollTarget = (target) => {
    scroller.scrollTo(target, { smooth: true, duration: 700 });
  };

  const scrollToPage = async (e, target) => {
    e.preventDefault();

    scrollTarget(target);
  };

  return (
    <nav className="navbar">
      <a className="navbar-brand" href="/">
        <img className="logo" src="./assets/images/logo.png" alt="Logo" />
        <i className="mobile-navbar-logo">
          <img src="./assets/images/logo.png" alt="Logo" />
        </i>
      </a>
      <div className="menu-icon" onClick={handleClick}>
        <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={active ? "nav-menu active" : "nav-menu"}>
        {menuItems.map((item, index) => {
          return (
            <li key={index} className="md:h-full w-full md:w-auto">
              <a
                className={item.cName}
                href={`#${item.link}`}
                onClick={(e) => scrollToPage(e, item.link)}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
