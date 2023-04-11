import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const FormUsername = styled.div`
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
`;

export const Section = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 16px;
`;
