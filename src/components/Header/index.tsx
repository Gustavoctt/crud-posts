import { LogoCoffee } from "../Icons/LogoCoffe";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";

import * as S from "./styles";
import Small from "../atoms/Typography/Small";

export function Header() {
  return (
    <S.ContainerHeader>
      <LogoCoffee />

      <S.HeaderButtons>
        <S.LocaleButton>
          <MapPin size={22} weight="fill" />
          <Small color="#4B2995">Porto Alegre, RS</Small>
        </S.LocaleButton>
        <S.ShoppingButton>
          <ShoppingCart size={22} weight="fill" />
        </S.ShoppingButton>
      </S.HeaderButtons>
    </S.ContainerHeader>
  );
}
