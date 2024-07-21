import { MouseEventHandler } from "react";

//Types for how interface should look like
export interface CustomButtonProps{
  title: string;
  containerStyles?: string;
  //Question
  handleClick?:
  MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}
export interface SearchManufacturerProps{
  manufacturer: string;
  //Takes in manufactuer as string. Does nothing.
  setManufacturer: (manufacturer: string) => void;
}

//Reference api for props
export interface CarProps{
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}