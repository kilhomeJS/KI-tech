import styled from "styled-components";
import bg from "../assets/img/BG.png";
import { motion } from "framer-motion";
import { Container } from "../App";
import { useState } from "react";

const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 150px 0;
`;

const Content = styled.div`
  width: 100%;
  font-size: 28px;

  @media (max-width: 768px) {
    &.apis {
      width: 100%;
    }
  }

  p {
    margin-bottom: 32px;
  }

  &.about {
    overflow: hidden;
  }

  &.apis {
    display: flex;
    flex-direction: column;

    .apis-wrapper {
      display: flex;
      justify-content: space-around;
      margin-bottom: 40px;
      gap: 30px;
    }
    ul {
      padding-right: 10px;
      width: 30%;
      border-right: 1px solid #f0f0f0;
      text-align: left;
    }
    ul:last-child {
      padding-right: 0;
      border-right: none;
    }
    li {
      margin-bottom: 10px;
      font-size: 24px;
      color: #525252;
    }
  }

  @media (max-width: 768px) {
    &.apis {
      .apis-wrapper {
        flex-direction: column;
        align-items: center;
        width: 100%;

        ul {
          padding-right: 0;
          padding-bottom: 30px;
          width: 100%;
          border-right: none;
          border-bottom: 1px solid #f0f0f0;

          li {
            text-align: center;
          }
        }
      }
    }
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

const Button = styled.button`
  background: transparent;
  border: 2px solid #fff;
  color: #fff;
  font-size: 18px;
  padding: 12px 24px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 30px;
  transition: all 0.3s ease;
  outline: none;

  &:hover {
    background: #fff;
    transition: all 0.5s ease;
    color: #000;
  }
`;

const BackGround = styled.div`
  background: #353535;
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

  &.about {
    overflow-x: hidden;
    margin-bottom: 200px;
  }

  img {
    width: 100%;
  }

  &.apis {
    padding: 200px 0;
    color: #fff;

    h2 {
      margin-bottom: 40px;
    }

    li {
      color: #fff;
    }
  }

  @media (max-width: 768px) {
    & {
      flex-direction: column;
    }
    & li {
      text-align: center;
    }
    &.about {
      width: 100%;
      text-align: justify;
    }
  }
`;

const About = () => {
  const [page, setPage] = useState(0);

  const hendleClick = () => {
    if (page === 4) {
      return;
    }

    setPage((prev) => prev + 1);
  };

  return (
    <AboutSection id="about">
      {/* About me */}
      <Container>
        <Wrapper className="about">
          <Header2>About me</Header2>
          <Content className="about">
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
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ width: "100%" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <BackGround>
          <Container>
            <Wrapper className="apis">
              <Header2>APIs worked</Header2>

              <Content className="apis">
                <div className="apis-wrapper">
                  <ul>
                    <li>HubSpot API</li>
                    <li>ActiveCampaign</li>
                    <li>OPENAI API</li>
                    <li>Make.com API</li>
                    <li>Google Analytics</li>
                    <li>Salesforce API</li>
                    <li>MONDAY API</li>
                  </ul>
                  <ul>
                    <li>Facebook Marketing</li>
                    <li>GHL API</li>
                    <li>Airtable API</li>
                    <li>Asana API</li>
                    <li>Slack API</li>
                    <li>Zoom API</li>
                    <li>Intercom API</li>
                  </ul>
                  <ul>
                    <li>Twilio API</li>
                    <li>Shopify API</li>
                    <li>Stripe API</li>
                    <li>WooCommerce API</li>
                    <li>Google Sheets API</li>
                    <li>Trello API</li>
                    <li>ClickFunnels API</li>
                  </ul>
                </div>
                {page === 0 && <Button onClick={hendleClick}>Show more</Button>}

                {page >= 1 && (
                  <div className="apis-wrapper">
                    <ul>
                      <li>HubSpot API</li>
                      <li>ActiveCampaign</li>
                      <li>OPENAI API</li>
                      <li>Make.com API</li>
                      <li>Google Analytics</li>
                      <li>Salesforce API</li>
                      <li>MONDAY API</li>
                    </ul>
                    <ul>
                      <li>Facebook Marketing</li>
                      <li>GHL API</li>
                      <li>Airtable API</li>
                      <li>Asana API</li>
                      <li>Slack API</li>
                      <li>Zoom API</li>
                      <li>Intercom API</li>
                    </ul>
                    <ul>
                      <li>Twilio API</li>
                      <li>Shopify API</li>
                      <li>Stripe API</li>
                      <li>WooCommerce API</li>
                      <li>Google Sheets API</li>
                      <li>Trello API</li>
                      <li>ClickFunnels API</li>
                    </ul>
                  </div>
                )}
                {page === 1 && <Button onClick={hendleClick}>Show more</Button>}

                {page >= 2 && (
                  <div className="apis-wrapper">
                    <ul>
                      <li>Notion API</li>
                      <li>Klaviyo API</li>
                      <li>Zendesk API</li>
                      <li>Calendly API</li>
                      <li>GCF API</li>
                      <li>AWS Lambda API</li>
                      <li>SurveyMonkey API</li>
                    </ul>
                    <ul>
                      <li>Pipedrive API</li>
                      <li>Google Drive API</li>
                      <li>BigCommerce API</li>
                      <li>ClickUp API</li>
                      <li>Pandadoc API</li>
                      <li>Typeform API</li>
                      <li>Sage One API</li>
                    </ul>
                    <ul>
                      <li>QuickFile API</li>
                      <li>Github API</li>
                      <li>Stripe API</li>
                      <li>Slackbto API</li>
                      <li>Vimeo API</li>
                      <li>MP BI API</li>
                      <li>GitLab API</li>
                    </ul>
                  </div>
                )}
              </Content>
            </Wrapper>
          </Container>
        </BackGround>
      </motion.div>
    </AboutSection>
  );
};

export default About;
