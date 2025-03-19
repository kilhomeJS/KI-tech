import { useEffect, useRef } from "react";
import styled from "styled-components";
import { Container } from "../App";

const HeaderElem = styled.header`
  padding: 25px 0;
`;

const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 26px;

  @media (max-width: 768px) {
    & {
      justify-content: center;
    }
  }
`;

const Li = styled.li`
  font-size: 18px;
  list-style: none;
  color: #525252;
  cursor: pointer;

  &:hover {
    color: #161616;
  }
`;

const Header = () => {
  const scrollToSection = (section) => {
    const targetElement = document.getElementById(section);
    window.scrollTo({
      top: targetElement.offsetTop,

      behavior: "smooth",
    });
  };

  return (
    <Container>
      <HeaderElem id="home">
        <nav>
          <List>
            <Li className="dark-text" onClick={() => scrollToSection("works")}>
              Work
            </Li>
            <Li className="dark-text" onClick={() => scrollToSection("about")}>
              About
            </Li>
            <Li
              className="dark-text"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </Li>
          </List>
        </nav>
      </HeaderElem>
    </Container>
  );
};

export default Header;
