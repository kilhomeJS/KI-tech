import generalStore from "../store/store";
import styled from "styled-components";
import { useEffect } from "react";

const SwitchButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 999;
  background-color: ${({ theme }) => theme === "dark" ? "var(--dark-card-bg)" : "var(--card-bg)"};
  border: 1px solid ${({ theme }) => theme === "dark" ? "var(--dark-border-color)" : "var(--border-color)"};
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme === "dark" ? "var(--dark-shadow)" : "var(--shadow)"};
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    top: 13px;
  }
  @media (max-width: 425px) {
    top: 20px;
    width: 35px;
    height: 35px;

    img {
      width: 15px;
      height: 15px;
    }
  }
`;

const ThemeSwitcher = () => {
  const { theme, switchTheme } = generalStore();

  useEffect(() => {
    // Apply the theme from store on component mount
    if (theme === "dark") {
      document.body.removeAttribute('data-theme');
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  }, [theme]);

  const changeTheme = () => {
    if (theme === "dark") {
      switchTheme("light");
      document.body.setAttribute('data-theme', 'light');
    } else {
      switchTheme("dark");
      document.body.removeAttribute('data-theme');
    }
  };

  return (
    <SwitchButton className="theme-switch" onClick={changeTheme} theme={theme}>
      {theme === "light" ? "🌙" : "☀️"}
    </SwitchButton>
  );
};

export default ThemeSwitcher;
