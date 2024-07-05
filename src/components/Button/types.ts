import { MouseEvent } from "react";
export type ButtonType = "button" | "submit" | "reset" | undefined;

export interface ButtonProps {
  imgSrc?: undefined | string;
  type?: ButtonType;
  name: string;
  onClick: (event: MouseEvent) => void;
}
