import { useEffect, useRef } from "react";
import styled from "styled-components";
import { Container } from "../App";

const HeroContaier = styled.div`
  position: relative;
  height: 100vh;
  padding: 128px 0;
  overflow: hidden;
  z-index: 2;
`;

const Header1 = styled.h1`
  width: 50%;
  font-size: 64px;
  font-family: "Inter", sans-serif;
  font-weight: 400;

  span {
    display: flex;
    color: #757575;
  }

  @media (max-width: 1024px) {
    width: 75%;
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
        const y = mouseY.current * speed + scrollY.current * speed * 0.2;

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
          data-speed="3"
          ref={(el) => (parallaxRefs.current[1] = el)}
        />
        <ParalaxObj
          className="f"
          data-speed="4"
          ref={(el) => (parallaxRefs.current[2] = el)}
        />
        <HeroContaier>
          <Container>
            <Header1 className="content">
              I’m Jonas — a senior product designer
              <span>that cares a lot about positive impact projects</span>
            </Header1>
          </Container>
        </HeroContaier>
      </ParalaxContainer>
    </>
  );
};

export default Hero;
