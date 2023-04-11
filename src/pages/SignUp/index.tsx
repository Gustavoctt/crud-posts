import { useState } from "react";

import Box from "../../components/Box";
import H1 from "../../components/Typhograpy/H1";

import * as S from "./styles";
import InputBase from "../../components/InputBase";
import ButtonBase from "../../components/ButtonBase";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  function handleSubmitUsername() {
    localStorage.setItem("username", JSON.stringify({ username }));
    navigate("/posts");
  }

  return (
    <S.Container>
      <Box>
        <H1>Welcome to CodeLeap network!</H1>

        <S.FormUsername>
          <label>Please enter your username</label>
          <InputBase
            placeholder="Jhon doe"
            onChange={(e) => setUsername(e.target.value)}
          />
        </S.FormUsername>

        <S.Section>
          <ButtonBase
            type="button"
            disabled={username.length < 1}
            onClick={handleSubmitUsername}
          >
            ENTER
          </ButtonBase>
        </S.Section>
      </Box>
    </S.Container>
  );
};
