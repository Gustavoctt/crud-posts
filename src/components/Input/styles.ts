import styled from "styled-components";

export const Input = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 24px;

  label {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }

  input {
    padding: 8px 12px;
    border: 1px solid #777777;
    background: #fff;
    border-radius: 8px;
  }
`;
