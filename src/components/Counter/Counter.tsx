import Button from "components/Button/Button";

import { CounterWrapper, ButtonControl, StyledCount } from "./styles";

import { CounterProps } from "./types";

function Counter({ count, onPlus, onMinus }: CounterProps) {
  return (
    <CounterWrapper>
      <ButtonControl>
        <Button name="-" onClick={onMinus} />
      </ButtonControl>
      <StyledCount>{count}</StyledCount>
      <ButtonControl>
        <Button name="+" onClick={onPlus} />
      </ButtonControl>
      {/* Пример работы со стейтом */}
      {/* <button onClick={addAnimal}>Set Animal</button>
      <button onClick={changeUserName}>Change user name</button> */}
    </CounterWrapper>
  );
}

export default Counter;
