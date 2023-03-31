import styled from "styled-components";

type LargeProps = {
  color: string;
};

const TitleS = styled.h4<LargeProps>`
  font-size: 20px;
  line-height: 130%;
  font-family: "Baloo 2", cursive;
  color: ${({ color }) => color};
`;

export default TitleS;
