import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 200px;
  height: 220px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconContainer = styled.div`
  font-size: 40px;
  margin-bottom: 10px;
`;

const Title = styled.h3`
  font-size: 18px;
  margin: 5px 0;
`;

const Description = styled.p`
  font-size: 14px;
  color: #6c757d;
`;

const ScenarioCard = ({ icon, title, description }) => {
  return (
    <CardContainer>
      <IconContainer>{icon}</IconContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardContainer>
  );
};

export default ScenarioCard;
