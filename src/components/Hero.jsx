import { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { Container } from "../App";
import MouseIcon from "./icons/MouseIcon";

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
            <Header1 className="content">
              I will create <span className="blue">any automation </span> that
              will <span className="blue">save your time and improve</span> the
              quality of your bussiness operation
            </Header1>
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
