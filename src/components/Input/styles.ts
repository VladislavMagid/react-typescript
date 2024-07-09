import styled from "@emotion/styled";
import { error } from "console";

interface StyledInputProps {
  $error: string | undefined;
}

export const InputWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InputLabel = styled("label")`
  font-size: 16px;
  color: hsl(0, 0%, 44%);
`;

const getInputColor = (disabled: boolean | undefined) => {
  if (disabled) {
    return "grey";
  }
};

const getInputBorderColor = (error: string | undefined) => {
  if (error === "Some error") {
    return "red";
  }
};

export const InputComponent = styled("input")<StyledInputProps>`
  width: 100%;
  height: 50px;
  border: 1px solid ${({$error}) => getInputBorderColor($error)};
  border-radius: 4px;
  padding: 12px;
  outline: none;
  background-color: ${({ disabled }) => getInputColor(disabled)};
  cursor: ${({disabled}) => disabled ? "not-allowed" : "auto"};
`;

// export const InputComponent::placeholder = styled ("input::placeholder")`
// color: #6F6F6F;
// font-size: 16px;
// `
// .input-component::placeholder {

// }
