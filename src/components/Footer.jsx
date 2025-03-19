import styled from "styled-components";

const FooterE = styled.footer`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid #f0f0f0;

  ul {
    display: flex;
    justify-content: center;
    gap: 32px;
    margin-bottom: 65px;

    li {
      list-style: none;
    }
  }

  @media (max-width: 768px) {
    & {
      flex-direction: column;
    }
    ul {
      flex-direction: column;
      text-align: center;
    }
  }
`;

const Footer = () => {
  const scrollToSection = (section) => {
    const targetElement = document.getElementById(section);
    window.scrollTo({
      top: targetElement.offsetTop,

      behavior: "smooth",
    });
  };

  return (
    <FooterE>
      <ul>
        <li onClick={() => scrollToSection("home")}>Home</li>
        <li onClick={() => scrollToSection("works")}>Work</li>
        <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
      </ul>
      <ul>
        <li>Twitter</li>
        <li>Instagram</li>
        <li>LinkedIn</li>
      </ul>
    </FooterE>
  );
};

export default Footer;
