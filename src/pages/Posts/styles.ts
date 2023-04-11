import styled from "styled-components";
import Box from "../../components/Box";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 800px;
  background-color: #fff;
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: 37px 27px;
  background: #7695ec;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

export const InputData = styled.div`
  display: flex;
  flex-direction: column;

  background: #ffffff;
  border: 1px solid #999999;
  border-radius: 16px;
  padding: 24px;
`;

export const Section = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 24px;
  gap: 16px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

export const UniquePost = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #999999;
  border-radius: 16px;
  margin-top: 24px;
`;

export const BoxHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background: #7695ec;
  border: 1px solid #7695ec;
  padding: 24px;
  border-radius: 16px 16px 0 0;

  div {
    display: flex;
    gap: 20px;

    button {
      background: none;
      border: none;
      svg {
        cursor: pointer;
      }
    }
  }
`;

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const Modal = styled.div`
  position: fixed;
  background-color: #777777cc;
  width: 100vw;
  height: 100vh;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxModal = styled(Box)`
  width: 600px;
  display: flex;
  height: fit-content;
  z-index: 100;
`;
