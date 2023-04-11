import styled, { css } from "styled-components";

type IButton = {
  textColor?: string;
  backgroundColor?: string;
};

const ButtonBase = styled.button<IButton>`
  ${({ textColor = "#fff", backgroundColor = "#7695ec" }) => css`
    padding: 6px 30px;
    border: none;
    color: ${textColor};
    background: ${backgroundColor};
    border: 1px solid ${textColor};
    border-radius: 8px;
    cursor: pointer;
    transition: filter 0.2s;

    :disabled {
      filter: opacity(0.8);
      cursor: not-allowed;
    }
  `}
`;

export default ButtonBase;
