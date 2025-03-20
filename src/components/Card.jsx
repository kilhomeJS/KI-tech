import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const CardE = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: #f7f7f7;
  width: 612px;
  height: 100%;
  height: ${({ height }) => (height ? "716px" : "538px")};
  border-radius: 15px;

  @media (max-width: 425px) {
    width: 100%;
    height: 395px;
  }
`;

const CardInfo = styled.div`
  position: absolute;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 1px;
  }

  ${({ showInfo }) =>
    showInfo
      ? css`
          height: ${({ imgHeight }) => imgHeight && `${imgHeight}px`};
          border-radius: 15px 15px 0 0;
          padding: 25px;
          background: #000000a7;

          p {
            font-size: 16px;
            color: #fff;
            opacity: 1;
            letter-spacing:0.6px
            line-height: 20px;
          }
        `
      : css`
          height: 0;
        `}
`;

const CardTitle = styled.div`
  mix-blend-mode: 4px;
  font-size: 18px;
  letter-spacing: 0.6px;
`;

const CardText = styled.div`
  color: #757575;
  letter-spacing: 0.6px;
`;

const ContentWrapper = styled.div`
  overflow: hidden;
  padding: 24px;

  @media (max-width: 425px) {
    min-height: 78px;
  }
`;

const Img = styled.img`
  height: ${({ height }) => (height ? "616px" : "434px")};
  border-radius: 15px 15px 0 0;

  @media (max-width: 425px) {
    width: 100%;
    text-align: center;
  }
`;

const Card = ({ imgPath, title, text, height, direction }) => {
  const [imgHeight, setImgHeight] = useState(0);
  const [showInfo, setShowInfo] = useState(false);

  const imageHeight = useRef(null);

  useEffect(() => {
    const img = imageHeight.current.children[0].clientHeight;
    setImgHeight(img);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <CardE
        height={height}
        ref={imageHeight}
        onMouseEnter={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
      >
        <Img src={imgPath} alt="" height={height} />
        <ContentWrapper>
          <CardTitle>{title}</CardTitle>
          <CardText>{text}</CardText>
        </ContentWrapper>

        <CardInfo imgHeight={imgHeight} showInfo={showInfo}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Necessitatibus alias vel nulla beatae, corrupti odit id ratione hic
            odio. Laborum enim nemo ratione provident aut! Inventore expedita,
            voluptatum voluptate esse tenetur provident commodi at voluptatem
            ipsa ab consequuntur repellat adipisci ratione recusandae amet
            quidem corporis praesentium dignissimos ea. Aspernatur eum, ea omnis
            beatae assumenda commodi alias amet voluptatibus consequuntur
            possimus excepturi quis id saepe soluta iure obcaecati unde eos
            doloremque aut veniam? Laboriosam nihil veritatis cumque accusamus
            reprehenderit. Asperiores magnam, nobis quibusdam ratione ipsa nam
            maiores, a commodi
          </p>
        </CardInfo>
      </CardE>
    </motion.div>
  );
};

export default Card;
