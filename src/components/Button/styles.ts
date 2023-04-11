import styled, { css } from "styled-components";

type IButton = {
  textColor?: string;
  backgroundColor?: string;
};

export const Button = styled.button<IButton>`
  ${({ textColor = "#fff", backgroundColor = "#7695ec" }) => css`
    padding: 6px 30px;
    border: none;
    color: ${textColor};
    background: ${backgroundColor};
    border: 1px solid ${textColor};
    border-radius: 8px;
    cursor: pointer;
  `}
`;
