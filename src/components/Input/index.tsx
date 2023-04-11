import * as S from "./styles";

type InputProps = {
  label: string;
  placeholder: string;
};

export const Input = ({ label, placeholder }: InputProps) => {
  return (
    <S.Input>
      <label>{label}</label>
      <input type="text" placeholder={placeholder} />
    </S.Input>
  );
};
