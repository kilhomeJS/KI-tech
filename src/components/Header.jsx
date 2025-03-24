import { useEffect, useRef } from "react";
import styled from "styled-components";
import { Container } from "../App";

const HeaderElem = styled.header`
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  border-radius: 15px;
  margin: 1rem auto;
  max-width: 1024px;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Logo = styled.div`
  font-family: 'Krona One', sans-serif;
  color: white;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 1.2rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  flex: 1;
  margin: 0 2rem;
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const Li = styled.li`
  font-size: 1rem;
  list-style: none;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: var(--accent-color);
  }
`;

const GetStartedButton = styled.button`
  background-color: white;
  color: black;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Header = () => {
  const scrollToSection = (section) => {
    const targetElement = document.getElementById(section);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <HeaderElem id="home">
      <HeaderContent>
        <Logo>VALUE ADDED TECH</Logo>
        
        <Nav>
          <List>
            <Li onClick={() => scrollToSection("blog")}>Blog</Li>
            <Li onClick={() => scrollToSection("cases")}>Cases</Li>
            <Li onClick={() => scrollToSection("tutorials")}>Tutorials</Li>
          </List>
        </Nav>
        
        <GetStartedButton>Get Started</GetStartedButton>
      </HeaderContent>
    </HeaderElem>
  );
};

export default Header;