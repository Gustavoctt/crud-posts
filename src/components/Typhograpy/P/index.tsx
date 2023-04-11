import styled, { css } from "styled-components";

type PProps = {
  color?: string;
  weigth?: "regular" | "bold";
};

const P = styled.p<PProps>`
  ${({ color = "#000000", weigth }) => css`
    font-weight: ${weigth == "bold" ? 700 : 400};
    font-size: 18px;
    line-height: 21px;
    color: ${color};
  `}
`;

export default P;
