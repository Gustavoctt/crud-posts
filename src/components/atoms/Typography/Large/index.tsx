import styled from "styled-components";

type LargeProps = {
  color: string;
  bold?: boolean;
};

const Large = styled.h6<LargeProps>`
  font-size: 20px;
  line-height: 130%;
  font-family: "Roboto", sans-serif;
  color: ${({ color }) => color};
  font-weight: ${({ bold }) => 700}; ;
`;

export default Large;
