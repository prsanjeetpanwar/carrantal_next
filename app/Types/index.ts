import { MouseEventHandler } from "react";

export interface customButtonProps{
    title: string,
    containerStyles?: string,
    handleclick?:MouseEventHandler<HTMLButtonElement>,
    btnType?:"button"|"submit"
    

}
export interface SearchMenufactureProps{
    menufature: string;
    setmenufature: (menufature:string)=>void;
}