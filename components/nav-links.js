import React from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { useRouter } from 'next/router';

const NavLinks = (page) => {
  const handleDropdownStatus = (e) => {
    let clickedItem = e.currentTarget.parentNode;
    clickedItem.querySelector(".dropdown-list").classList.toggle("show");
  };

  const router = useRouter()
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
          onClick={()=>{page === 'rep' ? '#' : router.push('/')}}
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
          onClick={()=>{page === 'rep' ? '#' : router.push('/')}}
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
          onClick={()=>{page === 'rep' ? '#' : router.push('/')}}
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
          onClick={()=>{page === 'rep' ? '#' : router.push('/')}}
        >
          Contato
        </ScrollLink>
      </li>
      <li>
        <a href="https://downloads.ateei.com.br/downloads/">Downloads</a>
      </li>
    </ul>
  );
};

export default NavLinks;
