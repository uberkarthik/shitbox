import { MouseEventHandler } from "react";

//Types for how interface should look like
export interface CustomButtonProps{
  title: string;
  containerStyles?: string;
  //Question
  handleClick?:
  MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}
export interface SearchManufacturerProps{
  manufacturer: string;
  //Takes in manufactuer as string. Does nothing.
  setManufacturer: (manufacturer: string) => void;
}