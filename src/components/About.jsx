import styled from "styled-components";
import { motion } from "framer-motion";
import { Container } from "../App";

import Certificate from "./Certificate";
import ApisExp from "./ApisExp";

const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 150px 0;
`;

const Content = styled.div`
  width: 100%;
  font-size: 28px;
  overflow: hidden;

  p {
    margin-bottom: 32px;
  }

  &.about {
    overflow: hidden;
  }

  &.apis {
  }
`;

export const Header2 = styled.h2`
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

  li {
    list-style: none;
  }

  & .flex {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  & {
    overflow-x: hidden;
    margin-bottom: 200px;
  }

  @media (max-width: 768px) {
    & {
      flex-direction: column;
    }
    & li {
      text-align: center;
    }
    & {
      width: 100%;
      text-align: justify;
    }
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      {/* About me */}
      <Container>
        <Wrapper>
          <Header2>About me</Header2>
          <Content>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              My journey in this field began a few years ago when I worked as a
              C# developer and became fascinated with process optimization using
              Selenium.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              However, everything changed when I encountered a problem with a
              friend who was running a small online store. He was spending too
              much time manually setting up marketing funnels, newsletters, and
              analytics. That’s when I realized I could help him save time and
              make his business more efficient by creating automation solutions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              I started learning marketing automation tools like Zapier,
              Make.com, HubSpot, and others. With each new project, I honed my
              skills and discovered faster and more effective ways to solve
              problems. Since then, I have been working directly with various
              companies, helping them optimize their marketing processes,
              increase conversions, and reduce costs.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              Now, I’m expanding and looking for new clients to work with,
              because once everything that can be automated is taken care of,
              it’s time to find new opportunities.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              My goal is to help businesses focus on what matters most by
              leaving all the automation to me. I communicate effectively with
              clients, and I don’t need complex technical specifications: with
              my extensive experience, I can turn your ideas into reality
              without unnecessary details and delays.
            </motion.p>
          </Content>
        </Wrapper>
      </Container>

      {/* APIs worked */}
      <ApisExp />

      <Certificate />
    </AboutSection>
  );
};

export default About;
