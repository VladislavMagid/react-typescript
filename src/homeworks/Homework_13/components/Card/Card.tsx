import Message from "homeworks/Homework_13/components/Message/Message";

import { CardWrapper, NameStyled } from "./styles";

function Card() {
  return (
    <CardWrapper>
      <NameStyled>Vladislav Magid</NameStyled>
      <Message />
    </CardWrapper>
  );
}

export default Card;
