import { MouseEventHandler } from "react";
export interface customButtonProps{
    title: string,
    containerStyles?: string,
    handleclick?:MouseEventHandler<HTMLButtonElement>,
    btnType?:"button"|"submit"
    textStyles?:string
    rightIcon?:string
    isDisabled?:boolean
    

}
export interface SearchMenufactureProps{
    menufature: string;
    setmenufature: (menufature:string)=>void;
}
export interface CarProps{
    city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}