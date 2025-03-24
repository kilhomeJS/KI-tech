import { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { Container } from "../App";
import MouseIcon from "./icons/MouseIcon";
import React from 'react';

const gradient = keyframes`
  0% {
    background-position: 0% 25%;
    box-shadow: 0px 0px 20px rgba(255, 0, 128, 0.2), 0px 0px 40px rgba(128, 0, 255, 0.2);
  }
  25% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 100% 50%;
     box-shadow: 0px 0px 40px rgba(255, 0, 128, 0.5), 0px 0px 80px rgba(128, 0, 255, 0.5);
  }
  75% {
    background-position: 50% 100%;
  }
  100% {
    background-position: 0% 25%;
    box-shadow: 0px 0px 20px rgba(255, 0, 128, 0.2), 0px 0px 40px rgba(128, 0, 255, 0.2);
  }
`;

const GradientText = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(45deg, #ffffff, rgba(255, 255, 255, 0.7));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  mix-blend-mode: lighten;
`;

const glowAnimation = keyframes`
  0% {
    box-shadow: 0px 0px 50px rgba(255, 0, 128, 0.4), 0px 0px 100px rgba(128, 0, 255, 0.4);
  }
  50% {
    box-shadow: 0px 0px 70px rgba(255, 0, 128, 0.7), 0px 0px 120px rgba(128, 0, 255, 0.7);
  }
  100% {
    box-shadow: 0px 0px 50px rgba(255, 0, 128, 0.4), 0px 0px 100px rgba(128, 0, 255, 0.4);
  }
`;

const HeroContainer = styled.div`
  position: relative;
  padding: 50px;
  border-radius: 20px;
  background: linear-gradient(45deg, #ff0080, #8000ff);
  animation: ${glowAnimation} 3s infinite alternate;
`;

const GradientBackground = styled.div`
  position: relative;
  width: 90%;
  max-width: 1200px;
  height: 65vh;
  border-radius: 30px;
  margin: 30px auto;
  overflow: hidden;
  background: linear-gradient(
    -45deg, 
    #ee7752, 
    #e73c7e, 
    #9c27b0, 
    #23a6d5, 
    #23d5ab, 
    #8bc34a
  );
  background-size: 300% 300%;
  animation: ${gradient} 20s ease infinite;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  z-index: 2;
`;

const Headline = styled.div`
  font-size: 5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
  line-height: 1.1;
  text-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

const Highlight = styled.span`
  color: #673ab7;
`;

const Tagline = styled.div`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
`;

const ActionButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: center;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const LightButton = styled(Button)`
  background-color: white;
  color: #333;
`;

const DarkButton = styled(Button)`
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
`;


const HeroContaier = styled.div`
  position: relative;
  height: 100vh;
  padding: 128px 0;
  overflow: hidden;
  z-index: 2;

  @media (max-width: 425px) {
    padding: 148px 0px;
  }
`;

const scrollAnimation = keyframes`
  0%{
    transform: translateY(0);
  }
  50%{
    transform: translateY(5px);
  }
  0%{
    transform: translateY(0);
  }
`;

const Header1 = styled.h1`
  width: 80%;
  font-size: 64px;
  font-family: "Noto Sans Mono", monospace;
  font-weight: 400;

  span.blue {
    font-family: "Noto Sans Mono", monospace;
    font-weight: 400;
    color: #2893eb;
  }

  span {
    color: #757575;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    width: 100%;
  }
`;

const ParalaxContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ParalaxObj = styled.div`
  position: absolute;
  transition: transform 0.1s linear;

  &.f {
    bottom: 0;
    width: 100%;
    height: 200px;
    background: beige;
    filter: blur(25px);
  }
  &.s {
    left: 10%;
    top: 10%;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 0, 150, 0.8), transparent);
    filter: blur(25px);
  }
  &.t {
    right: 30%;
    bottom: 10%;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 150, 255, 0.8), transparent);
    filter: blur(25px);
  }
  &.f {
    right: 0%;
    top: 10%;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(13, 219, 24, 0.8), transparent);
    filter: blur(25px);
  }

  @media (max-width: 768px) {
    &.f {
      display: none;
    }
    &.s {
      top: 10%;
      left: 0;
    }
    &.t {
      right: 0;
    }
  }
  @media (max-width: 768px) {
    &.t {
      display: none;
      right: 0;
    }
  }
`;

const IconContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  padding: 130px 0;
  cursor: pointer;

  & svg {
    opacity: 0.5;
    transition: 0.3s;
    animation: ${scrollAnimation} 1s linear;
    animation-iteration-count: infinite;
  }
  & svg:hover {
    transform: translateY(5px);
    opacity: 1;
    transition: 0.3s;
    animation: none;
  }
`;

const Hero = () => {
  const parallaxRefs = useRef([]);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const targetX = useRef(0);
  const targetY = useRef(0);
  const scrollY = useRef(0);

  useEffect(() => {
    const handleParallax = () => {
      scrollY.current = window.scrollY;

      parallaxRefs.current.forEach((el) => {
        if (!el) return;
        const speed = parseFloat(el.dataset.speed) || 1;
        const scrollOffset = scrollY.current * speed * 0.2;

        el.style.transform = `translateY(${scrollOffset}px)`;
      });
    };

    const handleMouseMove = (event) => {
      targetX.current = (event.clientX - window.innerWidth / 2) * 0.02;
      targetY.current = (event.clientY - window.innerHeight / 2) * 0.02;
    };

    const update = () => {
      mouseX.current += (targetX.current - mouseX.current) * 0.1;
      mouseY.current += (targetY.current - mouseY.current) * 0.1;

      parallaxRefs.current.forEach((el) => {
        if (!el) return;
        const speed = parseFloat(el.dataset.speed) || 1;

        const x = mouseX.current * speed;
        const y = mouseY.current * speed - scrollY.current * speed * 0.2; // Добавил scrollY

        el.style.transform = `translate(${x}px, ${y}px)`;
      });

      requestAnimationFrame(update);
    };

    window.addEventListener("scroll", handleParallax);
    window.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(update);

    return () => {
      window.removeEventListener("scroll", handleParallax);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (section) => {
    const targetElement = document.getElementById(section);
    window.scrollTo({
      top: targetElement.offsetTop,

      behavior: "smooth",
    });
  };

  return (
    <>
      <ParalaxContainer>
        <ParalaxObj
          className="s"
          data-speed="4"
          ref={(el) => (parallaxRefs.current[0] = el)}
        />
        <ParalaxObj
          className="t"
          data-speed="2"
          ref={(el) => (parallaxRefs.current[1] = el)}
        />
        <ParalaxObj
          className="f"
          data-speed="2"
          ref={(el) => (parallaxRefs.current[2] = el)}
        />
        <HeroContaier>
          <Container>
          <GradientBackground>
      <ContentWrapper>
      <Headline>
        We <GradientText>will</GradientText> create<br/>
        any automation<br/>
        for <GradientText>you</GradientText><br/>
        </Headline>
        <Tagline>
          That <GradientText>save your time and improve</GradientText> the quality of your bussiness operation<br/>
          Ki-Tech
          </Tagline>
        <ActionButtons>
          <LightButton>Get your AI implementation plan in 24h</LightButton>
          <DarkButton>Schedule Your AI Readiness Assessment</DarkButton>
        </ActionButtons>
      </ContentWrapper>
    </GradientBackground>
            <IconContainerCenter>
              <MouseIcon
                height={40}
                width={40}
                click={() => scrollToSection("works")}
              />
            </IconContainerCenter>
          </Container>
        </HeroContaier>
      </ParalaxContainer>
    </>
  );
};

export default Hero;
