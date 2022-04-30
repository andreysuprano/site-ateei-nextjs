import React from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
const NavLinks = () => {
  const handleDropdownStatus = (e) => {
    let clickedItem = e.currentTarget.parentNode;
    clickedItem.querySelector(".dropdown-list").classList.toggle("show");
  };
  return (
    <ul className="main-menu__list one-page-scroll-menu">
      <li>
      <ScrollLink
          activeClass="current"
          to="#"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Home
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Quem Somos
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="services"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Serviços
        </ScrollLink>
      </li>
      <li>
      <Link href="/representantes">
              <a>Representantes</a>
            </Link>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Contato
        </ScrollLink>
      </li>
      <li>
        <a href="https://www.ateei.com.br/downloads/">Downloads</a>
      </li>
      {/* <li className="dropdown">
        <ScrollLink
          activeClass="current"
          to="blog"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Blog
        </ScrollLink>
        <button className="dropdown-btn" onClick={handleDropdownStatus}>
          <i className="fa fa-angle-right"></i>
        </button>
        <ul className="dropdown-list">
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/blog-details">
              <a>Blog Details</a>
            </Link>
          </li>
        </ul>
      </li> */}
      {/* <li className="search-btn search-opener">
        <a href="#">
          <i className="fa fa-search"></i>
        </a>
      </li> */}
    </ul>
  );
};

export default NavLinks;
