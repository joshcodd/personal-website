import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const MobileMenuContainer = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: inline-block;
    left: ${(props) => (props.isVisible ? "0vw" : "60vw")};
    position: fixed;
    background-color: #efefef;
    height: 100vh;
    width: 60vw;
    z-index: 100;
    margin-left: 40vw;
    transition: all 0.5s ease-in-out;
  }
`;

const NavList = styled.ul`
  list-style-type: none;
  text-align: right;
  margin-top: 20vh;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 12px 20px;
  font-size: 30px;
`;

const Anchor = styled.a`
  font-size: 25px;
  font-family: "Nunito", sans-serif;
  font-weight: 100;
`;

function SideBarMenu(props) {
  const isVisible = props.visible;

  function handleClick(value) {
    if (value.length > 0) {
      window.open(value);
    }

    props.setMobileMenu(false);
  }

  return (
    <MobileMenuContainer isVisible={isVisible}>
      <NavList>
        <NavItem onClick={handleClick}>
          <Link href="/#">
            <Anchor>HOME</Anchor>
          </Link>
        </NavItem>

        <NavItem onClick={handleClick}>
          <Link href="/#about">
            <Anchor>ABOUT</Anchor>
          </Link>
        </NavItem>

        <NavItem onClick={handleClick}>
          <Link href="/#projects">
            <Anchor>PROJECTS</Anchor>
          </Link>
        </NavItem>

        <NavItem onClick={() => handleClick("CV.pdf")}>
          <Anchor>CV</Anchor>
        </NavItem>

        <NavItem onClick={() => handleClick("https://github.com/joshcodd")}>
          <FontAwesomeIcon icon={faGithub} />
        </NavItem>

        <NavItem
          onClick={() => handleClick("https://www.linkedin.com/in/joshcodd/")}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </NavItem>
      </NavList>
    </MobileMenuContainer>
  );
}

export default SideBarMenu;
