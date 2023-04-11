import Box from "../../components/Box";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import H1 from "../../components/Typhograpy/H1";
import * as S from "./styles";

export const SignUp = () => {
  return (
    <S.Container>
      <Box>
        <H1>Welcome to CodeLeap network!</H1>

        <Input label="Please enter your username" placeholder="Jhon Doe" />

        <S.Section>
          <Button title="ENTER" />
        </S.Section>
      </Box>
    </S.Container>
  );
};
