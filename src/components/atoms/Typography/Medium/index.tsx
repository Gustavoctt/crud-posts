import styled from "styled-components";

type LargeProps = {
  color: string;
  bold?: boolean;
};

const Medium = styled.p<LargeProps>`
  font-size: 16px;
  line-height: 130%;
  font-family: "Roboto", sans-serif;
  color: ${({ color }) => color};
  font-weight: ${({ bold }) => 700}; ;
`;

export default Medium;
