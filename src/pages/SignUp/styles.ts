import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
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

export const Section = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 16px;
`;
