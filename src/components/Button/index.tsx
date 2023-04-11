import * as S from "./styles";

type ButtonProps = {
  title: string;
  textColor?: string;
  backgroundColor?: string;
  openModal?: boolean | undefined;
  setIsActive?: (openModal: boolean) => void;
};

export const Button = ({
  title,
  textColor,
  backgroundColor,
  openModal,
  setIsActive,
}: ButtonProps) => {
  return (
    <S.Button
      textColor={textColor}
      backgroundColor={backgroundColor}
      onClick={() => setIsActive && setIsActive(!openModal)}
    >
      {title}
    </S.Button>
  );
};
