import styled from "styled-components";
import bg from "../assets/img/BG.png";
import { motion } from "framer-motion";

const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 150px 0;
`;

const Content = styled.div`
  width: 100%;
  font-size: 28px;

  @media (max-width: 768px) {
    &.about {
      width: 100%;
    }
  }

  p {
    margin-bottom: 32px;
  }

  &.about-contetnt {
    overflow: hidden;
  }

  &.about {
    ul {
      padding-bottom: 50px;
      margin-bottom: 50px;
      border-bottom: 1px solid #f0f0f0;
    }

    ul:last-child {
      border-bottom: none;
    }

    li:nth-child(1) {
      margin-bottom: 4px;
      font-size: 18px;
    }
    li:nth-child(2) {
      margin-bottom: 16px;
      font-size: 17px;
      color: #525252;
    }
    li:nth-child(3) {
      font-size: 19px;
      color: #757575;
    }
  }

  &.exp {
    width: 100%;
  }
`;

const Header2 = styled.h2`
  width: 50%;
  font-size: 30px;
  font-weight: 400;

  @media (max-width: 768px) {
    & {
      margin-bottom: 10px;
      width: 100%;
      text-align: center;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  padding: 130px 0;

  li {
    list-style: none;
  }

  & .flex {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  &.exp-wrap {
    gap: 130px;
  }

  &.about {
    overflow-x: hidden;
  }
  img {
    width: 100%;
  }

  @media (max-width: 768px) {
    & {
      flex-direction: column;
    }
    & li {
      text-align: center;
    }
    &.about {
      div {
        width: 100%;
        text-align: justify;
      }
    }
  }
`;

const ContentWrapper = styled.div`
  width: 100%;

  h2 {
    margin-bottom: 63px;
    font-size: 30px;
  }

  li {
    width: 100%;
    margin-bottom: 25px;
    padding-bottom: 25px;
    font-size: 18px;
    border-bottom: 1px solid #f0f0f0;

    &.exp-wrap__last {
      border-bottom: 0;
      margin-bottom: 0;
      padding-bottom: 0;
    }
  }
`;
const About = () => {
  return (
    <AboutSection id="about">
      <Wrapper className="about">
        <Header2>About me</Header2>
        <Content className="about-contetnt">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Phasellus accumsan rutrum lacus eget pulvinar. Fusce ac ipsum non
            nulla mollis molestie eu fringilla lacus. Vivamus eget ligula
            malesuada, rutrum nulla id, ultricies sem. In aliquam condimentum
            velit, ac rutrum felis ultrices in.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Phasellus accumsan rutrum lacus eget pulvinar. Fusce ac ipsum non
            nulla mollis molestie eu fringilla lacus. Vivamus eget ligula
            malesuada, rutrum nulla id, ultricies sem. In aliquam condimentum
            velit, ac rutrum felis ultrices in.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Phasellus accumsan rutrum lacus eget pulvinar. Fusce ac ipsum non
            nulla mollis molestie eu fringilla lacus. Vivamus eget ligula
            malesuada, rutrum nulla id, ultricies sem. In aliquam condimentum
            velit, ac rutrum felis ultrices in.
          </motion.p>
        </Content>
      </Wrapper>
      <Wrapper>
        <img src={bg} alt="" />
      </Wrapper>
      <Wrapper>
        <Header2>Experience</Header2>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          style={{width: "100%"}}
        >
          <Content className="about">
            <ul>
              <li>Company name</li>
              <li>Job title</li>
              <li>August 2021–today</li>
            </ul>
            <ul>
              <li>Company name</li>
              <li>Job title</li>
              <li>August 2021–today</li>
            </ul>
            <ul>
              <li>Company name</li>
              <li>Job title</li>
              <li>August 2021–today</li>
            </ul>
          </Content>
        </motion.div>
      </Wrapper>

      <Wrapper className="exp-wrap">
        <ContentWrapper>
          <Header2>Services</Header2>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Content className="exp">
              <ul>
                <li>Design systems</li>
                <li>Product design</li>
                <li>August 2021–today</li>
                <li>UX design and research</li>
                <li>Design strategy</li>
                <li className="exp-wrap__last">
                  Websites and mobile app design
                </li>
              </ul>
            </Content>
          </motion.div>
        </ContentWrapper>
        <ContentWrapper>
          <Header2>Selected clients</Header2>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Content className="exp">
              <ul>
                <li>Veja</li>
                <li>Polestar</li>
                <li>Allbirds</li>
                <li>Company name</li>
                <li>Oatly</li>
                <li className="exp-wrap__last">Bang & Olufsen</li>
              </ul>
            </Content>
          </motion.div>
        </ContentWrapper>
      </Wrapper>
    </AboutSection>
  );
};

export default About;
