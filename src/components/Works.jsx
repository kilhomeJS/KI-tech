import styled from "styled-components";
import Card from "./Card";

import img1 from "../assets/img/IMAGE.jpg";
import img2 from "../assets/img/IMAGE-3.jpg";
import img3 from "../assets/img/IMAGE-1.jpg";
import img4 from "../assets/img/IMAGE-4.jpg";
import img5 from "../assets/img/IMAGE-2.jpg";
import img6 from "../assets/img/IMAGE-5.jpg";

const WorksSection = styled.div`
  padding: 150px 0;
`;

const WorksTitle = styled.p`
  margin-bottom: 31px;
  letter-spacing: 0.6px;

  span {
    color: #757575;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 1024px) {
    & {
      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    & {
      gap: 15px;
      justify-content: center;
    }
  }
`;

const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Works = () => {
  return (
    <WorksSection id="works">
      <WorksTitle>
        Featured work <span>· 2018–2022</span>
      </WorksTitle>
      <CardsContainer>
        <CardWrap>
          <Card
            height={true}
            imgPath={img1}
            title={"Rule ratio"}
            text={"Product design"}
            direction={"left"}
          />

          <Card
            imgPath={img3}
            title={"Rule ratio"}
            text={"Product design"}
            direction={"left"}
          />
          <Card
            imgPath={img2}
            title={"Rule ratio"}
            text={"Product design"}
            direction={"left"}
          />
        </CardWrap>
        <CardWrap>
          <Card
            imgPath={img5}
            title={"Rule ratio"}
            text={"Product design"}
            direction={"right"}
          />

          <Card
            imgPath={img4}
            title={"Rule ratio"}
            text={"Product design"}
            direction={"right"}
          />
          <Card
            imgPath={img6}
            title={"Rule ratio"}
            text={"Product design"}
            height={true}
            direction={"right"}
          />
        </CardWrap>
      </CardsContainer>
    </WorksSection>
  );
};

export default Works;
