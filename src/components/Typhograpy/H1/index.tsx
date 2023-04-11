import styled, { css } from "styled-components";

type H1Props = {
  color?: string;
};

const H1 = styled.h1<H1Props>`
  ${({ color = "#000000" }) => css`
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    color: ${color};
  `}
`;

export default H1;
