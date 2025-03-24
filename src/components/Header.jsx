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
  box-shadow: 0 0 20px 5px rgba(255, 255, 255, 0.15);
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  width: 80px;
  height: 40px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
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
        <LogoContainer>
          <Logo>
            <img 
              src={img3} 
              alt="KI Tech Logo" 
            />
          </Logo>
        </LogoContainer>
        <Nav>
          <List>
            <Li onClick={() => scrollToSection("blog")}>Work</Li>
            <Li onClick={() => scrollToSection("cases")}>About</Li>
            <Li onClick={() => scrollToSection("tutorials")}>Contact</Li>
          </List>
        </Nav>
        
        <GetStartedButton>Get Started</GetStartedButton>
      </HeaderContent>
    </HeaderElem>
  );
};

export default Header;