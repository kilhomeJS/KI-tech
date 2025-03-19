import styled from "styled-components";

const ContactSection = styled.section`
  padding: 128px 0;
`;

const ContactE = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 128px 0;
  width: 100%;
  height: 100%;
  text-align: center;
  background: #ffebd8;
  border-radius: 15px;

  a {
    font-size: 37px;
    color: #000;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    & a {
      font-size: 16px;
    }
  }
`;

const Header2 = styled.h2`
  margin: 0 auto;
  margin-bottom: 60px;
  width: 50%;
  text-align: center;
  font-size: 57px;
  font-weight: 400;

  @media (max-width: 768px) {
    & {
      font-size: 24px;
    }
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ContactE>
        <Header2>Want to create something awesome? Drop me an email.</Header2>
        <a href="#">→ Hi@email.com</a>
      </ContactE>
    </ContactSection>
  );
};

export default Contact;
