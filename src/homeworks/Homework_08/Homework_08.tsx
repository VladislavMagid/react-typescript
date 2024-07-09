import { MouseEvent } from "react";

import Input from "components/Input/Input";
import Button from "components/Button/Button";

import {StyledHomework_08} from "./styles"

function Homework_08() {
  const login = (event: MouseEvent): void => {
    event.preventDefault();
    console.log("User logged in succesfully");
  };
  return (
    <StyledHomework_08>
      <Input
        id="email-id"
        name="email"
        type="email"
        placeholder="Enter your email"
        label="Email"
      />
      <Input
        id="email-id"
        name="email"
        type="email"
        placeholder="Enter your email"
        label="Email"
        disabled={true}
      />
      <Input
        id="email-id"
        name="email"
        type="email"
        placeholder="Enter your email"
        label="Email"
        error="Some error"
      />
      <Button
        type="button"
        name="Send"
        onClick={login}
      />
      <Button
        type="button"
        name="Send"
        onClick={login}
        disabled={true}
      />
      <Button
        type="button"
        name="Send"
        onClick={login}
        isRed = {true}
      />
    </StyledHomework_08>
  );
}

export default Homework_08;
